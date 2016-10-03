var app;
(function (app) {
    "use strict";
    var AlreadyBoughtController = (function () {
        function AlreadyBoughtController(shoppingListCheckOffService) {
            this.boughtItems = shoppingListCheckOffService.bought;
        }
        AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
        return AlreadyBoughtController;
    }());
    app.AlreadyBoughtController = AlreadyBoughtController;
})(app || (app = {}));
//# sourceMappingURL=AlreadyBoughtController.js.map