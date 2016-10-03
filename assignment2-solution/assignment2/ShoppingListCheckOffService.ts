module app {
    "use strict";
    
    export class ShoppingListCheckOffService {
        private _toBuy: Array<IPurchase>;
        private _bought: Array<IPurchase>;
        constructor() {
            this._toBuy = [
                {name: 'Cookies', quantity: 10},
                {name: 'Chips', quantity: 11},
                {name: 'Coke', quantity: 12},
                {name: 'Beer', quantity: 13},
                { name: 'Apple', quantity: 14},
            ];

            this._bought = [];
        }

        public buyItem(index: number): void {
            let removed = this.toBuy.splice(index, 1);
            this._bought.push(removed[0]);
        }

        get toBuy(): Array<IPurchase> {
            return this._toBuy;
        }

        get bought(): Array<IPurchase> {
            return this._bought;
        }
    }
}