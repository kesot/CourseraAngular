module app {
    "use strict";

    export class NarrowItDownController {
        static $inject = ['MenuSearchService'];

        foundItems: Array<IMenuItem>;
        searchTerm: string;

        constructor(private menuSearchService: MenuSearchService) { }

        public searchForItem(): void {
            var promise = this.menuSearchService.getMatchedMenuItems(this.searchTerm);
            promise.then(result => this.foundItems = result);
        }
    }
}