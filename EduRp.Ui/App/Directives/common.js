(function () {
    'use strict';

    angular
        .module('EduRpApp')
        .directive('pageLoading', function () {
            return {
                restrict: 'AE',
                templateUrl: 'App/Templates/Common/loading.html',
                link: function (scope, elemnet, attr) {}
            }

        });
})();
