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
        public ProductEditViewModel Product { get; set; }
        
        private readonly IProductAppService _productAppService;

        public ProductEdit(IProductAppService productAppService)
        {
            _productAppService = productAppService;
        }
        
        public async Task OnGetAsync(Guid id)
        {
            var productDto = await _productAppService.GetAsync(id);
            Product = new ProductEditViewModel
            {
                Id = productDto.Id,
                Name = productDto.Name,
                Price = productDto.Price,
                ConcurrencyStamp = productDto.ConcurrencyStamp
            };
        }

        public async Task<IActionResult> OnPostAsync()
        {
            await _productAppService.UpdateAsync(
                new ProductDto
                {
                    Id = Product.Id,
                    Name = Product.Name,
                    Price = Product.Price,
                    ConcurrencyStamp = Product.ConcurrencyStamp
                });
            
            return RedirectToPage("/");
        }
        
        public class ProductEditViewModel : IHasConcurrencyStamp
        {
            [HiddenInput]
            public Guid Id { get; set; }
            
            public string Name { get; set; }
            public float Price { get; set; }
            
            [HiddenInput]
            public string ConcurrencyStamp { get; set; }
        }
    }
}