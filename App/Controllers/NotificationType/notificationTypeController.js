(function () {
    'use strict';

    angular
        .module('EduRpApp')
        .controller('notificationTypeController', notificationTypeController);

    notificationTypeController.$inject = ['$scope', '$q', 'notificationTypeService', 'errorHandler', '$modal'];

    function notificationTypeController($scope, $q, notificationTypeService, errorHandler, $modal) {
        $scope.notificationTypeData = [];
        $scope.filterednotificationTypeData = [];
        $scope.currentPage = 1
            , $scope.numPerPage = 10
            , $scope.maxSize = 5;
        $scope.orderByField = 'NotificationName';
        $scope.reverseSort = false;
        $scope.adjustNotificationTypeList = function () {
            var begin = (($scope.currentPage - 1) * $scope.numPerPage)
                , end = begin + $scope.numPerPage;

            $scope.filterednotificationTypeData = angular.copy($scope.notificationTypeData.slice(begin, end));
        };
        $scope.$watch('currentPage + numPerPage', function () {
            $scope.adjustNotificationTypeList();
        });

        $scope.showPerPageDataOptions = [10, 25, 50, 100];

        $scope.modnotificationTypeObj = {};
        $scope.pp = '90';
        $scope.modalType = '';
        $scope.filterPanel = false;

        $scope.toggleFilterPanel = function () {
            $scope.filterPanel = !$scope.filterPanel;
        };
        //Get PageLoad
        (function startup() {

            $q.all([
                notificationTypeService.getnotificationTypeList()
            ]).then(function (data) {
                if (data !== null) {
                    console.log(data[0].results);
                    $scope.notificationTypeData = data[0].results;
                    $scope.adjustNotificationTypeList();
                }
            }, function (reason) {
                errorHandler.logServiceError('notificationTypeController', reason);
            }, function (update) {
                errorHandler.logServiceNotify('notificationTypeController', update);
            });
        })();


        $scope.addNotificationTypeContainer = function () {
            $scope.modalType = 'add';
            $scope.Modals.openNotificationTypeContainer();
        };
        //Add
        $scope.addNotificationTypeDetails = function (form) {
            debugger
            if (form.$valid) {
                $q.when([notificationTypeService.addNotificationType($scope.modnotificationTypeObj)]).then(function (data) {
                    $scope.filterednotificationTypeData.push($scope.modnotificationTypeObj);
                    $scope.Modals.closeNotificationTypeContainer();
                }, function (error) {

                });

            }

        };

        //update
        $scope.editNotificationTypeContainer = function (data) {
            $scope.modalType = 'update';
            $scope.modnotificationTypeObj = data;
            $scope.Modals.openNotificationTypeContainer();
        };

        $scope.updateNotificationTypeDetails = function (form) {
            console.log($scope.modnotificationTypeObj);
            if (form.$valid) {
                $q.when([notificationTypeService.updateNotificationType($scope.modnotificationTypeObj)]).then(function (data) {
                    $scope.Modals.closeNotificationTypeContainer();
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
            openNotificationTypeContainer: function () {
                $scope.modalInstance = $modal.open({
                    animation: true,
                    templateUrl: '/App/Templates/NotificationType/addEditModalPopup.html',
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
            closeNotificationTypeContainer: function () {
                $scope.modalInstance.dismiss();
            }
        };

    };
})
    ();