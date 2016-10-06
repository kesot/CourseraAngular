var app;
(function (app) {
    "use strict";
    var appModule = angular.module("NarrowItDownApp", []);
    appModule
        .service('MenuSearchService', app.MenuSearchService)
        .controller("NarrowItDownController", app.NarrowItDownController)
        .constant('BaseUrl', "https://davids-restaurant.herokuapp.com")
        .directive('foundItems', FoundItemsDirective.factory());
})(app || (app = {}));
//# sourceMappingURL=app.js.map