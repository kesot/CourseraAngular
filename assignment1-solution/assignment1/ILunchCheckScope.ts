interface ILunchCheckScope extends ng.IScope{
    checkIfOk(): void;
    currentMessage: string;
    currentItemsString: string;
    lunchController: app.LunchCheckController;
}