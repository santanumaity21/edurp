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
        $scope.modalType = '';
        $scope.filterPanel = false;

        $scope.toggleFilterPanel = function () {
            $scope.filterPanel = !$scope.filterPanel;
        };
        //Get PageLoad
        function startup() {

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
        }


        $scope.addTaskContainer = function () {
            $scope.modalType = 'add';
            $scope.Modals.openTaskContainer();
        };
        //Add
        $scope.addTaskDetails = function (form) {
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
           
            closeTaskContainer: function () {
                $scope.modalInstance.dismiss();
            }
        };

    };
})
();
  