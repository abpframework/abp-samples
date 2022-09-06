using System.Collections.Generic;

namespace EShopOnAbp.PaymentService.PayPal
{
    public class PayPalOptions
    {
        public string ClientId { get; set; }

        public string Secret { get; set; }

        public string Locale { get; set; }

        /// <summary>
        /// "Sandbox" or "Live". Default value is "Sandbox"
        /// </summary>
        public string Environment { get; set; } = PayPalConsts.Environment.Sandbox;

        public bool Recommended { get; set; }

        public List<string> ExtraInfos { get; set; } = new();
    }
}
