using MongoDB.Driver;
using PersonalBudget.Entities;
using Volo.Abp.Data;
using Volo.Abp.MongoDB;

namespace PersonalBudget.Data;

[ConnectionStringName("Default")]
public class PersonalBudgetDbContext : AbpMongoDbContext
{
    public IMongoCollection<Category> Categories => Collection<Category>();
    public IMongoCollection<Expense> Expenses => Collection<Expense>();

    protected override void CreateModel(IMongoModelBuilder modelBuilder)
    {
        base.CreateModel(modelBuilder);

        modelBuilder.Entity<Category>(b =>
        {
            b.CollectionName = "Categories";
        });

        modelBuilder.Entity<Expense>(b =>
        {
            b.CollectionName = "Expenses";
        });
    }
}

