using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using EShopOnAbp.PaymentService.PaymentRequests;
using Newtonsoft.Json.Linq;
using PayPalCheckoutSdk.Core;
using PayPalCheckoutSdk.Orders;
using Volo.Abp.DependencyInjection;

namespace EShopOnAbp.PaymentService.PaymentMethods;

[ExposeServices(typeof(IPaymentMethod), typeof(PaypalMethod))]
public class PaypalMethod : IPaymentMethod
{
    private readonly PayPalHttpClient _payPalHttpClient;
    private readonly PaymentRequestDomainService _paymentRequestDomainService;
    public string Name => PaymentMethodNames.PayPal;

    public PaypalMethod(PayPalHttpClient payPalHttpClient, PaymentRequestDomainService paymentRequestDomainService)
    {
        _payPalHttpClient = payPalHttpClient;
        _paymentRequestDomainService = paymentRequestDomainService;
    }

    public async Task<PaymentRequestStartResultDto> StartAsync(PaymentRequest paymentRequest,
        PaymentRequestStartDto input)
    {
        var totalCheckoutPrice = paymentRequest.Products.Sum(s => s.TotalPrice);

        var order = new OrderRequest
        {
            CheckoutPaymentIntent = "CAPTURE",
            ApplicationContext = new ApplicationContext
            {
                ReturnUrl = input.ReturnUrl,
                CancelUrl = input.CancelUrl,
            },
            PurchaseUnits = new List<PurchaseUnitRequest>
            {
                new PurchaseUnitRequest
                {
                    AmountWithBreakdown = new AmountWithBreakdown
                    {
                        AmountBreakdown = new AmountBreakdown
                        {
                            ItemTotal = new Money
                            {
                                CurrencyCode = paymentRequest.Currency,
                                Value = totalCheckoutPrice.ToString(
                                    $"{CultureInfo.CurrentCulture.NumberFormat.CurrencyDecimalSeparator}00")
                            }
                        },
                        CurrencyCode = paymentRequest.Currency,
                        Value = totalCheckoutPrice.ToString(
                            $"{CultureInfo.CurrentCulture.NumberFormat.CurrencyDecimalSeparator}00"),
                    },
                    Items = paymentRequest.Products.Select(p => new Item
                    {
                        Quantity = p.Quantity.ToString(),
                        Name = p.Name,
                        UnitAmount = new Money
                        {
                            CurrencyCode = paymentRequest.Currency,
                            Value = p.UnitPrice.ToString(
                                $"{CultureInfo.CurrentCulture.NumberFormat.CurrencyDecimalSeparator}00")
                        }
                    }).ToList(),
                    ReferenceId = paymentRequest.Id.ToString()
                }
            }
        };

        var request = new OrdersCreateRequest();
        request.Prefer("return=representation");
        request.RequestBody(order);

        var result = (await _payPalHttpClient.Execute(request)).Result<Order>();

        return new PaymentRequestStartResultDto
        {
            CheckoutLink = result.Links.First(x => x.Rel == "approve").Href
        };
    }

    public async Task<PaymentRequest> CompleteAsync(IPaymentRequestRepository paymentRequestRepository, string token)
    {
        var request = new OrdersCaptureRequest(token);
        request.RequestBody(new OrderActionRequest());

        var order = (await _payPalHttpClient.Execute(request)).Result<Order>();

        var paymentRequestId = Guid.Parse(order.PurchaseUnits.First().ReferenceId);
        return await _paymentRequestDomainService.UpdatePaymentRequestStateAsync(paymentRequestId, order.Status,
            order.Id);
    }

    public async Task HandleWebhookAsync(string payload)
    {
        // TODO: Find better way to parse.
        var jObject = JObject.Parse(payload);

        var order = jObject["resource"].ToObject<Order>();

        var request = new OrdersGetRequest(order.Id);

        // Ensure order object comes from PayPal
        var response = await _payPalHttpClient.Execute(request);
        order = response.Result<Order>();

        var paymentRequestId = Guid.Parse(order.PurchaseUnits.First().ReferenceId);
        await _paymentRequestDomainService.UpdatePaymentRequestStateAsync(paymentRequestId, order.Status, order.Id);
    }
}