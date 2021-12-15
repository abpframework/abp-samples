using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Volo.Abp.Domain.Repositories;

namespace CustomApplicationModules
{
    public class TestAppService : CustomApplicationModulesAppService
    {
        private readonly IRepository<Test> _testRepository;

        public TestAppService(IRepository<Test> testRepository)
        {
            _testRepository = testRepository;
        }

        public async Task<List<Test>> GetListAsync()
        {
            await _testRepository.InsertAsync(new Test {Name = "name", Code = "code1"});

            await UnitOfWorkManager.Current.SaveChangesAsync();

            return await (await _testRepository.GetQueryableAsync()).Include(t => t.Creator).Include(t => t.LastModifier).ToListAsync();
        }
    }
}
