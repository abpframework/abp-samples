using EventOrganizer.Events;
using MongoDB.Driver;
using EventOrganizer.Users;
using Volo.Abp.Data;
using Volo.Abp.MongoDB;

namespace EventOrganizer.MongoDB
{
    [ConnectionStringName("Default")]
    public class EventOrganizerMongoDbContext : AbpMongoDbContext
    {
        public IMongoCollection<AppUser> Users => Collection<AppUser>();

        public IMongoCollection<Event> Events => Collection<Event>();

        protected override void CreateModel(IMongoModelBuilder modelBuilder)
        {
            base.CreateModel(modelBuilder);

            modelBuilder.Entity<AppUser>(b =>
            {
                b.CollectionName = "AbpUsers";
            });

            modelBuilder.Entity<Event>(b =>
            {
                b.CollectionName = "Events";
            });
        }
    }
}
