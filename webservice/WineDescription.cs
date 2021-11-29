namespace WebService_WeddingWishes
{
    /// <summary>
    /// Object class representing a description of a bottle of wine.
    /// </summary>
    public class WineDescription
    {
        /// <summary>
        /// Gets or sets the unique identifier of the description.
        /// </summary>
        public int Id { get; set; }
        /// <summary>
        /// Gets or sets the body of the description.
        /// </summary>
        public string Text { get; set; }
        /// <summary>
        /// Gets or sets the source of the description.
        /// </summary>
        public string Source { get; set; }
    }
}