(function () {
    let anonymousId = abp.utils.getCookieValue("anonymous_id");

    abp.widgets.BasketWidget = function ($wrapper) {
        var widgetManager = $wrapper.data('abp-widget-manager');

        var init = function (filters) {
            $wrapper
                .find('.basket-item-remove')
                .click(function () {
                    let $this = $(this);
                    let productId = $this.parents('.basket-list-item').attr('data-product-id');
                    eShopOnAbp.basketService.basket.removeProduct({
                        productId: productId,
                        anonymousId: anonymousId
                    }).then(function () {
                        widgetManager.refresh();
                        $('.abp-widget-wrapper[data-widget-name="CartWidget"]')
                            .data('abp-widget-manager')
                            .refresh();
                        abp.notify.info("Removed the product from your basket.", "Removed basket item");
                    });
                });

            $wrapper
                .find('.basket-item-increase')
                .click(function (e) {
                    e.preventDefault();
                    let $this = $(this);
                    let productId = $this.parents('.basket-list-item').attr('data-product-id');
                    eShopOnAbp.basketService.basket.addProduct({
                        productId: productId,
                        count: 1,
                        anonymousId: anonymousId
                    }).then(function () {
                        widgetManager.refresh();
                        $('.abp-widget-wrapper[data-widget-name="CartWidget"]')
                            .data('abp-widget-manager')
                            .refresh();
                    });
                });

            $wrapper
                .find('.basket-item-decrease')
                .click(function (e) {
                    e.preventDefault();
                    let $this = $(this);                    
                    let productId = $this.parents('.basket-list-item').attr('data-product-id');
                    eShopOnAbp.basketService.basket.removeProduct({
                        productId: productId,
                        count: 1,
                        anonymousId: anonymousId
                    }).then(function () {
                        widgetManager.refresh();
                        $('.abp-widget-wrapper[data-widget-name="CartWidget"]')
                            .data('abp-widget-manager')
                            .refresh();
                    });
                });
        };

        return {
            init: init
        };
    };

    var connection = new signalR.HubConnectionBuilder()
        .withUrl("/signalr-hubs/basket")
        .build();

    connection.on("BasketProductUpdated", function (data) {
        $('.basket-list')
            .closest('.abp-widget-wrapper')
            .each(function () {
                var $wrapper = $(this);
                if ($wrapper.find('[data-product-id=' + data.productId + ']').length) {
                    var widgetManager = new abp.WidgetManager({
                        wrapper: $wrapper
                    });
                    widgetManager.refresh();
                    abp.notify.info('The product "' + data.productName + '" has been changed!', 'Your basket has been updated!');
                }
            });
    });

    connection.start().then(function () {
    }).catch(function (err) {
        return console.error(err.toString());
    });

})();