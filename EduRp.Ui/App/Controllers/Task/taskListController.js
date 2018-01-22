(function () {
    'use strict';

    angular
        .module('EduRpApp')
        .controller('taskListController', taskListController);

    taskListController.$inject = ['$scope', '$q', 'taskListService', 'errorHandler', '$modal', 'commonService'];

    function taskListController($scope, $q, taskListService, errorHandler, $modal, commonService) {
        $scope.taskData = [];
        $scope.filteredTaskData = [];
        $scope.currentPage = 1
            , $scope.numPerPage = 10
            , $scope.maxSize = 5;
        $scope.orderByField = 'TaskName';
        $scope.reverseSort = false;
        $scope.adjustTaskList = function () {
            var begin = (($scope.currentPage - 1) * $scope.numPerPage)
                , end = begin + $scope.numPerPage;

            $scope.filteredTaskData = angular.copy($scope.taskData.slice(begin, end));
        };
        $scope.$watch('currentPage + numPerPage', function () {
            $scope.adjustTaskList();
        });

        $scope.showPerPageDataOptions = [10, 25, 50, 100];

        $scope.modTaskObj = {};
        $scope.modalType = '';
        $scope.filterPanel = false;

        $scope.toggleFilterPanel = function () {
            $scope.filterPanel = !$scope.filterPanel;
        };


        $scope.editTaskContainer = function (data) {
            $scope.modalType = 'update';
            $scope.modTaskObj = data;
            $scope.Modals.openTaskContainer();
        };

        $scope.addTaskContainer = function () {
            $scope.modalType = 'add';
            $scope.modTaskObj = null;
            $scope.Modals.openTaskContainer();
        };

        $scope.updateTaskDetails = function (form) {
            if (form.$valid) {
                var postData = {
                    "TaskName": $scope.modTaskObj.TaskName,
                    "TaskDescription": $scope.modTaskObj.TaskDescription
                };

                taskListService.updateTask(postData).then(function (data) {
                    $scope.pageLoad();
                    $scope.Modals.closeCourseContainer();
                }, function (error) {
                    alert("Please try again");
                });
            }
        };
        
        $scope.addTaskDetails = function (form) {
            if (form.$valid) {
                var postData = {
                    "TaskName": $scope.modTaskObj.TaskName,
                    "TaskDescription": $scope.modTaskObj.TaskDescription
                };
                taskListService.addTask(postData).then(function (data) {
                    $scope.pageLoad();
                    $scope.Modals.closeCourseContainer();
                }, function (error) {
                    alert("Please try again");
                });
                
            }

        };


        $scope.pageLoad = function () {

            $q.all([
                taskListService.getTaskList()
            ]).then(function (data) {
                if (data != null) {
                    $scope.taskData = data[0].results;
                    $scope.adjustTaskList();
                }
            }, function (reason) {
                errorHandler.logServiceError('taskListController', reason);
            }, function (update) {
                errorHandler.logServiceNotify('taskListController', update);
            });
        };

        $scope.deleteTaskContainer = function (td) {
            if (confirm('Are you sure you want to delete this task?')) {
                taskListService.deleteTask(td).then(function (data) {
                    $scope.filteredTaskData = commonService.removeItemFromArray($scope.filteredTaskData, td);
                }, function (error) {
                    alert("Please try again");
                });
            }
        };

        $scope.Modals = {
            openTaskContainer: function () {
                $scope.modalInstance = $modal.open({
                    animation: true,
                    templateUrl: '/App/Templates/Task/managePopup.html',
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
        $scope.pageLoad();
    };
})();