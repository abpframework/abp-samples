using Volo.Abp.Application.Services;
using PersonalBudget.Localization;

namespace PersonalBudget.Services;

/* Inherit your application services from this class. */
public abstract class PersonalBudgetAppService : ApplicationService
{
    protected PersonalBudgetAppService()
    {
        LocalizationResource = typeof(PersonalBudgetResource);
    }
}