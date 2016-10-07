var app;
(function (app) {
    "use strict";
    var NarrowItDownController = (function () {
        function NarrowItDownController(menuSearchService) {
            this.menuSearchService = menuSearchService;
        }
        NarrowItDownController.prototype.searchForItem = function () {
            var _this = this;
            var promise = this.menuSearchService.getMatchedMenuItems(this.searchTerm);
            promise.then(function (result) { return _this.foundItems = result; });
        };
        NarrowItDownController.prototype.removeItem = function (index) {
            this.foundItems.splice(index, 1);
        };
        NarrowItDownController.$inject = ['MenuSearchService'];
        return NarrowItDownController;
    }());
    app.NarrowItDownController = NarrowItDownController;
})(app || (app = {}));
//# sourceMappingURL=NarrowItDownController.js.map