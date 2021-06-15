using System.Collections.Generic;
using System.Threading.Tasks;

namespace ConcurrencyDemo.Web.Pages
{
    public class IndexModel : ConcurrencyDemoPageModel
    {
        public List<ProductDto> Products { get; private set; }

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
}