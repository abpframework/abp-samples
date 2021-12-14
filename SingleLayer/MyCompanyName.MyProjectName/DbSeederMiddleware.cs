using MyCompanyName.MyProjectName.Domain.Data;
using MyCompanyName.MyProjectName.Domain.Todos;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Repositories;

namespace MyCompanyName.MyProjectName
{
    public class DbSeederMiddleware : IMiddleware, ISingletonDependency
    {
        private bool Seeded = false;
        
        private readonly MyProjectNameDbMigrationService _dbMigrationService;

        private readonly IBasicRepository<Todo, Guid> _todoRepository;

        public DbSeederMiddleware( 
            MyProjectNameDbMigrationService dbMigrationService, 
            IBasicRepository<Todo, Guid> todoRepository)
        {
            _dbMigrationService = dbMigrationService;
            _todoRepository = todoRepository;
        }

        public async Task InvokeAsync(HttpContext context, RequestDelegate next)
        {
            if (await ShouldMigrateDbAsync())
            {
                await _dbMigrationService.MigrateAsync();
                Seeded = true;
            }
            
            await next(context);
        }
        
        private async Task<bool> ShouldMigrateDbAsync()
        {
            if (Seeded)
            {
                return false;
            }
            
            try
            {
                var todos = await _todoRepository.GetPagedListAsync(0, 1, "");
                return false;
            }
            catch (Exception e)
            {
                return true;
            }
        }
    }
}
