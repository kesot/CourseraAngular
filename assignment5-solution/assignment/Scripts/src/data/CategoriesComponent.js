var data;
(function (data) {
    "use strict";
    var CategoriesComponent = (function () {
        function CategoriesComponent() {
            this.templateUrl = 'Ng-Views/Categories.html';
            this.bindings = {
                categories: "<"
            };
        }
        CategoriesComponent.Name = 'categoriesList';
        return CategoriesComponent;
    }());
    data.CategoriesComponent = CategoriesComponent;
})(data || (data = {}));
//# sourceMappingURL=CategoriesComponent.js.map