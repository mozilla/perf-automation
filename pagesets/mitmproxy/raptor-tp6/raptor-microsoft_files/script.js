(function () {
    var config = PriceSpider.widgetConfigs["57e9a3b17b7b3326bcc397fa"];
    PS_$ = PriceSpider.$;

    config.on("create", function (widget) {
        widget.container.find('.ps-online-tab-label').on('keydown', event => {
            if (event instanceof KeyboardEvent && (event.keyCode === 13 || event.keyCode === 32)) {
                var online = PS_$(event.currentTarget).attr("aria-checked", true);
                var local = PS_$(".ps-local-tab-label").attr("aria-checked", false);
            }
        });
        widget.container.find('.ps-local-tab-label').on('keydown', event => {
            if (event instanceof KeyboardEvent && (event.keyCode === 13 || event.keyCode === 32)) {
                var local = PS_$(event.currentTarget).attr("aria-checked", true);
                var online = PS_$(".ps-online-tab-label").attr("aria-checked", false);
            }
        });
    });

    config.on("data", function (widget) {
        if (widget && widget.products && widget.products.length)
            widget.target.attr("data-name", widget.products[0].title);
    });

    if (PriceSpider && PriceSpider.countryCode === "AU")
        PriceSpider.onAfterDocumentReady(function() {
            var widgets = PS_$('.ps-widget');
            var disclaimer = "<div class='ps-wtb-button-disclaimer'>The prices displayed are currently the lowest prices offered by stated retailers that have been located by an automated web crawler. These prices are subject to change. Prices are not offered by Microsoft unless stated.</div>";
            for (var i = 0; i < widgets.length; i++) {
                var target = PS_$(widgets[i]);
                if (!target.parent().find('.ps-wtb-button-disclaimer').length)
                    target.parent().append(disclaimer);
            }
        });
})();