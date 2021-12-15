using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Identity;

namespace MyCompanyName.MyProjectName
{
    public class DbSeederMiddleware : IMiddleware, ISingletonDependency
    {
        private bool _hostSeeded = false;

        private readonly ILogger<DbSeederMiddleware> _logger;
        private readonly IDataSeeder _dataSeeder;

        public DbSeederMiddleware(
            ILogger<DbSeederMiddleware> logger,
            IDataSeeder dataSeeder)
        {
            _logger = logger;
            _dataSeeder = dataSeeder;
        }

        public async Task InvokeAsync(HttpContext context, RequestDelegate next)
        {
            if (!_hostSeeded)
            {
                _hostSeeded = true;
                await SeedHostDataAsync();
            }
            
            await next(context);
        }

        private Task SeedHostDataAsync()
        {
            _logger.LogInformation($"Executing host database seed...");
            
            return _dataSeeder.SeedAsync(new DataSeedContext(null)
                .WithProperty(IdentityDataSeedContributor.AdminEmailPropertyName, IdentityDataSeedContributor.AdminEmailDefaultValue)
                .WithProperty(IdentityDataSeedContributor.AdminPasswordPropertyName, IdentityDataSeedContributor.AdminPasswordDefaultValue)
            );
        }
    }
}
