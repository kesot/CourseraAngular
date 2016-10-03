module app {
    "use strict";

    var appModule = angular.module("ShoppingListCheckOff", []);
    appModule
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService)
        .controller("ToBuyController", ToBuyController)
        .controller("AlreadyBoughtController", AlreadyBoughtController);
}
