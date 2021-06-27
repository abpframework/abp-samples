using MongoDB.Driver;
using TodoApp.Users;
using Volo.Abp.Data;
using Volo.Abp.MongoDB;

namespace TodoApp.MongoDB
{
    [ConnectionStringName("Default")]
    public class TodoAppMongoDbContext : AbpMongoDbContext
    {
        public IMongoCollection<AppUser> Users => Collection<AppUser>();

        public IMongoCollection<TodoItem> TodoItems => Collection<TodoItem>();

        protected override void CreateModel(IMongoModelBuilder modelBuilder)
        {
            base.CreateModel(modelBuilder);

            modelBuilder.Entity<AppUser>(b =>
            {
                /* Sharing the same "AbpUsers" collection
                 * with the Identity module's IdentityUser class. */
                b.CollectionName = "AbpUsers";
            });

            modelBuilder.Entity<TodoItem>(b =>
            {
                b.CollectionName = "TodoItems";
            });
        }
    }
}
