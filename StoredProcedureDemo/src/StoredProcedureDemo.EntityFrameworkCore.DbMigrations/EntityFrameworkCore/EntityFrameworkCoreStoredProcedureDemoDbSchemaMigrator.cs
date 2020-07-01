using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using StoredProcedureDemo.Data;
using Volo.Abp.DependencyInjection;

namespace StoredProcedureDemo.EntityFrameworkCore
{
    public class EntityFrameworkCoreStoredProcedureDemoDbSchemaMigrator
        : IStoredProcedureDemoDbSchemaMigrator, ITransientDependency
    {
        private readonly IServiceProvider _serviceProvider;

        public EntityFrameworkCoreStoredProcedureDemoDbSchemaMigrator(
            IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        public async Task MigrateAsync()
        {
            /* We intentionally resolving the StoredProcedureDemoMigrationsDbContext
             * from IServiceProvider (instead of directly injecting it)
             * to properly get the connection string of the current tenant in the
             * current scope.
             */

            var dbContext = _serviceProvider.GetRequiredService<StoredProcedureDemoMigrationsDbContext>();
            await dbContext.Database.MigrateAsync();

            //GetUsernames procedure
            await dbContext.Database.ExecuteSqlRawAsync(@"DROP PROCEDURE IF EXISTS [dbo].[GetUsernames];");
            await dbContext.Database.ExecuteSqlRawAsync(@"
            CREATE PROCEDURE [dbo].[GetUsernames]
            AS
            BEGIN
                SET NOCOUNT ON;
                SELECT UserName FROM AbpUsers
            END");


            //DeleteUserById procedure
            await dbContext.Database.ExecuteSqlRawAsync(@"DROP PROCEDURE IF EXISTS [dbo].[DeleteUserById];");
            await dbContext.Database.ExecuteSqlRawAsync(@"
            CREATE PROCEDURE [dbo].[DeleteUserById]
            @id uniqueidentifier  
            AS
            BEGIN
                SET NOCOUNT ON;
                DELETE FROM AbpUsers WHERE [Id] = @id
            END");


            //UpdateEmailById procedure
            await dbContext.Database.ExecuteSqlRawAsync(@"DROP PROCEDURE IF EXISTS [dbo].[UpdateEmailById];");
            await dbContext.Database.ExecuteSqlRawAsync(@"
            CREATE PROCEDURE [dbo].[UpdateEmailById]
            @email nvarchar(256),
            @id uniqueidentifier
            AS
            BEGIN
                SET NOCOUNT ON;
                UPDATE AbpUsers SET [Email] = @email WHERE [Id] = @id
            END");


            //UserAdminView view
            await dbContext.Database.ExecuteSqlRawAsync(@"DROP VIEW IF EXISTS [dbo].[UserAdminView];");
            await dbContext.Database.ExecuteSqlRawAsync(@"
            CREATE VIEW [dbo].[UserAdminView]
            AS
            SELECT * FROM  dbo.AbpUsers WHERE Name = 'admin'");


            //GetUsernameById function
            await dbContext.Database.ExecuteSqlRawAsync(@"DROP FUNCTION IF EXISTS [dbo].[GetUsernameById];");
            await dbContext.Database.ExecuteSqlRawAsync(@"
            CREATE FUNCTION [dbo].[GetUsernameById](@id uniqueidentifier)
            RETURNS nvarchar(256)
            AS
            BEGIN
	            DECLARE @username nvarchar(256)
	            SELECT @username = [UserName] FROM AbpUsers WHERE [ID] = @id
	            RETURN @username
            END");
        }
    }
}
