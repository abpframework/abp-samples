using System;
using System.Collections.Generic;
using System.Text;
using FileActionsDemo.Localization;
using Volo.Abp.Application.Services;

namespace FileActionsDemo
{
    /* Inherit your application services from this class.
     */
    public abstract class FileActionsDemoAppService : ApplicationService
    {
        protected FileActionsDemoAppService()
        {
            LocalizationResource = typeof(FileActionsDemoResource);
        }
    }
}
