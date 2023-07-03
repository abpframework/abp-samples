using System;
using System.Collections.Generic;
using System.Text;
using ImageManipulationDemo.Localization;
using Volo.Abp.Application.Services;

namespace ImageManipulationDemo;

/* Inherit your application services from this class.
 */
public abstract class ImageManipulationDemoAppService : ApplicationService
{
    protected ImageManipulationDemoAppService()
    {
        LocalizationResource = typeof(ImageManipulationDemoResource);
    }
}
