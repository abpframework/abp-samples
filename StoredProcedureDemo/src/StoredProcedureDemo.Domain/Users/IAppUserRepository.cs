using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories;

namespace StoredProcedureDemo.Users
{
    public interface IAppUserRepository : IBasicRepository<AppUser, Guid>
    {
        Task<List<string>> GetUserNames(CancellationToken cancellationToken = default);

        Task<List<string>> GetAdminUsernames(CancellationToken cancellationToken = default);

        Task DeleteUser(Guid id, CancellationToken cancellationToken = default);

        Task UpdateEmail(Guid id, string email, CancellationToken cancellationToken = default);

        Task<string> GetUserNameById(Guid id, CancellationToken cancellationToken = default);
    }
}
