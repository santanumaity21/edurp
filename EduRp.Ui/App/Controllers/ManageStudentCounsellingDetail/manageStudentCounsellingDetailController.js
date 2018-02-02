(function () {
    'use strict';

    angular
        .module('EduRpApp')
        .controller('manageStudentCounsellingDetailController', manageStudentCounsellingDetailController);

    manageStudentCounsellingDetailController.$inject = ['$scope','$q', 'manageStudentCounsellingDetailService', 'errorHandler', 'commonService'];

    function manageStudentCounsellingDetailController($scope, $q, manageStudentCounsellingDetailService, errorHandler, commonService) {
        $scope.title = 'manageStudentCounsellingDetailController';

        activate();

        function activate() { }

        $scope.managestdcounsellingData = [];
        $scope.filteredData = [];
        $scope.currentPage = 1
            , $scope.numPerPage = 10
            , $scope.maxSize = 5;
        $scope.orderByField = 'StudentId';
        $scope.reverseSort = false;
        $scope.adjustStdCouncellingList = function () {
            var begin = (($scope.currentPage - 1) * $scope.numPerPage)
                , end = begin + $scope.numPerPage;

            $scope.filteredData = angular.copy($scope.managestdcounsellingData.slice(begin, end));
        };
        $scope.$watch('currentPage + numPerPage', function () {
            $scope.adjustStdCouncellingList();
        });

        $scope.showPerPageDataOptions = [10, 25, 50, 100];

        $scope.filterPanel = false;

        $scope.toggleFilterPanel = function () {
            $scope.filterPanel = !$scope.filterPanel;
        };
        (function startup() {

            $q.all([
                manageStudentCounsellingDetailService.getStdCounsellingDetail()
            ]).then(function (data) {
                if (data !== null) {
                    $scope.managestdcounsellingData = data[0].results;
                    $scope.adjustStdCouncellingList();
                }
            }, function (reason) {
                errorHandler.logServiceError('manageStudentCounsellingDetailController', reason);
            }, function (update) {
                errorHandler.logServiceNotify('manageStudentCounsellingDetailController', update);
            });
        })();

    }
})();
