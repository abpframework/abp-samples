using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Json;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace TravelPlanner.Services.Discovery;

public class DiscoveryAppService : ApplicationService, IDiscoveryAppService
{
    private readonly IHttpClientFactory _httpClientFactory;
    private readonly IConfiguration _configuration;
    private readonly ILogger<DiscoveryAppService> _logger;

    // Popüler destinasyon koordinatları (API key yoksa fallback)
    private static readonly List<(string Name, string City, string Country, double Lat, double Lon, string Category)> PopularDestinations = new()
    {
        ("Eiffel Tower", "Paris", "France", 48.8584, 2.2945, "cultural"),
        ("Colosseum", "Rome", "Italy", 41.8902, 12.4922, "cultural"),
        ("Acropolis", "Athens", "Greece", 37.9715, 23.7267, "cultural"),
        ("Sagrada Familia", "Barcelona", "Spain", 41.4036, 2.1744, "cultural"),
        ("Santorini Caldera", "Santorini", "Greece", 36.3932, 25.4615, "natural"),
        ("Plitvice Lakes", "Plitvice", "Croatia", 44.8654, 15.5820, "natural"),
        ("Amalfi Coast", "Amalfi", "Italy", 40.6340, 14.6027, "natural"),
        ("Dubrovnik Old Town", "Dubrovnik", "Croatia", 42.6507, 18.0944, "cultural"),
        ("Bali Rice Terraces", "Ubud", "Indonesia", -8.4095, 115.2121, "natural"),
        ("Machu Picchu", "Cusco", "Peru", -13.1631, -72.5450, "cultural"),
        ("Angkor Wat", "Siem Reap", "Cambodia", 13.4125, 103.8670, "cultural"),
        ("Ha Long Bay", "Quang Ninh", "Vietnam", 20.9101, 107.1839, "natural"),
    };

    // Unsplash ile kategori bazlı placeholder görseller
    private static readonly Dictionary<string, string[]> CategoryImages = new()
    {
        ["cultural"] = new[]
        {
            "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&q=80", // Paris
            "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&q=80", // Rome
            "https://images.unsplash.com/photo-1555993539-1732b0258235?w=600&q=80", // Greece
            "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=600&q=80", // Barcelona
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80", // Dubrovnik
            "https://images.unsplash.com/photo-1526711657229-e7e080ed7aa1?w=600&q=80", // Machu Picchu
        },
        ["natural"] = new[]
        {
            "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&q=80", // Santorini
            "https://images.unsplash.com/photo-1537953773345-d172ccf13cf4?w=600&q=80", // Bali
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80", // Mountains
            "https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=600&q=80", // Beach
        },
        ["beach"] = new[]
        {
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
            "https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=600&q=80",
            "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80",
        },
        ["city"] = new[]
        {
            "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=80",
            "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600&q=80",
            "https://images.unsplash.com/photo-1444723121867-7a241cacace9?w=600&q=80",
        }
    };

    private static readonly Dictionary<string, string> CategoryLabels = new()
    {
        ["cultural"] = "🏛️ Culture & History",
        ["natural"] = "🌿 Nature & Parks",
        ["beach"] = "🏖️ Beaches & Islands",
        ["city"] = "🏙️ City Centers",
        ["all"] = "🌍 All Destinations",
    };

    public DiscoveryAppService(
        IHttpClientFactory httpClientFactory,
        IConfiguration configuration,
        ILogger<DiscoveryAppService> logger)
    {
        _httpClientFactory = httpClientFactory;
        _configuration = configuration;
        _logger = logger;
    }

    public async Task<PagedResultDto<DiscoveryLocationDto>> GetLocationsAsync(GetDiscoveryLocationsInput input)
    {
        var apiKey = _configuration["OpenTripMap:ApiKey"];

        if (!string.IsNullOrWhiteSpace(apiKey) && apiKey != "YOUR_API_KEY_HERE")
        {
            try
            {
                return await GetLocationsFromApiAsync(input, apiKey);
            }
            catch (Exception ex)
            {
                _logger.LogWarning(ex, "OpenTripMap API failed, falling back to static data.");
            }
        }

        return GetStaticLocations(input);
    }

    public async Task<DiscoveryLocationDto> GetLocationDetailAsync(string xid)
    {
        var apiKey = _configuration["OpenTripMap:ApiKey"];

        if (!string.IsNullOrWhiteSpace(apiKey) && apiKey != "YOUR_API_KEY_HERE")
        {
            try
            {
                return await GetLocationDetailFromApiAsync(xid, apiKey);
            }
            catch (Exception ex)
            {
                _logger.LogWarning(ex, "OpenTripMap API detail failed for xid={Xid}", xid);
            }
        }

        // Static fallback by xid index
        if (int.TryParse(xid.Replace("static_", ""), out var idx) && idx < PopularDestinations.Count)
        {
            var d = PopularDestinations[idx];
            return new DiscoveryLocationDto
            {
                Xid = xid,
                Name = d.Name,
                City = d.City,
                Country = d.Country,
                Latitude = d.Lat,
                Longitude = d.Lon,
                Category = d.Category,
                CategoryLabel = CategoryLabels.GetValueOrDefault(d.Category, "🌍 Other"),
                Description = GetStaticDescription(d.Name),
                ImageUrl = GetCategoryImage(d.Category, idx),
                Rating = 3 + (idx % 3),
            };
        }

        throw new Volo.Abp.UserFriendlyException("Location not found.");
    }

    private async Task<PagedResultDto<DiscoveryLocationDto>> GetLocationsFromApiAsync(GetDiscoveryLocationsInput input, string apiKey)
    {
        var client = _httpClientFactory.CreateClient("OpenTripMap");

        var kinds = input.Category switch
        {
            "natural" => "natural",
            "cultural" => "cultural",
            "beach" => "beaches",
            "city" => "urban_environment",
            _ => "interesting_places"
        };

        // Dünya genelinde popüler yerler için bbox kullan
        var url = $"places/bbox?lon_min=-180&lat_min=-90&lon_max=180&lat_max=90&kinds={kinds}&rate=3&format=json&limit={input.MaxResultCount}&offset={input.SkipCount}&apikey={apiKey}";
        var places = await client.GetFromJsonAsync<List<OtmPlace>>(url) ?? new();

        var dtos = new List<DiscoveryLocationDto>();
        var imageIdx = 0;
        foreach (var place in places.Where(p => !string.IsNullOrWhiteSpace(p.Name)))
        {
            dtos.Add(new DiscoveryLocationDto
            {
                Xid = place.Xid,
                Name = place.Name,
                Latitude = place.Point?.Lat ?? 0,
                Longitude = place.Point?.Lon ?? 0,
                Category = input.Category ?? "cultural",
                CategoryLabel = CategoryLabels.GetValueOrDefault(input.Category ?? "cultural", "🌍 Other"),
                Rating = place.Rate,
                ImageUrl = GetCategoryImage(input.Category ?? "cultural", imageIdx++),
            });
        }

        return new PagedResultDto<DiscoveryLocationDto>(places.Count, dtos);
    }

    private async Task<DiscoveryLocationDto> GetLocationDetailFromApiAsync(string xid, string apiKey)
    {
        var client = _httpClientFactory.CreateClient("OpenTripMap");
        var detail = await client.GetFromJsonAsync<OtmPlaceDetail>($"places/xid/{xid}?apikey={apiKey}");

        if (detail == null) throw new Volo.Abp.UserFriendlyException("Location not found.");

        return new DiscoveryLocationDto
        {
            Xid = detail.Xid,
            Name = detail.Name,
            Country = detail.Address?.Country ?? "",
            City = detail.Address?.City ?? detail.Address?.State ?? "",
            Description = detail.WikipediaExtracts?.Text ?? "",
            ImageUrl = detail.Preview?.Source ?? GetCategoryImage("cultural", 0),
            Category = detail.Kinds?.Split(',').FirstOrDefault() ?? "cultural",
            CategoryLabel = CategoryLabels.GetValueOrDefault(detail.Kinds?.Split(',').FirstOrDefault() ?? "cultural", "🌍 Other"),
            Latitude = detail.Point?.Lat ?? 0,
            Longitude = detail.Point?.Lon ?? 0,
            Rating = detail.Rate,
            WikipediaUrl = detail.Wikipedia ?? "",
        };
    }

    private PagedResultDto<DiscoveryLocationDto> GetStaticLocations(GetDiscoveryLocationsInput input)
    {
        var filtered = PopularDestinations.AsEnumerable();

        if (!string.IsNullOrWhiteSpace(input.Category) && input.Category != "all")
            filtered = filtered.Where(d => d.Category == input.Category);

        if (!string.IsNullOrWhiteSpace(input.SearchKeyword))
            filtered = filtered.Where(d =>
                d.Name.Contains(input.SearchKeyword, StringComparison.OrdinalIgnoreCase) ||
                d.City.Contains(input.SearchKeyword, StringComparison.OrdinalIgnoreCase) ||
                d.Country.Contains(input.SearchKeyword, StringComparison.OrdinalIgnoreCase));

        var total = filtered.Count();
        var paged = filtered.Skip(input.SkipCount).Take(input.MaxResultCount).ToList();

        var dtos = paged.Select((d, i) =>
        {
            var globalIdx = PopularDestinations.IndexOf(d);
            return new DiscoveryLocationDto
            {
                Xid = $"static_{globalIdx}",
                Name = d.Name,
                City = d.City,
                Country = d.Country,
                Latitude = d.Lat,
                Longitude = d.Lon,
                Category = d.Category,
                CategoryLabel = CategoryLabels.GetValueOrDefault(d.Category, "🌍 Other"),
                Description = GetStaticDescription(d.Name),
                ImageUrl = GetCategoryImage(d.Category, globalIdx),
                Rating = 3 + (globalIdx % 3),
            };
        }).ToList();

        return new PagedResultDto<DiscoveryLocationDto>(total, dtos);
    }

    private static string GetCategoryImage(string category, int index)
    {
        if (CategoryImages.TryGetValue(category, out var images) && images.Length > 0)
            return images[index % images.Length];
        return $"https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80";
    }

    private static string GetStaticDescription(string name) => name switch
    {
        "Eiffel Tower" => "The iconic iron lattice tower on the Champ de Mars in Paris, France. Built in 1889, it stands 330 metres tall and remains one of the world's most visited monuments.",
        "Colosseum" => "An ancient oval amphitheatre in the centre of Rome, Italy. Built in 70–80 AD, it is the largest amphitheatre ever built and a UNESCO World Heritage Site.",
        "Acropolis" => "An ancient citadel located on a rocky outcrop above Athens, Greece. It contains several ancient buildings of great architectural and historic significance.",
        "Sagrada Familia" => "A large unfinished basilica in Barcelona, designed by architect Antoni Gaudí. Under construction since 1882, it is one of the most extraordinary architectural works in the world.",
        "Santorini Caldera" => "A stunning volcanic island in the Aegean Sea with iconic whitewashed buildings, blue-domed churches, and breathtaking sunsets. A dream destination for many travellers.",
        "Plitvice Lakes" => "A national park in central Croatia renowned for its chain of 16 terraced lakes joined by waterfalls. A UNESCO World Heritage Site and one of Europe's most beautiful natural wonders.",
        "Amalfi Coast" => "A stunning stretch of coastline in southern Italy, known for its dramatic cliffs, colorful villages, lemon groves, and crystal-clear Mediterranean waters.",
        "Dubrovnik Old Town" => "A walled city on the Adriatic Sea coast in Croatia. Known as the Pearl of the Adriatic, it features baroque architecture, stunning city walls, and a rich maritime heritage.",
        "Bali Rice Terraces" => "The iconic UNESCO-listed rice terraces of Bali, carved into the hillsides over centuries. The Subak irrigation system reflects the Balinese philosophy of Tri Hita Karana.",
        "Machu Picchu" => "An Incan citadel set high in the Andes Mountains in Peru. Built in the 15th century and later abandoned, it is renowned for its sophisticated dry-stone walls and stunning panoramic views.",
        "Angkor Wat" => "A temple complex in Cambodia and the largest religious monument in the world. Built in the 12th century, it is a UNESCO World Heritage Site and symbol of Cambodia.",
        "Ha Long Bay" => "A UNESCO World Heritage Site in northeast Vietnam, featuring thousands of limestone islands topped with rainforests, rising from emerald waters. A breathtaking natural wonder.",
        _ => "A spectacular destination waiting to be explored. Discover its unique culture, history, and natural beauty."
    };
}
