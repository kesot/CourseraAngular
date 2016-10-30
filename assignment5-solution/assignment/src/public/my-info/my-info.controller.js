(function () {
    "use strict";

    angular.module('public')
    .controller('MyInfoController', MyInfoController);

    MyInfoController.$inject = ['user', 'MenuService'];
    function MyInfoController(user, menuService) {
        var ctrl = this;
        ctrl.success = false;
        ctrl.user = user;
        if (user) {
            menuService.getMenuItem(user.favouriteDish)
                .then(function(resp) {
                    ctrl.menuItem = resp;
                });
        }

    }

})();