var FoundItemsDirective = (function () {
    function FoundItemsDirective() {
        this.templateUrl = 'itemsList.html';
        this.scope = {
            'items': '<',
            'myTitle': '@title',
            'onRemove': '&'
        };
    }
    FoundItemsDirective.prototype.factory = function () {
        return function () { return new FoundItemsDirective(); };
    };
    return FoundItemsDirective;
}());
//# sourceMappingURL=FoundItemsDirective.js.map