using DatePickerTest.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace DatePickerTest.Web.Pages;

/* Inherit your PageModel classes from this class.
 */
public abstract class DatePickerTestPageModel : AbpPageModel
{
    protected DatePickerTestPageModel()
    {
        LocalizationResourceType = typeof(DatePickerTestResource);
    }
}
