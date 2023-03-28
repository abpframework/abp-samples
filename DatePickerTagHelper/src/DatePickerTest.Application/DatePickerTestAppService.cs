using System;
using System.Collections.Generic;
using System.Text;
using DatePickerTest.Localization;
using Volo.Abp.Application.Services;

namespace DatePickerTest;

/* Inherit your application services from this class.
 */
public abstract class DatePickerTestAppService : ApplicationService
{
    protected DatePickerTestAppService()
    {
        LocalizationResource = typeof(DatePickerTestResource);
    }
}
