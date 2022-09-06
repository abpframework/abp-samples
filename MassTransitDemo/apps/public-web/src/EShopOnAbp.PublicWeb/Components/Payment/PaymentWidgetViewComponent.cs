using System.Collections.Generic;
using System.Threading.Tasks;
using EShopOnAbp.BasketService.Services;
using EShopOnAbp.PublicWeb.ServiceProviders;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc.UI.Widgets;

namespace EShopOnAbp.PublicWeb.Components.Payment;

[Widget(
    AutoInitialize = true,
    RefreshUrl = "/Widgets/Payment",
    StyleTypes = new[] { typeof(PaymentWidgetStyleContributor) },
    ScriptTypes = new[] { typeof(PaymentWidgetScriptContributor) }
)]
public class PaymentWidgetViewComponent : AbpViewComponent
{
    private readonly UserBasketProvider _userBasketProvider;
    private readonly UserAddressProvider _userAddressProvider;
    private readonly PaymentMethodProvider _paymentMethodProvider;

    public PaymentWidgetViewComponent(
        UserBasketProvider userBasketProvider,
        UserAddressProvider userAddressProvider,
        PaymentMethodProvider paymentMethodProvider)
    {
        _userBasketProvider = userBasketProvider;
        _userAddressProvider = userAddressProvider;
        _paymentMethodProvider = paymentMethodProvider;
    }

    public async Task<IViewComponentResult> InvokeAsync()
    {
        var viewModel = new PaymentViewModel
        {
            Basket = await _userBasketProvider.GetBasketAsync(),
            Address = _userAddressProvider.GetDemoAddresses(),
            PaymentMethods = await _paymentMethodProvider.GetPaymentMethodsAsync()
        };
        return View("~/Components/Payment/Default.cshtml", viewModel);
    }
}

public class PaymentViewModel
{
    public BasketDto Basket { get; set; }
    public List<AddressDto> Address { get; set; }
    public List<PaymentMethodViewModel> PaymentMethods { get; set; }
}