module data {
    "use strict";


    var appModule = angular.module("data", [])
        .controller(CategoriesController.Name, CategoriesController)
        .controller(ItemsController.Name, ItemsController)
        .service(MenuDataService.Name, MenuDataService)
        .constant('BaseUrl', "https://davids-restaurant.herokuapp.com")
        .component(CategoriesComponent.Name, new CategoriesComponent());

}
