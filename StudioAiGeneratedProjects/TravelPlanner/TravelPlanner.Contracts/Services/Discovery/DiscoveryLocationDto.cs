namespace TravelPlanner.Services.Discovery;

public class DiscoveryLocationDto
{
    public string Xid { get; set; } = string.Empty;
    public string Name { get; set; } = string.Empty;
    public string Country { get; set; } = string.Empty;
    public string City { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public string ImageUrl { get; set; } = string.Empty;
    public string Category { get; set; } = string.Empty;
    public string CategoryLabel { get; set; } = string.Empty;
    public double Latitude { get; set; }
    public double Longitude { get; set; }
    public int Rating { get; set; }
    public string WikipediaUrl { get; set; } = string.Empty;
    public string OtmUrl { get; set; } = string.Empty;
}
