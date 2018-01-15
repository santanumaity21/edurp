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
        $scope.adjustNotificationTypeList = function () {
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
        //Get PageLoad
        (function startup() {

            $q.all([
                employeesListService.getEmployeesList()
            ]).then(function (data) {
                if (data !== null) {
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


        $scope.addEmployeesContainer = function () {
            $scope.modalType = 'add';
            $scope.Modals.openEmployeesContainer();
        };
        //Add
        $scope.addEmployeesDetails = function (form) {
            debugger
            if (form.$valid) {
                $q.when([employeesListService.addEmployees($scope.modEmployeesObj)]).then(function (data) {
                    $scope.filteredemployeesData.push($scope.modEmployeesObj);
                    $scope.Modals.closeEmployeesContainer();
                }, function (error) {

                });

            }

        };

        //update
        $scope.editEmployeesContainer = function (data) {
            $scope.modalType = 'update';
            $scope.modEmployeesObj = data;
            $scope.Modals.openEmployeesContainer();
        };

        $scope.updateEmployeesDetails = function (form) {
            console.log($scope.modEmployeesObj);
            if (form.$valid) {
                $q.when([employeesListService.updateEmployees($scope.modEmployeesObj)]).then(function (data) {
                    $scope.Modals.closeEmployeesContainer();
                }, function (error) {

                });

            }
        };
        //delete 

        //$scope.deleteSubject = function () {
        //    if (confirm('Are you sure you want to delete this subject?')) {
        //        angular.forEach($scope.filteredCourseData, function (v, key) {
        //            if ($scope.filteredCourseData[key].Selected == $scope.filteredCourseData[key].id) {
        //                coursesSelected.push($scope.filteredCourseData[key].Selected);
        //            }
        //        });
        //    }
        //    $q.when(programStudyService.removeSelectedCourses(coursesSelected)).then(function (success) {
        //        $scope.Modals.close();
        //        $scope.filteredProgramStudyData.push($scope.addPSFormObj);
        //    }, function (error) {

        //    });
        //};
        //$scope.deleteSubject = function (id) {
        //    if (confirm('Are you sure you want to delete this subject?')) {
        //        $q.when(subjectListService.deleteSubject(id)).then(
        //            function (success) {
        //                removeSubject(data);
        //            },
        //            function (response) {
        //                console.log(response);
        //            });
        //    }
        //    else {
        //        console.log('delete cancelled');
        //    }
        //}

        //function removesubject(data) {
        //    for (var i = 0; i < $scope.subjectData.length; i++) {
        //        if ($scope.subjectData[i].id === data) {
        //            $scope.subjectData.splice(i, 1);
        //            break;
        //        }
        //    }
        //}   


        $scope.Modals = {
            openEmployeesContainer: function () {
                $scope.modalInstance = $modal.open({
                    animation: true,
                    templateUrl: '/App/Templates/Employees/addEditModalPopup.html',
                    size: 'lg',
                    scope: $scope,
                    backdrop: 'static'
                });

                $scope.modalInstance.result.then(
                    function (subject) {
                        if (subject.SubjectId !== null) {
                            $scope.Commands.updatesubject(subject);
                        }
                        else {
                            $scope.Commands.savesubject(subject);
                        }
                    },
                    function (event) {

                    });
            },
            //openSubjectManagePopUp: function () {
            //    $scope.modalInstance = $modal.open({
            //        animation: true,
            //        templateUrl: '/App/Templates/Subject/managePopup.html',
            //        size: 'lg',
            //        scope: $scope,
            //        backdrop: 'static'
            //    });

            //    $scope.modalInstance.result.then(
            //        function (subject) {
            //            if (subject.SubjectId !== null) {
            //                $scope.Commands.updatesubject(subject);
            //            }
            //            else {
            //                $scope.Commands.savesubject(subject);
            //            }
            //        },
            //        function (event) {

            //        });
            //},
            closeEmployeesContainer: function () {
                $scope.modalInstance.dismiss();
            }
        };

    };
})
    ();