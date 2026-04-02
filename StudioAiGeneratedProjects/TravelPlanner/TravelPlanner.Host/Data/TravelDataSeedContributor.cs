using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Logging.Abstractions;
using TravelPlanner.Entities;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Guids;

namespace TravelPlanner.Data;

public class TravelDataSeedContributor : IDataSeedContributor, ITransientDependency
{
    public ILogger<TravelDataSeedContributor> Logger { get; set; }
    
    private readonly IRepository<Travel, Guid> _travelRepository;
    private readonly IGuidGenerator _guidGenerator;

    public TravelDataSeedContributor(
        IRepository<Travel, Guid> travelRepository,
        IGuidGenerator guidGenerator)
    {
        _travelRepository = travelRepository;
        _guidGenerator = guidGenerator;
        Logger = NullLogger<TravelDataSeedContributor>.Instance;
    }

    public async Task SeedAsync(DataSeedContext context)
    {
        Logger.LogInformation("[TravelDataSeedContributor] SeedAsync called!");
        
        // Seed data sadece hiç travel yoksa eklenir
        var count = await _travelRepository.GetCountAsync();
        Logger.LogInformation($"[TravelDataSeedContributor] Current travel count: {count}");
        
        if (count >= 15)
        {
            Logger.LogInformation("[TravelDataSeedContributor] Already seeded, skipping.");
            return;
        }
        
        // Mevcut verileri temizle (az sayıda varsa seed tekrar çalışsın)
        if (count > 0)
        {
            var existing = await _travelRepository.GetListAsync();
            await _travelRepository.DeleteManyAsync(existing, autoSave: true);
        }

        var now = DateTime.Now;

        var travels = new Travel[]
        {
            // Yaklaşan seyahatler (önümüzdeki 30 gün)
            new Travel(
                _guidGenerator.Create(),
                "Paris Bahar Tatili",
                now.AddDays(5),
                now.AddDays(12),
                TravelStatus.Planned,
                "Paris, Fransa",
                "Eyfel Kulesi, Louvre Müzesi ve Seine Nehri turu planlandı."
            ),
            new Travel(
                _guidGenerator.Create(),
                "Amsterdam Kanal Turu",
                now.AddDays(10),
                now.AddDays(15),
                TravelStatus.Planned,
                "Amsterdam, Hollanda",
                "Van Gogh Müzesi ve bisiklet turu rezervasyonları yapıldı."
            ),
            new Travel(
                _guidGenerator.Create(),
                "Barcelona Mimari Gezisi",
                now.AddDays(20),
                now.AddDays(27),
                TravelStatus.Planned,
                "Barcelona, İspanya",
                "Sagrada Familia ve Park Güell biletleri alındı."
            ),

            // Devam eden seyahatler
            new Travel(
                _guidGenerator.Create(),
                "Roma Tarih Turu",
                now.AddDays(-3),
                now.AddDays(4),
                TravelStatus.Ongoing,
                "Roma, İtalya",
                "Kolezyum, Vatikan ve Trevi Çeşmesi ziyaretleri devam ediyor."
            ),
            new Travel(
                _guidGenerator.Create(),
                "Prag Kültür Gezisi",
                now.AddDays(-2),
                now.AddDays(3),
                TravelStatus.Ongoing,
                "Prag, Çek Cumhuriyeti",
                "Prag Kalesi ve Karlov Köprüsü gezisi süresince."
            ),

            // Tamamlanmış seyahatler
            new Travel(
                _guidGenerator.Create(),
                "Tokyo Yeni Yıl Gezisi",
                now.AddDays(-60),
                now.AddDays(-50),
                TravelStatus.Completed,
                "Tokyo, Japonya",
                "Shibuya, Akihabara ve Fuji Dağı ziyaret edildi. Harika bir deneyimdi!"
            ),
            new Travel(
                _guidGenerator.Create(),
                "New York İş Seyahati",
                now.AddDays(-45),
                now.AddDays(-40),
                TravelStatus.Completed,
                "New York, ABD",
                "Times Square, Central Park ve iş toplantıları tamamlandı."
            ),
            new Travel(
                _guidGenerator.Create(),
                "Santorini Balayı",
                now.AddDays(-90),
                now.AddDays(-83),
                TravelStatus.Completed,
                "Santorini, Yunanistan",
                "Oia köyü, mavi kubbeli kiliseler ve günbatımı izlendi."
            ),
            new Travel(
                _guidGenerator.Create(),
                "Bali Yoga Retreati",
                now.AddDays(-120),
                now.AddDays(-108),
                TravelStatus.Completed,
                "Bali, Endonezya",
                "Ubud orman dönüşüm kampı ve tapınak ziyaretleri yapıldı."
            ),
            new Travel(
                _guidGenerator.Create(),
                "İstanbul Hafta Sonu",
                now.AddDays(-30),
                now.AddDays(-28),
                TravelStatus.Completed,
                "İstanbul, Türkiye",
                "Boğaz turu, Kapalıçarşı ve tarihi yarımada gezisi."
            ),

            // Taslak seyahatler
            new Travel(
                _guidGenerator.Create(),
                "Kyoto Sonbahar Turu",
                now.AddDays(45),
                now.AddDays(55),
                TravelStatus.Draft,
                "Kyoto, Japonya",
                "Fushimi Inari tapınağı ve Arashiyama bambu ormanı için ön planlama."
            ),
            new Travel(
                _guidGenerator.Create(),
                "Maldivler Yaz Tatili",
                now.AddDays(90),
                now.AddDays(100),
                TravelStatus.Draft,
                "Malé, Maldivler",
                "Su üstü bungalov rezervasyonu araştırılıyor."
            ),
            new Travel(
                _guidGenerator.Create(),
                "Norveç Fiyortları",
                now.AddDays(70),
                now.AddDays(80),
                TravelStatus.Draft,
                "Bergen, Norveç",
                "Kuzey ışıkları sezonu için planlama yapılıyor."
            ),

            // İptal edilmiş seyahatler
            new Travel(
                _guidGenerator.Create(),
                "Londra Müze Turu",
                now.AddDays(-15),
                now.AddDays(-10),
                TravelStatus.Cancelled,
                "Londra, İngiltere",
                "Uçuş iptali nedeniyle seyahat ertelendi."
            ),
            new Travel(
                _guidGenerator.Create(),
                "Dubai Alışveriş Festivali",
                now.AddDays(-5),
                now.AddDays(2),
                TravelStatus.Cancelled,
                "Dubai, BAE",
                "Kişisel nedenlerle iptal edildi."
            ),
        };

        await _travelRepository.InsertManyAsync(travels, autoSave: true);
    }
}
