class RoutesConfig {
    static $inject = ['$stateProvider', '$urlRouterProvider'];

    constructor(
        private $stateProvider: angular.ui.IStateProvider,
        private $urlRouterProvider: angular.ui.IUrlRouterProvider) {

        $urlRouterProvider.otherwise("/");

        // Home page
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'ng-views/home.html'
            })

            // Premade list page
            .state('categories', {
                url: '/categories',
                templateUrl: 'ng-views/categories.html',
                controller: 'MainShoppingListController as mainList',
                resolve: {
                    items: ['ShoppingListService', function (ShoppingListService) {
                        return ShoppingListService.getItems();
                    }]
                }
            })

            // Item detail
            .state('mainList.itemDetail', {
                // url: '/item-detail/{itemId}',
                templateUrl: 'src/shoppinglist/templates/item-detail.template.html',
                controller: 'ItemDetailController as itemDetail',
                params: {
                    itemId: null
                }
            });
    }


}