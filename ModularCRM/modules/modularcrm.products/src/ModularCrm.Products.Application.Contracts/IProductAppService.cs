using System.Threading.Tasks;
using Volo.Abp.Application.Services;

namespace ModularCrm.Products;

public interface IProductAppService : IApplicationService
{
    Task CreateAsync(ProductCreationDto input);
}