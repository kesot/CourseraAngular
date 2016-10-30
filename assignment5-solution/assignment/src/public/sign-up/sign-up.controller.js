(function () {
    "use strict";

    angular.module('public')
    .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['SignUpService', 'MenuService'];
    function SignUpController(signUpService, menuService) {
        var ctrl = this;
        ctrl.user = {
            name: null,
            surname: null,
            phone: null,
            email: null,
            favouriteDish: null
        };
        ctrl.success = false;
        ctrl.Submit = function () {
            ctrl.errorMessage = null;
            menuService.getMenuItem(ctrl.user.favouriteDish)
                .then(function (resp) {
                    signUpService.setUser(ctrl.user);
                    ctrl.success = true;
                })
                .catch(function (err) {
                    signUpService.setUser(ctrl.user);
                    if (err.status === 404) {
                        ctrl.errorMessage = "Item not found";

                    }
                    ctrl.success = false;
                });
        }
    }

})();