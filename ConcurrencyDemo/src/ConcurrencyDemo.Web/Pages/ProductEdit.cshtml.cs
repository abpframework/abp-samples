using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Volo.Abp.Domain.Entities;

namespace ConcurrencyDemo.Web.Pages
{
    public class ProductEdit : PageModel
    {
        [BindProperty]
        public ProductDto Product { get; set; }

        private readonly IProductAppService _productAppService;

        public ProductEdit(IProductAppService productAppService)
        {
            _productAppService = productAppService;
        }
        
        public async Task OnGetAsync(Guid id)
        {
            Product = await _productAppService.GetAsync(id);
        }

        public async Task<IActionResult> OnPostAsync()
        {
            await _productAppService.UpdateAsync(Product);
            return RedirectToPage("/");
        }
    }
}