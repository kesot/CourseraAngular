module app {
    "use strict";

    export class NarrowItDownController {
        static $inject = ['MenuSearchService'];

        foundItems: Array<IMenuItem>;
        searchTerm = "";
        showNotFoundMessage: boolean;

        constructor(private menuSearchService: MenuSearchService) { }

        public searchForItem(): void {
            this.foundItems = [];
            this.showNotFoundMessage = false;

            if (this.searchTerm === "") {
                this.showNotFoundMessage = true;
                return;
            }

            var promise = this.menuSearchService.getMatchedMenuItems(this.searchTerm);
            promise.then(result => {
                this.foundItems = result;
                if (this.foundItems.length === 0) {
                    this.showNotFoundMessage = true;
                }
            });

        }

        public removeItem(index: number): void {
            this.foundItems.splice(index, 1);
        }


    }
}