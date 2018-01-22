(function () {
    'use strict';

    angular
        .module('EduRpApp')
        .controller('GlobalController', GlobalController);

    GlobalController.$inject = ['$scope', '$location', 'AuthService', '$cookieStore'];

    function GlobalController($scope, $location, AuthService, $cookieStore) {
        $cookieStore.put('UniversityId', '1');
        $cookieStore.put('UserId', '1');
        $cookieStore.put('TokenId', '311488F6-2CE5-42D1-A2A0-319EB788E9CA');
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
