namespace WebService_WeddingWishes
{
    /// <summary>
    /// Object class representing a quote.
    /// </summary>
    public class Quote
    {
        /// <summary>
        /// Gets or sets the unique identifier of the quote.
        /// </summary>
        public int Id { get; set; }
        /// <summary>
        /// Gets or sets the body of the quote.
        /// </summary>
        public string Text { get; set; }
        /// <summary>
        /// Gets or sets the source of the quote.
        /// </summary>
        public string Source { get; set; }
    }
}