using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web.Script.Services;
using System.Web.Services;
using System.Xml.Linq;

namespace WebService_WeddingWishes
{
    /// <summary>
    /// Summary description for WeddingWishesWS
    /// </summary>
    [WebService(Namespace = "https://github.com/einajade-forest/WeddingWishesApp")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    [System.Web.Script.Services.ScriptService]
    public class WeddingWishesWS : System.Web.Services.WebService
    {
        readonly Random random = new Random();
        public string GetTopicsFilePath() 
        {
            string filePath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "Topics.xml");
            return Path.GetFullPath(filePath);
        }
        public string GetQuotesFilePath()
        {
            string filePath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "Quotes.xml");
            return Path.GetFullPath(filePath);
        }

        public string GetWineDescriptionsFilePath()
        {
            string filePath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "WineDescriptions.xml");
            return Path.GetFullPath(filePath);
        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json, UseHttpGet = true)]
        public Topic GetRandomTopic()
        {
            XDocument document = XDocument.Load(GetTopicsFilePath());
            XNamespace ns = "https://github.com/einajade-forest/WW-Topics";

            List<Topic> collection = (from t in document.Root.Descendants(ns + "Topic")
                                  select new Topic()
                                  {
                                      Id = (int)t.Attribute("Id"),
                                      Text = (string)t.Element(ns + "Text"),
                                  }).ToList();

            Topic result = collection[RandomId(0, (collection.Count))];
            return result;
        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json, UseHttpGet = true)]
        public Quote GetRandomQuote()
        {
            XDocument document = XDocument.Load(GetQuotesFilePath());
            XNamespace ns = "https://github.com/einajade-forest/WW-Quotes";

            List<Quote> collection = (from q in document.Root.Descendants(ns + "Quote")
                                  select new Quote()
                                  {
                                      Id = (int)q.Attribute("Id"),
                                      Text = (string)q.Element(ns + "Text"),
                                      Source = (string)q.Element(ns + "Source"),
                                  }).ToList();

            Quote result = collection[RandomId(0, (collection.Count))];
            return result;
        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json, UseHttpGet = true)]
        public WineDescription GetRandomWineDescription()
        {
            XDocument document = XDocument.Load(GetWineDescriptionsFilePath());
            XNamespace ns = "https://github.com/einajade-forest/WW-Wines";

            List<WineDescription> collection = (from w in document.Root.Descendants(ns + "WineDescription")
                                            select new WineDescription()
                                            {
                                                Id = (int)w.Attribute("Id"),
                                                Text = (string)w.Element(ns + "Text"),
                                                Source = (string)w.Element(ns + "Source"),
                                            }).ToList();

            WineDescription result = collection[RandomId(0, (collection.Count))];
            return result;
        }

        [WebMethod]
        [ScriptMethod]
        public void AddTopic(string text)
        {
            XDocument document = XDocument.Load(GetTopicsFilePath());
            XNamespace ns = "https://github.com/einajade-forest/WW-Topics";

            int currentId = (from t in document.Root.Descendants(ns + "Topic")
                             select (int)t.Attribute("Id"))
                             .Max();

            XElement topic = new XElement(ns + "Topic");
            topic.SetAttributeValue("Id", currentId + 1);

            topic.Add(new XElement(ns + "Text", text));

            document.Root.Add(topic);
            document.Save(GetTopicsFilePath());
        }

        [WebMethod]
        [ScriptMethod]
        public void AddQuote(string text, string source)
        {
            XDocument document = XDocument.Load(GetQuotesFilePath());
            XNamespace ns = "https://github.com/einajade-forest/WW-Quotes";

            int currentId = (from q in document.Root.Descendants(ns + "Quote")
                             select (int)q.Attribute("Id"))
                             .Max();

            XElement quote = new XElement(ns + "Quote");
            quote.SetAttributeValue("Id", currentId + 1);

            quote.Add(
                new XElement(ns + "Text", text),
                new XElement(ns+"Source", source)
                );

            document.Root.Add(quote);
            document.Save(GetQuotesFilePath());
        }

        [WebMethod]
        [ScriptMethod]
        public void AddWineDescription(string text, string source)
        {
            XDocument document = XDocument.Load(GetWineDescriptionsFilePath());
            XNamespace ns = "https://github.com/einajade-forest/WW-Wines";

            int currentId = (from w in document.Root.Descendants(ns + "WineDescription")
                             select (int)w.Attribute("Id"))
                             .Max();

            XElement wineDescription = new XElement(ns + "WineDescription");
            wineDescription.SetAttributeValue("Id", currentId + 1);

            wineDescription.Add(
                new XElement(ns + "Text", text),
                new XElement(ns + "Source", source)
                );

            document.Root.Add(wineDescription);
            document.Save(GetWineDescriptionsFilePath());
        }
        public int RandomId(int min, int max)
        {
            return random.Next(min, max);
        }
    }
}
