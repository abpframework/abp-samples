using DatePickerTest.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace DatePickerTest.Controllers;

/* Inherit your controllers from this class.
 */
public abstract class DatePickerTestController : AbpControllerBase
{
    protected DatePickerTestController()
    {
        LocalizationResource = typeof(DatePickerTestResource);
    }
}
