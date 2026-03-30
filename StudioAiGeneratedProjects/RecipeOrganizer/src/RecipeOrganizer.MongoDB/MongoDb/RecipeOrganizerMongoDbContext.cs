using Volo.Abp.Data;
using Volo.Abp.MongoDB;
using MongoDB.Driver;
using RecipeOrganizer.Books;

namespace RecipeOrganizer.MongoDB;

[ConnectionStringName("Default")]
public class RecipeOrganizerMongoDbContext : AbpMongoDbContext
{

    /* Add mongo collections here. Example:
     * public IMongoCollection<Question> Questions => Collection<Question>();
     */
    
    public IMongoCollection<Book> Books => Collection<Book>();

    protected override void CreateModel(IMongoModelBuilder modelBuilder)
    {
        base.CreateModel(modelBuilder);

        //builder.Entity<YourEntity>(b =>
        //{
        //    //...
        //});
    }
}
