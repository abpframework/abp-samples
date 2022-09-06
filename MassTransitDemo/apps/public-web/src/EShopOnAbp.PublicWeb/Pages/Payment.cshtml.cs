using EShopOnAbp.PaymentService.PaymentRequests;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EShopOnAbp.BasketService.Services;
using EShopOnAbp.OrderingService.Orders;
using EShopOnAbp.PublicWeb.ServiceProviders;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;
using Volo.Abp.Users;

namespace EShopOnAbp.PublicWeb.Pages;

[Authorize]
public class PaymentModel : AbpPageModel
{
    private readonly IPaymentRequestAppService _paymentRequestAppService;
    private readonly IOrderAppService _orderAppService;
    private readonly UserBasketProvider _userBasketProvider;
    private readonly UserAddressProvider _userAddressProvider;
    private readonly EShopOnAbpPublicWebPaymentOptions _publicWebPaymentOptions;

    public PaymentModel(
        IPaymentRequestAppService paymentRequestAppService,
        IOrderAppService orderAppService,
        UserBasketProvider userBasketProvider,
        UserAddressProvider userAddressProvider,
        IOptions<EShopOnAbpPublicWebPaymentOptions> publicWebPaymentOptions)
    {
        _paymentRequestAppService = paymentRequestAppService;
        _userBasketProvider = userBasketProvider;
        _userAddressProvider = userAddressProvider;
        _orderAppService = orderAppService;
        _publicWebPaymentOptions = publicWebPaymentOptions.Value;
    }

    public void OnGet()
    {
    }

    public async Task<IActionResult> OnPostAsync(PaymentPageViewModel model)
    {
        Logger.LogInformation("Payment Proceeded...");
        Logger.LogInformation($"AddressId: {model.SelectedAddressId}");
        Logger.LogInformation($"PaymentMethod: {model.SelectedPaymentMethod}");
        Logger.LogInformation($"Total Discount: {model.TotalDiscountPercentage}");

        var basket = await _userBasketProvider.GetBasketAsync();
        var productItems = ObjectMapper.Map<List<BasketItemDto>, List<OrderItemCreateDto>>(basket.Items);

        if (model.TotalDiscountPercentage != 0)
        {
            ApplyDiscountPercentageToBasketItems(productItems, model.TotalDiscountPercentage);
        }

        var placedOrder = await _orderAppService.CreateAsync(new OrderCreateDto()
        {
            PaymentMethod = model.SelectedPaymentMethod,
            Address = GetUserAddress(model.SelectedAddressId),
            Products = productItems
        });

        var paymentRequest = await _paymentRequestAppService.CreateAsync(new PaymentRequestCreationDto
        {
            OrderId = placedOrder.Id.ToString(),
            OrderNo = placedOrder.OrderNo,
            BuyerId = CurrentUser.GetId().ToString(),
            Currency = EShopOnAbpPaymentConsts.Currency,
            Products = ObjectMapper.Map<List<BasketItemDto>, List<PaymentRequestProductCreationDto>>(basket.Items)
        });

        var response = await _paymentRequestAppService.StartAsync(
            model.SelectedPaymentMethod,
            new PaymentRequestStartDto
            {
                PaymentRequestId = paymentRequest.Id,
                ReturnUrl = _publicWebPaymentOptions.PaymentSuccessfulCallbackUrl,
                CancelUrl = _publicWebPaymentOptions.PaymentFailureCallbackUrl
            });

        return Redirect(response.CheckoutLink);
    }

    public class PaymentPageViewModel
    {
        public int SelectedAddressId { get; set; }
        public string SelectedPaymentMethod { get; set; }
        public decimal TotalDiscountPercentage { get; set; }
    }

    private void ApplyDiscountPercentageToBasketItems(List<OrderItemCreateDto> productItems, decimal discount)
    {
        for (int i = 0; i < productItems.Count; i++)
        {
            productItems[i].Discount = discount;
        }
    }

    private OrderAddressDto GetUserAddress(int selectedAddressId)
    {
        var address = _userAddressProvider.GetDemoAddresses().First(q => q.Id == selectedAddressId);
        return new OrderAddressDto
        {
            Description = address.Type,
            City = address.City,
            Country = address.Country,
            Street = address.Street,
            ZipCode = address.ZipCode
        };
    }
}