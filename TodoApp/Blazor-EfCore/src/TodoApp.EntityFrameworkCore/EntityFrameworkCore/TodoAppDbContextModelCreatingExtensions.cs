using Microsoft.EntityFrameworkCore;
using Volo.Abp;

namespace TodoApp.EntityFrameworkCore
{
    public static class TodoAppDbContextModelCreatingExtensions
    {
        public static void ConfigureTodoApp(this ModelBuilder builder)
        {
            Check.NotNull(builder, nameof(builder));

            /* Configure your own tables/entities inside here */

            //builder.Entity<YourEntity>(b =>
            //{
            //    b.ToTable(TodoAppConsts.DbTablePrefix + "YourEntities", TodoAppConsts.DbSchema);
            //    b.ConfigureByConvention(); //auto configure for the base class props
            //    //...
            //});
        }
    }
}