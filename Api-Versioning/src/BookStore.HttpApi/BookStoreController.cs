using BookStore.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace BookStore;

public abstract class BookStoreController : AbpControllerBase
{
    protected BookStoreController()
    {
        LocalizationResource = typeof(BookStoreResource);
    }
}
