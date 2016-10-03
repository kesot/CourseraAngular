var app;
(function (app) {
    "use strict";
    var ShoppingListCheckOffService = (function () {
        function ShoppingListCheckOffService() {
            this._toBuy = [
                { name: 'Cookies', quantity: 10 },
                { name: 'Chips', quantity: 11 },
                { name: 'Coke', quantity: 12 },
                { name: 'Beer', quantity: 13 },
                { name: 'Apple', quantity: 14 },
            ];
            this._bought = [];
        }
        ShoppingListCheckOffService.prototype.buyItem = function (index) {
            var removed = this.toBuy.splice(index, 1);
            this._bought.push(removed[0]);
        };
        Object.defineProperty(ShoppingListCheckOffService.prototype, "toBuy", {
            get: function () {
                return this._toBuy;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ShoppingListCheckOffService.prototype, "bought", {
            get: function () {
                return this._bought;
            },
            enumerable: true,
            configurable: true
        });
        return ShoppingListCheckOffService;
    }());
    app.ShoppingListCheckOffService = ShoppingListCheckOffService;
})(app || (app = {}));
//# sourceMappingURL=ShoppingListCheckOffService.js.map