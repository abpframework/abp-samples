using Acme.BookStore.Localization;
using Volo.Abp.AspNetCore.Components;

namespace Acme.BookStore.Blazor
{
    public class BookStoreComponentBase : AbpComponentBase
    {
        public BookStoreComponentBase()
        {
            LocalizationResource = typeof(BookStoreResource);
        }
    }
}
