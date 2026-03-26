using Volo.Abp.Data;
using Volo.Abp.MongoDB;
using MongoDB.Driver;
using MovieCollectionApp.Genres;
using MovieCollectionApp.Actors;
using MovieCollectionApp.Movies;

namespace MovieCollectionApp.MongoDB;

[ConnectionStringName("Default")]
public class MovieCollectionAppMongoDbContext : AbpMongoDbContext
{

    /* Add mongo collections here. Example:
     * public IMongoCollection<Question> Questions => Collection<Question>();
     */
    
    public IMongoCollection<Genre> Genres => Collection<Genre>();

    public IMongoCollection<Actor> Actors => Collection<Actor>();

    public IMongoCollection<Movie> Movies => Collection<Movie>();

    protected override void CreateModel(IMongoModelBuilder modelBuilder)
    {
        base.CreateModel(modelBuilder);

        //builder.Entity<YourEntity>(b =>
        //{
        //    //...
        //});
    }
}
