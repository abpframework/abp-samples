using BookStore.Localization;
using Volo.Abp.ApiVersioning;
using Volo.Abp.Application.Services;

namespace BookStore;

public abstract class BookStoreAppService : ApplicationService
{
    public IRequestedApiVersion RequestedApiVersion { get; set; }

    protected BookStoreAppService()
    {
        LocalizationResource = typeof(BookStoreResource);
        ObjectMapperContext = typeof(BookStoreApplicationModule);
    }
}
