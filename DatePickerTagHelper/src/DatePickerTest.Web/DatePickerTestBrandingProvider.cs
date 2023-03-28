using Volo.Abp.Ui.Branding;
using Volo.Abp.DependencyInjection;

namespace DatePickerTest.Web;

[Dependency(ReplaceServices = true)]
public class DatePickerTestBrandingProvider : DefaultBrandingProvider
{
    public override string AppName => "DatePickerTest";
}
