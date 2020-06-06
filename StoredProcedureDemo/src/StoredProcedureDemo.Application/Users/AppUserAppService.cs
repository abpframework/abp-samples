using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;

namespace StoredProcedureDemo.Users
{
    public class AppUserAppService : ApplicationService
    {
        private readonly IAppUserRepository _appUserRepository;

        public AppUserAppService(IAppUserRepository appUserRepository)
        {
            _appUserRepository = appUserRepository;
        }

        public async Task<List<string>> GetUserNames()
        {
            return await _appUserRepository.GetUserNames();
        }

        public async Task<List<string>> GetAdminUsernames()
        {
            return await _appUserRepository.GetAdminUsernames();
        }

        public async Task DeleteUser(Guid id)
        {
            await _appUserRepository.DeleteUser(id);
        }

        public async Task UpdateEmail(Guid id, string email)
        {
            await _appUserRepository.UpdateEmail(id, email);
        }

        public async Task<string> GetUserNameById(Guid id)
        {
            return await _appUserRepository.GetUserNameById(id);
        }
    }
}
