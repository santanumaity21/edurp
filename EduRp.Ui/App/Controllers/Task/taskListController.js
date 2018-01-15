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




        $scope.editTaskContainer = function (data) {
            $scope.modalType = 'update';
            $scope.modtaskObj = data;
            $scope.Modals.openTaskContainer();
        };

        $scope.addTaskContainer = function (data) {
            $scope.modalType = 'add';
            $scope.modtaskObj = data;
            $scope.Modals.openTaskContainer();
        };




        $scope.updateTaskDetails = function () {
            console.log($scope.modtaskObj);
            var postData = {
                "batchUpdateData":
                [{

                    "id": $scope.modtaskObj,
                    "TaskName": $scope.modtaskObj,
                    "TaskDescription": $scope.modtaskObj,
                    "TaskDuration": $scope.modtaskObj,
                   

                }]
            };

        };
        $scope.addTaskDetailsSuccess = function (data) {
            $('#task-modal-popup').modal({
                show: 'false'
            });
        };

        $scope.addTaskDetailsError = function (data) {
            $('#task-modal-popup').modal({
                show: 'false'
            });
        };
        $scope.addTaskDetails = function (form) {
            if (form.$valid) {
                var postData = {
                    "batchInsertData":
                    [{
                        "id": $scope.modtaskObj,
                        "TaskName": $scope.modtaskObj,
                        "TaskDescription": $scope.modtaskObj,
                        "TaskDuration": $scope.modtaskObj,
                    }]
                };

                $scope.filteredtaskData.push(postData.batchInsertData[0]);
                $scope.Modals.closeTaskContainer();
            }

        };


        (function startup() {

            $q.all([
                taskListService.getTaskList()
            ]).then(function (data) {
                if (data != null) {
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

        function removesubject(subjectId) {
            for (var i = 0; i < $scope.subjects.length; i++) {
                if ($scope.subjects[i].id == subjectId) {
                    $scope.subjects.splice(i, 1);
                    break;
                }
            }
        };

        $scope.Modals = {
            openTaskContainer: function () {
                $scope.modalInstance = $modal.open({
                    animation: true,
                    templateUrl: '/App/Templates/Task/addEditModalPopup.html',
                    size: 'lg',
                    scope: $scope,
                    backdrop: 'static'
                });

                $scope.modalInstance.result.then(
                    function (task) {
                        if (task.SubjectId != null) {
                            $scope.Commands.updatesubject(task);
                        }
                        else {
                            $scope.Commands.savesubject(task);
                        }
                    },
                    function (event) {

                    });
            },
            closeTaskContainer: function () {
                $scope.modalInstance.dismiss();
            }
        };

    };
})
    ();