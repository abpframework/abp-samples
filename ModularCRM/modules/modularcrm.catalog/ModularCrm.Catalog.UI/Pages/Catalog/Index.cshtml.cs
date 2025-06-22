using System.Collections.Generic;
using System.Threading.Tasks;

namespace ModularCrm.Catalog.UI.Pages.Catalog;

public class IndexModel : CatalogPageModel
{
    public List<ProductDto> Products { get; set; }

    private readonly IProductAppService _productAppService;

    public IndexModel(IProductAppService productAppService)
    {
        _productAppService = productAppService;
    }

    public async Task OnGetAsync()
    {
        Products = await _productAppService.GetListAsync();
    }
}