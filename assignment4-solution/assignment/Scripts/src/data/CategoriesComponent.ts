module data {
    "use strict";
    export class CategoriesComponent implements ng.IComponentOptions {
        static Name = 'categoriesList';
        templateUrl = 'Ng-Views/Categories.html';
        bindings : { [boundProperty: string]: string } = {
            categories: "<"
        };
    }
}
