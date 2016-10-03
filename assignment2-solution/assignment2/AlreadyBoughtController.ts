module app {
    "use strict";

    export class AlreadyBoughtController {
        static $inject = ['ShoppingListCheckOffService'];
        boughtItems: Array<IPurchase>;
        constructor(shoppingListCheckOffService: ShoppingListCheckOffService) {
            this.boughtItems = shoppingListCheckOffService.bought;
        }
    }
}