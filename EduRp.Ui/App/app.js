(function () {
    'use strict';

    angular.module('EduRpApp', [
        'ngAnimate', 'ngCookies', 'ngResource', 'ngRoute', 'ngSanitize', 'ngTouch', 'ui.bootstrap', 'pascalprecht.translate'
    ])
        .config(['$httpProvider', '$translateProvider',  function ($httpProvider, $translateProvider) {
        $httpProvider.interceptors.push('xmlHttpInteceptor');
        if (!$httpProvider.defaults.headers.get) {
            $httpProvider.defaults.headers.get = {};
        }
        $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
        $httpProvider.defaults.headers.get['Pragma'] = 'no-cache';

        

        $translateProvider.useStaticFilesLoader({
            prefix: '/languages/',
            suffix: '.json'
        });
        $translateProvider.preferredLanguage('en');
        $translateProvider.useSanitizeValueStrategy('escape');
    }]);

    function errorHandler(status, message) {
        var scope = angular.element($('html')).scope();
        scope.errorHandler(status, message);
    };
})();
