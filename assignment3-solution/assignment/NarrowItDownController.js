var app;
(function (app) {
    "use strict";
    var NarrowItDownController = (function () {
        function NarrowItDownController(menuSearchService) {
            this.menuSearchService = menuSearchService;
            this.searchTerm = "";
        }
        NarrowItDownController.prototype.searchForItem = function () {
            var _this = this;
            this.foundItems = [];
            this.showNotFoundMessage = false;
            if (this.searchTerm === "") {
                this.showNotFoundMessage = true;
                return;
            }
            var promise = this.menuSearchService.getMatchedMenuItems(this.searchTerm);
            promise.then(function (result) {
                _this.foundItems = result;
                if (_this.foundItems.length === 0) {
                    _this.showNotFoundMessage = true;
                }
            });
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