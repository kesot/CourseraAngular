var app;
(function (app) {
    "use strict";
    var ToBuyController = (function () {
        function ToBuyController(shoppingListCheckOffService) {
            this.shoppingListCheckOffService = shoppingListCheckOffService;
            this.itemsToBuy = shoppingListCheckOffService.toBuy;
        }
        ToBuyController.prototype.buyItem = function (index) {
            this.shoppingListCheckOffService.buyItem(index);
        };
        ToBuyController.$inject = ['ShoppingListCheckOffService'];
        return ToBuyController;
    }());
    app.ToBuyController = ToBuyController;
})(app || (app = {}));
//# sourceMappingURL=ToBuyController.js.map