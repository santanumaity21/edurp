(function () {
    'use strict';

    angular
        .module('EduRpApp')
        .controller('GlobalController', GlobalController);

    GlobalController.$inject = ['$scope', '$location', 'AuthService', '$cookieStore'];

    function GlobalController($scope, $location, AuthService, $cookieStore) {
        $cookieStore.put('unversityId', '1');
        $cookieStore.put('userId', '2');
        $cookieStore.put('tokenId', '3');
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
