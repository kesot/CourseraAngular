var data;
(function (data) {
    "use strict";
    var appModule = angular.module("data", [])
        .controller(data.CategoriesController.Name, data.CategoriesController)
        .controller(data.ItemsController.Name, data.ItemsController)
        .service(MenuDataService.Name, MenuDataService)
        .constant('BaseUrl', "https://davids-restaurant.herokuapp.com")
        .component(data.CategoriesComponent.Name, new data.CategoriesComponent());
})(data || (data = {}));
//# sourceMappingURL=data.module.js.map