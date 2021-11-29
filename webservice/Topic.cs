namespace WebService_WeddingWishes
{
    /// <summary>
    /// Object class representing a message topic.
    /// </summary>
    public class Topic
    {
        /// <summary>
        /// Gets or sets the unique identifier of the topic.
        /// </summary>
        public int Id { get; set; }
        /// <summary>
        /// Gets or sets the body of the topics.
        /// </summary>
        public string Text { get; set; }
    }
}