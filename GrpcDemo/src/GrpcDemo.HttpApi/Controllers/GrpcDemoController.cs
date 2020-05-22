using GrpcDemo.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace GrpcDemo.Controllers
{
    /* Inherit your controllers from this class.
     */
    public abstract class GrpcDemoController : AbpController
    {
        protected GrpcDemoController()
        {
            LocalizationResource = typeof(GrpcDemoResource);
        }
    }
}