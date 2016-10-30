module data {
    export class ItemsController implements ng.IController {
        static $inject = ['items'];
        static Name = "ItemsController";
        constructor(private items: Array<IMenuItem>) {
        }

    }
}
