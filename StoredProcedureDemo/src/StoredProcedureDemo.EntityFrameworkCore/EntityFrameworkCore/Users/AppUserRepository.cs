using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Common;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage;
using StoredProcedureDemo.Users;
using Volo.Abp.Domain.Repositories.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore;

namespace StoredProcedureDemo.EntityFrameworkCore.Users
{
    public class AppUserRepository : EfCoreRepository<StoredProcedureDemoDbContext, AppUser, Guid>, IAppUserRepository
    {
        public AppUserRepository(IDbContextProvider<StoredProcedureDemoDbContext> dbContextProvider) : base(
            dbContextProvider)
        {
        }

        public async Task<List<string>> GetUserNames(CancellationToken cancellationToken = default)
        {
            await EnsureConnectionOpenAsync(cancellationToken);

            using (var command = CreateCommand("GetUsernames", CommandType.StoredProcedure))
            {
                using (var dataReader = await command.ExecuteReaderAsync(cancellationToken))
                {
                    var result = new List<string>();

                    while (await dataReader.ReadAsync(cancellationToken))
                    {
                        result.Add(dataReader["UserName"].ToString());
                    }

                    return result;
                }
            }
        }

        public async Task<List<string>> GetAdminUsernames(CancellationToken cancellationToken = default)
        {
            await EnsureConnectionOpenAsync(cancellationToken);

            using (var command = CreateCommand("SELECT * FROM dbo.UserAdminView", CommandType.Text))
            {
                using (var dataReader = await command.ExecuteReaderAsync(cancellationToken))
                {
                    var result = new List<string>();

                    while (await dataReader.ReadAsync(cancellationToken))
                    {
                        result.Add(dataReader["UserName"].ToString());
                    }
                    return result;
                }
            }
        }

        public async Task DeleteUser(Guid id, CancellationToken cancellationToken = default)
        {
            await DbContext.Database.ExecuteSqlRawAsync(
                "EXEC DeleteUserById @id",
                new List<object> {new SqlParameter("id", id)},
                cancellationToken
            );
        }

        public async Task UpdateEmail(Guid id, string email, CancellationToken cancellationToken = default)
        {
            await DbContext.Database.ExecuteSqlRawAsync(
                "EXEC UpdateEmailById @email, @id",
                new List<object> {new SqlParameter("id", id), new SqlParameter("email", email)},
                cancellationToken);
        }

        public async Task<string> GetUserNameById(Guid id, CancellationToken cancellationToken = default)
        {
            await EnsureConnectionOpenAsync(cancellationToken);

            using (var command = CreateCommand("SELECT dbo.GetUsernameById(@id)", CommandType.Text, new SqlParameter("@id", id)))
            {
                return (await command.ExecuteScalarAsync(cancellationToken)).ToString();
            }
        }

        private DbCommand CreateCommand(string commandText, CommandType commandType, params SqlParameter[] parameters)
        {
            var command = DbContext.Database.GetDbConnection().CreateCommand();

            command.CommandText = commandText;
            command.CommandType = commandType;
            command.Transaction = DbContext.Database.CurrentTransaction?.GetDbTransaction();

            foreach (var parameter in parameters)
            {
                command.Parameters.Add(parameter);
            }

            return command;
        }

        private async Task EnsureConnectionOpenAsync(CancellationToken cancellationToken = default)
        {
            var connection = DbContext.Database.GetDbConnection();

            if (connection.State != ConnectionState.Open)
            {
                await connection.OpenAsync(cancellationToken);
            }
        }
    }
}
