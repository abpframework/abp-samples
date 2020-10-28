using ClientSimulationDemo.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace ClientSimulationDemo.Controllers
{
    /* Inherit your controllers from this class.
     */
    public abstract class ClientSimulationDemoController : AbpController
    {
        protected ClientSimulationDemoController()
        {
            LocalizationResource = typeof(ClientSimulationDemoResource);
        }
    }
}