using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace ModularCrm.Ordering.UI.Pages.Ordering;

public class IndexModel : PageModel
{
    public List<OrderDto> Orders { get; set; }

    private readonly IOrderAppService _orderAppService;

    public IndexModel(IOrderAppService orderAppService)
    {
        _orderAppService = orderAppService;
    }

    public async Task OnGetAsync()
    {
        Orders = await _orderAppService.GetListAsync();
    }
}