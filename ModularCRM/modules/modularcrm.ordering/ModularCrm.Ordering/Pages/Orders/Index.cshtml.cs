using Microsoft.AspNetCore.Mvc.RazorPages;
using ModularCrm.Ordering.Entities;
using ModularCrm.Products.Integration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories;

namespace ModularCrm.Ordering.Pages.Orders
{
    public class IndexModel : PageModel
    {
        public List<Order> Orders { get; set; }

        // Define a dictionary for Id -> Name conversion
        public Dictionary<Guid, string> ProductNames { get; set; }

        private readonly IRepository<Order, Guid> _orderRepository;
        private readonly IProductIntegrationService _productIntegrationService;

        public IndexModel(
            IRepository<Order, Guid> orderRepository,
            IProductIntegrationService productIntegrationService)
        {
            _orderRepository = orderRepository;
            _productIntegrationService = productIntegrationService;
        }

        public async Task OnGetAsync()
        {
            // Getting the orders from this module's database
            Orders = await _orderRepository.GetListAsync();

            // Prepare a list of products we need
            var productIds = Orders.Select(o => o.ProductId).Distinct().ToList();

            // Request the related products from the product integration service
            var products = await _productIntegrationService
                .GetProductsByIdsAsync(productIds);

            // Create a dictionary to get a product name easily by its id
            ProductNames = products.ToDictionary(p => p.Id, p => p.Name);
        }
    }
}