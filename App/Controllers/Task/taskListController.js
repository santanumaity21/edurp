(function () {
    'use strict';

    angular
        .module('EduRpApp')
        .controller('taskListController', taskListController);

    taskListController.$inject = ['$scope', '$q', 'taskListService', 'errorHandler', '$modal'];

    function taskListController($scope, $q, taskListService, errorHandler, $modal) {
        $scope.taskData = [];
        $scope.filteredtaskData = [];
        $scope.currentPage = 1
            , $scope.numPerPage = 10
            , $scope.maxSize = 5;
        $scope.orderByField = 'TaskName';
        $scope.reverseSort = false;
        $scope.adjusttaskList = function () {
            var begin = (($scope.currentPage - 1) * $scope.numPerPage)
                , end = begin + $scope.numPerPage;

            $scope.filteredtaskData = angular.copy($scope.taskData.slice(begin, end));
        };
        $scope.$watch('currentPage + numPerPage', function () {
            $scope.adjusttaskList();
        });

        $scope.showPerPageDataOptions = [10, 25, 50, 100];

        $scope.modtaskObj = {};
        $scope.pp = '90';
        $scope.modalType = '';
        $scope.filterPanel = false;

        $scope.toggleFilterPanel = function () {
            $scope.filterPanel = !$scope.filterPanel;
        };
        //Get PageLoad
        (function startup() {

            $q.all([
                taskListService.getTaskList()
            ]).then(function (data) {
                if (data !== null) {
                    console.log(data[0].results);
                    $scope.taskData = data[0].results;
                    $scope.adjusttaskList();
                }
            }, function (reason) {
                errorHandler.logServiceError('taskListController', reason);
            }, function (update) {
                errorHandler.logServiceNotify('taskListController', update);
            });
        })();


        $scope.addTaskContainer = function () {
            $scope.modalType = 'add';
            $scope.Modals.openTaskContainer();
        };
        //Add
        $scope.addTaskDetails = function (form) {
            debugger
            if (form.$valid) {
                $q.when([taskListService.addTask($scope.modtaskObj)]).then(function (data) {
                    $scope.filteredtaskData.push($scope.modtaskObj);
                    $scope.Modals.closeTaskContainer();
                }, function (error) {

                });

            }

        };

        //update
        $scope.editTaskContainer = function (data) {
            $scope.modalType = 'update';
            $scope.modtaskObj = data;
            $scope.Modals.openTaskContainer();
        };

        $scope.updateTaskDetails = function (form) {
            console.log($scope.modtaskObj);
            if (form.$valid) {
                $q.when([taskListService.updateTask($scope.modtaskObj)]).then(function (data) {
                    $scope.Modals.closeTaskContainer();
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
            openTaskContainer: function () {
                $scope.modalInstance = $modal.open({
                    animation: true,
                    templateUrl: '/App/Templates/Task/addEditModalPopup.html',
                    size: 'lg',
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
            closeTaskContainer: function () {
                $scope.modalInstance.dismiss();
            }
        };

    };
})
();
  