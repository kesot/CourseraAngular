module app {
    "use strict";

    export class LunchCheckController {

        private scope: ILunchCheckScope;
        
        public static $inject = ['$scope'];
         
        constructor($scope: ILunchCheckScope) {
            this.scope = $scope;
            this.scope.lunchController = this;
        }

        checkIfOk() {
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
        }


        private getItemsAmount(itemsString: string): number {
            return itemsString.split(",").length;
        }

    }
}