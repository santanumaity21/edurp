(function () {
    'use strict';

    angular
        .module('EduRpApp')
        .controller('employeesListController', employeesListController);

    employeesListController.$inject = ['$scope', '$q', 'employeesListService', 'errorHandler', '$modal'];

    function employeesListController($scope, $q, employeesListService, errorHandler, $modal) {
        $scope.employeesData = [];
        $scope.filteredemployeesData = [];
        $scope.currentPage = 1
            , $scope.numPerPage = 10
            , $scope.maxSize = 5;
        $scope.orderByField = 'StaffName';
        $scope.reverseSort = false;
        $scope.adjustemployeesList = function () {
            var begin = (($scope.currentPage - 1) * $scope.numPerPage)
                , end = begin + $scope.numPerPage;

            $scope.filteredemployeesData = angular.copy($scope.employeesData.slice(begin, end));
        };
        $scope.$watch('currentPage + numPerPage', function () {
            $scope.adjustemployeesList();
        });

        $scope.showPerPageDataOptions = [10, 25, 50, 100];

        $scope.modEmployeesObj = {};
        $scope.pp = '90';
        $scope.modalType = '';
        $scope.filterPanel = false;

        $scope.toggleFilterPanel = function () {
            $scope.filterPanel = !$scope.filterPanel;
        };




        $scope.editEmployeesContainer = function (data) {
            $scope.modalType = 'update';
            $scope.modEmployeesObj = data;
            $scope.Modals.openEmployeesContainer();
        };

        $scope.addEmployeesContainer = function (data) {
            $scope.modalType = 'add';
            $scope.modEmployeesObj = data;
            $scope.Modals.openEmployeesContainer();
        };




        $scope.updateEmployeesDetails = function () {
            console.log($scope.modEmployeesObj);
            var postData = {
                "batchUpdateData":
                [{
           
                    "id": $scope.modEmployeesObj,
                    "StaffName": $scope.modEmployeesObj,
                    "NIDN": $scope.modEmployeesObj,
                    "NIP": $scope.modEmployeesObj,
                    "Religion": $scope.modEmployeesObj,
                    "DateofBirth": $scope.modEmployeesObj,
                    "HomePhone": $scope.modEmployeesObj,
                    "Status": $scope.modEmployeesObj,
                    "Homebase": $scope.modEmployeesObj,
                    "Gender": $scope.modEmployeesObj,
                    "IsActive": $scope.modEmployeesObj,
                    "Program Study": $scope.modEmployeesObj,
                    "AcademicYear": $scope.modEmployeesObj,
                    "DateofAssignmentLetter": $scope.modEmployeesObj,
                    "Address": $scope.modEmployeesObj,
                    "Designation": $scope.modEmployeesObj
                }]
            };

        };
        $scope.addSubjectDetailsSuccess = function (data) {
            $('#subject-modal-popup').modal({
                show: 'false'
            });
        };

        $scope.addSubjectDetailsError = function (data) {
            $('#subject-modal-popup').modal({
                show: 'false'
            });
        };
        $scope.addSubjectDetails = function (form) {
            if (form.$valid) {

                var postData = {
                    "batchInsertData":
                    [{
                        "id": $scope.modEmployeesObj,
                        "StaffName": $scope.modEmployeesObj,
                        "NIDN": $scope.modEmployeesObj,
                        "NIP": $scope.modEmployeesObj,
                        "Religion": $scope.modEmployeesObj,
                        "DateofBirth": $scope.modEmployeesObj,
                        "HomePhone": $scope.modEmployeesObj,
                        "Status": $scope.modEmployeesObj,
                        "Homebase": $scope.modEmployeesObj,
                        "Gender": $scope.modEmployeesObj,
                        "IsActive": $scope.modEmployeesObj,
                        "Program Study": $scope.modEmployeesObj,
                        "AcademicYear": $scope.modEmployeesObj,
                        "DateofAssignmentLetter": $scope.modEmployeesObj,
                        "Address": $scope.modEmployeesObj,
                        "Designation": $scope.modEmployeesObj
                    }]
                };

                $scope.filteredemployeesData.push(postData.batchInsertData[0]);
                $scope.Modals.closeEmployeesContainer();
            }

        };


        (function startup() {

            $q.all([
                employeesListService.getEmployeesList()
            ]).then(function (data) {
                if (data != null) {
                    console.log(data[0].results);
                    $scope.employeesData = data[0].results;
                    $scope.adjustemployeesList();
                }
            }, function (reason) {
                errorHandler.logServiceError('employeesListController', reason);
            }, function (update) {
                errorHandler.logServiceNotify('employeesListController', update);
            });
        })();

        function removeEmployees(employeesId) {
            for (var i = 0; i < $scope.employees.length; i++) {
                if ($scope.employees[i].id == employeesId) {
                    $scope.employees.splice(i, 1);
                    break;
                }
            }
        };

        $scope.Modals = {
            openEmployeesContainer: function () {
                $scope.modalInstance = $modal.open({
                    animation: true,
                    templateUrl: '/App/Templates/Employees/managePopup.html',
                    size: 'lg',
                    scope: $scope,
                    backdrop: 'static'
                });

                $scope.modalInstance.result.then(
                    function (employees) {
                        if (employees.id != null) {
                            $scope.Commands.updateemployees(employees);
                        }
                        else {
                            $scope.Commands.saveemployees(employees);
                        }
                    },
                    function (event) {

                    });
            },
            openEmployeesContainer: function () {
                $scope.modalInstance = $modal.open({
                    animation: true,
                    templateUrl: '/App/Templates/Subject/managePopup.html',
                    size: 'lg',
                    scope: $scope,
                    backdrop: 'static'
                });

                $scope.modalInstance.result.then(
                    function (employees) {
                        if (employees.id != null) {
                            $scope.Commands.updateemployees(employees);
                        }
                        else {
                            $scope.Commands.saveemployees(employees);
                        }
                    },
                    function (event) {

                    });
            },
            closeEmployeesContainer: function () {
                $scope.modalInstance.dismiss();
            }
        };

    };
})
();