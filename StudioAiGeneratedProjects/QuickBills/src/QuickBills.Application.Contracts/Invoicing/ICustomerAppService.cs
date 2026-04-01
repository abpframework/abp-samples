using System.Threading.Tasks;
using QuickBills.Dtos.Invoicing;
using Volo.Abp.Application.Services;

namespace QuickBills.Invoicing;

/// <summary>
/// Application service interface for customer management.
/// </summary>
public interface ICustomerAppService :
    ICrudAppService<
        CustomerDto,
        Guid,
        GetCustomerListInput,
        CreateUpdateCustomerDto>
{
}
