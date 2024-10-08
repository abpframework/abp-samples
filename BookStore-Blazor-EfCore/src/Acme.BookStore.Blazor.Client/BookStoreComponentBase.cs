using Acme.BookStore.Localization;
using Volo.Abp.AspNetCore.Components;

namespace Acme.BookStore.Blazor.Client;

public abstract class BookStoreComponentBase : AbpComponentBase
{
    protected BookStoreComponentBase()
    {
        LocalizationResource = typeof(BookStoreResource);
    }
}
