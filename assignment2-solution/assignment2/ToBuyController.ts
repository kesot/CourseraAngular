module app {
    "use strict";

    export class ToBuyController {
        static $inject = ['ShoppingListCheckOffService'];
        itemsToBuy: Array<IPurchase>;
        constructor(private shoppingListCheckOffService: ShoppingListCheckOffService) {
            this.itemsToBuy = shoppingListCheckOffService.toBuy;
        }

        public buyItem(index: number): void {
            this.shoppingListCheckOffService.buyItem(index);
        }
    }
}