var app;
(function (app) {
    "use strict";
    var appModule = angular.module("ShoppingListCheckOff", []);
    appModule
        .service('ShoppingListCheckOffService', app.ShoppingListCheckOffService)
        .controller("ToBuyController", app.ToBuyController)
        .controller("AlreadyBoughtController", app.AlreadyBoughtController);
})(app || (app = {}));
//# sourceMappingURL=app.js.map