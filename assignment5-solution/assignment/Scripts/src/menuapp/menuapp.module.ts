module MenuApp {
    "use strict";

    var appModule = angular.module("MenuApp", ['ui.router', 'data'])
                    .config(RoutesConfig);
}
