var app;
(function (app) {
    "use strict";
    var MenuSearchService = (function () {
        function MenuSearchService($http, baseUrl) {
            this.$http = $http;
            this.baseUrl = baseUrl;
        }
        MenuSearchService.prototype.getMatchedMenuItems = function (searchTerm) {
            return this.$http
                .get(this.baseUrl + "/menu_items.json")
                .then(function (result) {
                var allItems = result.data.menu_items;
                return allItems.filter(function (menuItem) { return menuItem.description.indexOf(searchTerm) !== -1; });
            });
        };
        MenuSearchService.$inject = ['$http', 'BaseUrl'];
        return MenuSearchService;
    }());
    app.MenuSearchService = MenuSearchService;
})(app || (app = {}));
//# sourceMappingURL=MenuSearchService.js.map