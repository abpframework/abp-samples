using Microsoft.Extensions.Localization;
using PersonalBudget.Localization;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace PersonalBudget;

[Dependency(ReplaceServices = true)]
public class PersonalBudgetBrandingProvider : DefaultBrandingProvider
{
    private IStringLocalizer<PersonalBudgetResource> _localizer;

    public PersonalBudgetBrandingProvider(IStringLocalizer<PersonalBudgetResource> localizer)
    {
        _localizer = localizer;
    }

    public override string AppName => _localizer["AppName"];
}