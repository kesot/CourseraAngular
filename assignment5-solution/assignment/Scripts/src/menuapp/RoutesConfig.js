var RoutesConfig = (function () {
    function RoutesConfig($stateProvider, $urlRouterProvider) {
        this.$stateProvider = $stateProvider;
        this.$urlRouterProvider = $urlRouterProvider;
        $urlRouterProvider.otherwise("/");
        // Home page
        $stateProvider
            .state('home', {
            url: '/',
            templateUrl: 'ng-views/home.html'
        })
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
            .state('mainList.itemDetail', {
            // url: '/item-detail/{itemId}',
            templateUrl: 'src/shoppinglist/templates/item-detail.template.html',
            controller: 'ItemDetailController as itemDetail',
            params: {
                itemId: null
            }
        });
    }
    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    return RoutesConfig;
}());
//# sourceMappingURL=RoutesConfig.js.map