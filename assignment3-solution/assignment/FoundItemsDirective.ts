class FoundItemsDirective implements ng.IDirective {
    templateUrl: string = 'itemsList.html';
	restrict: 'AE';
    scope: { [boundProperty: string]: string } = {
        'items': "<"
    };
   
    static factory(): ng.IDirectiveFactory {
        return () => {
	        return new FoundItemsDirective();
        };
    }
}