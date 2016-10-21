class MenudataService {
    static $inject = ['$http', 'BaseUrl'];
    constructor(private $http: ng.IHttpService, private baseUrl: string) { }

    public getAllCategories(): ng.IPromise<Array<ICategory>> {
        return this.$http
            .get(this.baseUrl + "/categories.json")
            .then((result: ng.IHttpPromiseCallbackArg<Array<ICategory>>) => {
                return result;
            });
    }

    public getItemsForCategory(categoryShortName: string): ng.IPromise<Array<IMenuItem>> {
        return this.$http({
                url: this.baseUrl + "/menu_items.json",
                method: 'GET',
                params: { category: categoryShortName }
            })
            .then((result: ng.IHttpPromiseCallbackArg<IMenuItemsResponse>) => {
                return result.data.menu_items;
            });
    }
}