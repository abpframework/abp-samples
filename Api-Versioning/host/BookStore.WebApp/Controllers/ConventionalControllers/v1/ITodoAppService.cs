using System.Threading.Tasks;
using Volo.Abp.Application.Services;

namespace BookStore.Controllers.ConventionalControllers.v1;

public interface ITodoAppService : IApplicationService
{
    Task<string> GetAsync();
}
