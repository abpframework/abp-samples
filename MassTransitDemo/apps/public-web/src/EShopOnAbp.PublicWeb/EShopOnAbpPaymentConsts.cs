namespace EShopOnAbp.PublicWeb
{
    public static class EShopOnAbpPaymentConsts
    {
        public const string Currency = "USD";
        public const string PaymentMethodCookie = "selected_payment_method"; // Setted in payment-widget.js

        public static class DemoAddressTypes
        {
            public const string Work = "Work";
            public const string Home = "Home";
        }
    }
}
