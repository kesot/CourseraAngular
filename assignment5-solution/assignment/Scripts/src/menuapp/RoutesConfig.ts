class RoutesConfig {
    static $inject = ['$stateProvider', '$urlRouterProvider'];

    constructor(
        private $stateProvider: angular.ui.IStateProvider,
        private $urlRouterProvider: angular.ui.IUrlRouterProvider) {
    }


}