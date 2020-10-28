using System;
using System.Collections.Generic;
using System.Text;
using ClientSimulationDemo.Localization;
using Volo.Abp.Application.Services;

namespace ClientSimulationDemo
{
    /* Inherit your application services from this class.
     */
    public abstract class ClientSimulationDemoAppService : ApplicationService
    {
        protected ClientSimulationDemoAppService()
        {
            LocalizationResource = typeof(ClientSimulationDemoResource);
        }
    }
}
