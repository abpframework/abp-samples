using System.Threading.Tasks;
using Volo.Abp.Application.Services;

namespace EfCoreDiDemo;

public interface IProductAppService : IApplicationService
{
    Task ChangeCodeAsync(ChangeProductCodeDto input);
}