(function () {
    'use strict';

    angular
        .module('EduRpApp')
        .controller('GlobalController', GlobalController);

    GlobalController.$inject = ['$scope', '$location', 'AuthService'];

    function GlobalController($scope, $location, AuthService) {
        $scope.$on('$viewContentLoaded', onLoaded);
        $scope.$on('viewContentLoadComplete', onLoadComplete);

        function onLoaded() {
            $scope.$broadcast('viewContentLoadComplete');
        }

        function onLoadComplete() {

        }

        $scope.goToPage = function (page) {
            $location.path(page);
        };

        $scope.Global = {
            logOut : function () {
                AuthService.logOut();
                $scope.Global.isAuthenticated = false;
                $location.path('/Account/Login');
            },
            isAuthenticated: AuthService.isAuthenticated()
        }
    };
})();
