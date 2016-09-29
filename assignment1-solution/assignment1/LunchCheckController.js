var app;
(function (app) {
    "use strict";
    var LunchCheckController = (function () {
        function LunchCheckController($scope) {
            this.scope = $scope;
            this.scope.lunchController = this;
        }
        LunchCheckController.prototype.checkIfOk = function () {
            if (this.scope.currentItemsString == null || this.scope.currentItemsString === "") {
                this.scope.currentMessage = "Please enter data first";
                return;
            }
            var amount = this.getItemsAmount(this.scope.currentItemsString);
            if (amount > 3)
                this.scope.currentMessage = "Too much!";
            else {
                this.scope.currentMessage = "Enjoy!";
            }
        };
        LunchCheckController.prototype.getItemsAmount = function (itemsString) {
            return itemsString.split(",").length;
        };
        LunchCheckController.$inject = ['$scope'];
        return LunchCheckController;
    }());
    app.LunchCheckController = LunchCheckController;
})(app || (app = {}));
//# sourceMappingURL=LunchCheckController.js.map