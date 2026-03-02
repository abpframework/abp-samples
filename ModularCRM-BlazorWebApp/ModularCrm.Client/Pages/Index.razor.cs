using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.BlazoriseUI;

namespace ModularCrm.Pages;

public partial class Index
{
    protected override void Dispose(bool disposing)
    {
        PageLayout.ShowToolbar = true;
    }
}

