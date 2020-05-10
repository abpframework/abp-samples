using PostgeSqlDemo.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace PostgeSqlDemo.Controllers
{
    /* Inherit your controllers from this class.
     */
    public abstract class PostgeSqlDemoController : AbpController
    {
        protected PostgeSqlDemoController()
        {
            LocalizationResource = typeof(PostgeSqlDemoResource);
        }
    }
}