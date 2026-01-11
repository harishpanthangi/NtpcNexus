namespace NtpcNexus.API.Models
{
    public class Application
    {
        public int Id { get; set; }
        public required string Name { get; set; }
        public required string Description { get; set; }
        public required string Category { get; set; }
        public string? Icon { get; set; } // FontAwesome class
        public string? Url { get; set; }
        public string? Platform { get; set; } // Web, Mobile, etc.
        public int UsageCount { get; set; } // Number of users
    }
}
