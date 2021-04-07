using Microsoft.EntityFrameworkCore;
using Volo.Abp;

namespace TodoApp.EntityFrameworkCore
{
    public static class TodoAppDbContextModelCreatingExtensions
    {
        public static void ConfigureTodoApp(this ModelBuilder builder)
        {
            Check.NotNull(builder, nameof(builder));

            builder.Entity<TodoItem>(b =>
            {
                b.ToTable("TodoItems");
            });
        }
    }
}