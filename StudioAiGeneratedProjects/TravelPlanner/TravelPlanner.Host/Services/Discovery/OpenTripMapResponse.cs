using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace TravelPlanner.Services.Discovery;

// List response
public class OtmPlace
{
    [JsonPropertyName("xid")]
    public string Xid { get; set; } = string.Empty;

    [JsonPropertyName("name")]
    public string Name { get; set; } = string.Empty;

    [JsonPropertyName("rate")]
    public int Rate { get; set; }

    [JsonPropertyName("kinds")]
    public string Kinds { get; set; } = string.Empty;

    [JsonPropertyName("point")]
    public OtmPoint? Point { get; set; }
}

public class OtmPoint
{
    [JsonPropertyName("lon")]
    public double Lon { get; set; }

    [JsonPropertyName("lat")]
    public double Lat { get; set; }
}

// Detail response
public class OtmPlaceDetail
{
    [JsonPropertyName("xid")]
    public string Xid { get; set; } = string.Empty;

    [JsonPropertyName("name")]
    public string Name { get; set; } = string.Empty;

    [JsonPropertyName("rate")]
    public int Rate { get; set; }

    [JsonPropertyName("kinds")]
    public string Kinds { get; set; } = string.Empty;

    [JsonPropertyName("point")]
    public OtmPoint? Point { get; set; }

    [JsonPropertyName("wikipedia_extracts")]
    public OtmWikipediaExtracts? WikipediaExtracts { get; set; }

    [JsonPropertyName("preview")]
    public OtmPreview? Preview { get; set; }

    [JsonPropertyName("address")]
    public OtmAddress? Address { get; set; }

    [JsonPropertyName("url")]
    public string? Url { get; set; }

    [JsonPropertyName("wikipedia")]
    public string? Wikipedia { get; set; }
}

public class OtmWikipediaExtracts
{
    [JsonPropertyName("text")]
    public string Text { get; set; } = string.Empty;

    [JsonPropertyName("html")]
    public string Html { get; set; } = string.Empty;
}

public class OtmPreview
{
    [JsonPropertyName("source")]
    public string Source { get; set; } = string.Empty;

    [JsonPropertyName("height")]
    public int Height { get; set; }

    [JsonPropertyName("width")]
    public int Width { get; set; }
}

public class OtmAddress
{
    [JsonPropertyName("city")]
    public string? City { get; set; }

    [JsonPropertyName("country")]
    public string? Country { get; set; }

    [JsonPropertyName("country_code")]
    public string? CountryCode { get; set; }

    [JsonPropertyName("state")]
    public string? State { get; set; }
}
