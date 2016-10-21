var MenudataService = (function () {
    function MenudataService($http, baseUrl) {
        this.$http = $http;
        this.baseUrl = baseUrl;
    }
    MenudataService.prototype.getAllCategories = function () {
        return this.$http
            .get(this.baseUrl + "/categories.json")
            .then(function (result) {
            return result;
        });
    };
    MenudataService.prototype.getItemsForCategory = function (categoryShortName) {
        return this.$http({
            url: this.baseUrl + "/menu_items.json",
            method: 'GET',
            params: { category: categoryShortName }
        })
            .then(function (result) {
            return result.data.menu_items;
        });
    };
    MenudataService.$inject = ['$http', 'BaseUrl'];
    return MenudataService;
}());
//# sourceMappingURL=MenudataService.js.map