var data;
(function (data) {
    var CategoriesController = (function () {
        function CategoriesController(categories) {
            this.categories = categories;
        }
        CategoriesController.$inject = ['categories'];
        CategoriesController.Name = "CategoriesController";
        return CategoriesController;
    }());
    data.CategoriesController = CategoriesController;
})(data || (data = {}));
//# sourceMappingURL=CategoriesController.js.map