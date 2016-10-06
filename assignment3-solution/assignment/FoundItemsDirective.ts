class FoundItemsDirective implements ng.IDirective {
    templateUrl: string = 'itemsList.html';
    scope: { [boundProperty: string]: string } = {
        'items': '<',
        'myTitle': '@title',
        'onRemove': '&'
    };
   
    factory(): ng.IDirectiveFactory {
        return () => new FoundItemsDirective();
    }
}