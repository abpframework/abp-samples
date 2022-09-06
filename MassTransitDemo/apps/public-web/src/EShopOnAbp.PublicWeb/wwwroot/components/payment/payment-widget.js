(function () {
    // Write selected payment type to cookie anyways
    const paymentMethod = $(".payment-list").find(".is-selected").attr('data-payment-method');
    abp.utils.setCookieValue("selected_payment_method", paymentMethod);

    abp.widgets.PaymentWidget = function ($wrapper) {
        var widgetManager = $wrapper.data('abp-widget-manager');

        var init = function (filters) {
            $wrapper
                .find('.address-list .card')
                .click(function () {
                    const $this = $(this);
                    $this.parents(".address-list").find('.card').removeClass("is-selected");
                    $this.addClass("is-selected");
                });

            $wrapper
                .find('.payment-list .card')
                .click(el => {
                    const $this = $(el.currentTarget);
                    const paymentMethod = $this.attr('data-payment-method');
                    abp.utils.setCookieValue("selected_payment_method", paymentMethod);
                    $this.parents(".payment-list").find('.card').removeClass("is-selected");
                    $this.addClass("is-selected");
                });
        };

        return {
            init: init
        };
    };
})();