using Volo.Abp.Data;
using Volo.Abp.MongoDB;
using MongoDB.Driver;
using RecipeOrganizer.Books;
using RecipeOrganizer.Categories;
using RecipeOrganizer.Recipes;

namespace RecipeOrganizer.MongoDB;

[ConnectionStringName("Default")]
public class RecipeOrganizerMongoDbContext : AbpMongoDbContext
{

    public IMongoCollection<Book> Books => Collection<Book>();

    public IMongoCollection<Category> Categories => Collection<Category>();

    public IMongoCollection<Recipe> Recipes => Collection<Recipe>();

    protected override void CreateModel(IMongoModelBuilder modelBuilder)
    {
        base.CreateModel(modelBuilder);

        modelBuilder.Entity<Book>(b =>
        {
            b.CollectionName = "Books";
        });

        modelBuilder.Entity<Category>(b =>
        {
            b.CollectionName = "Categories";
        });

        modelBuilder.Entity<Recipe>(b =>
        {
            b.CollectionName = "Recipes";
        });
    }
}
