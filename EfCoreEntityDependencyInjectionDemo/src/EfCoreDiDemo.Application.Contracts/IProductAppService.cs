using System.Threading.Tasks;
using Volo.Abp.Application.Services;

namespace EfCoreDiDemo;

public interface IProductAppService : IApplicationService
{
    Task CreateAsync(CreateProductDto input);
    
    Task ChangeCodeAsync(ChangeProductCodeDto input);
}