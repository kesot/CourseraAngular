module app {
    "use strict";

    var appModule = angular.module("NarrowItDownApp", []);
    appModule
        .service('MenuSearchService', MenuSearchService)
        .controller("NarrowItDownController", NarrowItDownController)
        .constant('BaseUrl', "https://davids-restaurant.herokuapp.com");
}
