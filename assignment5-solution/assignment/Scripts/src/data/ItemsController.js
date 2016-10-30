var data;
(function (data) {
    var ItemsController = (function () {
        function ItemsController(items) {
            this.items = items;
        }
        ItemsController.$inject = ['items'];
        ItemsController.Name = "ItemsController";
        return ItemsController;
    }());
    data.ItemsController = ItemsController;
})(data || (data = {}));
//# sourceMappingURL=ItemsController.js.map