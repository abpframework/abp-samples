using System.Collections.Generic;
using System.Threading.Tasks;

namespace ModularCrm.Products.Web.Pages.Products;

public class IndexModel : ProductsPageModel
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