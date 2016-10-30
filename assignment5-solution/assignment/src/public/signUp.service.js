(function () {
    "use strict";

    angular.module('public')
    .service('SignUpService', SignUpService);


    function SignUpService() {
        var service = this;
        service.user = null;
        service.setUser = function(user) {
            service.user = user;
        }
        service.getUser = function () {
            return service.user;
        }
    }



})();
