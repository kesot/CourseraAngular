module app {
    "use strict";

    export class MenuSearchService {
        static $inject = ['$http', 'BaseUrl'];
        constructor(private $http: ng.IHttpService, private baseUrl: string) {}

        public getMatchedMenuItems(searchTerm: string): ng.IPromise<Array<IMenuItem>> {
            return this.$http
                .get(this.baseUrl + "/menu_items.json")
                .then((result: ng.IHttpPromiseCallbackArg<IMenuItemsResponse>) => {
                    let allItems = result.data.menu_items;
                    return allItems.filter(menuItem => menuItem.description.indexOf(searchTerm) !== -1);
                });
        }
    }
}