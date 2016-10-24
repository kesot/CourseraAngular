var RoutesConfig = (function () {
    function RoutesConfig($stateProvider, $urlRouterProvider) {
        this.$stateProvider = $stateProvider;
        this.$urlRouterProvider = $urlRouterProvider;
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state('home', {
            url: '/',
            templateUrl: 'Ng-Views/Home.html'
        })
            .state('categories', {
            url: '/categories',
            templateUrl: 'ng-views/MainCategories.html',
            controller: 'CategoriesController as categoriesCtrl',
            resolve: {
                categories: [
                    'MenuDataService',
                    function (menuDataService) {
                        return menuDataService.getAllCategories();
                    }
                ]
            }
        })
            .state('categories.items', {
            url: '/{categoryShortName}/items',
            templateUrl: 'ng-views/Items.html',
            controller: data.ItemsController.Name,
            controllerAs: '$ctrl',
            resolve: {
                items: [
                    'MenuDataService',
                    '$stateParams',
                    function (menuDataService, $stateParams) {
                        return menuDataService.getItemsForCategory($stateParams['categoryShortName']);
                    }
                ]
            }
        });
    }
    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    return RoutesConfig;
}());
//# sourceMappingURL=RoutesConfig.js.map