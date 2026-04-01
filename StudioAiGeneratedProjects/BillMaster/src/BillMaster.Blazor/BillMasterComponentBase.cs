using BillMaster.Localization;
using Volo.Abp.AspNetCore.Components;

namespace BillMaster.Blazor;

public abstract class BillMasterComponentBase : AbpComponentBase
{
    protected BillMasterComponentBase()
    {
        LocalizationResource = typeof(BillMasterResource);
    }
}
