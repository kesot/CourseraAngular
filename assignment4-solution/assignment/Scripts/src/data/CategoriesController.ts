module data {
    export class CategoriesController implements ng.IController {
        static $inject = ['categories'];
        static Name = "CategoriesController";
        constructor(private categories: Array<ICategory>) {
        }

    }
}
