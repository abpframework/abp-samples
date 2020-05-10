using System;
using System.Collections.Generic;
using System.Text;
using PostgeSqlDemo.Localization;
using Volo.Abp.Application.Services;

namespace PostgeSqlDemo
{
    /* Inherit your application services from this class.
     */
    public abstract class PostgeSqlDemoAppService : ApplicationService
    {
        protected PostgeSqlDemoAppService()
        {
            LocalizationResource = typeof(PostgeSqlDemoResource);
        }
    }
}
