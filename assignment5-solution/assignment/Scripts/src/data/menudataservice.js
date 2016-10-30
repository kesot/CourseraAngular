var MenuDataService = (function () {
    function MenuDataService($http, baseUrl) {
        this.$http = $http;
        this.baseUrl = baseUrl;
    }
    MenuDataService.prototype.getAllCategories = function () {
        return this.$http
            .get(this.baseUrl + "/categories.json")
            .then(function (result) {
            return result.data;
        });
    };
    MenuDataService.prototype.getItemsForCategory = function (categoryShortName) {
        return this.$http({
            url: this.baseUrl + "/menu_items.json",
            method: 'GET',
            params: { category: categoryShortName }
        })
            .then(function (result) {
            return result.data.menu_items;
        });
    };
    MenuDataService.$inject = ['$http', 'BaseUrl'];
    MenuDataService.Name = 'MenuDataService';
    return MenuDataService;
}());
//# sourceMappingURL=MenuDataService.js.map