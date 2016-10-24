class RoutesConfig {
    static $inject = ['$stateProvider', '$urlRouterProvider'];

    constructor(
        private $stateProvider: angular.ui.IStateProvider,
        private $urlRouterProvider: angular.ui.IUrlRouterProvider) {

        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('home',
            {
                url: '/',
                templateUrl: 'Ng-Views/Home.html'
            })
            .state('categories',
            {
                url: '/categories',
                templateUrl: 'ng-views/MainCategories.html',
                controller: 'CategoriesController as categoriesCtrl',
                resolve: {
                    categories: [
                        'MenuDataService',
                        (menuDataService: MenuDataService) => {
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
                        (menuDataService: MenuDataService, $stateParams : angular.ui.IStateParamsService) => {
                            return menuDataService.getItemsForCategory($stateParams['categoryShortName']);
                        }
                    ]
                }
            });
    }


}