(function () {
    'use strict';

    angular
        .module('EduRpApp')
        .controller('courseListController', courseListController);

    courseListController.$inject = ['$scope', '$q', 'courseListService', 'errorHandler', '$modal'];

    function courseListController($scope, $q, courseListService, errorHandler, $modal) {
        $scope.courseData = [];
        $scope.filteredCourseData = [];
        $scope.currentPage = 1
            , $scope.numPerPage = 10
            , $scope.maxSize = 5;
        $scope.orderByField = 'CourseName';
        $scope.reverseSort = false;
        $scope.adjustCourseList = function () {
            var begin = (($scope.currentPage - 1) * $scope.numPerPage)
                , end = begin + $scope.numPerPage;

            $scope.filteredCourseData = angular.copy($scope.courseData.slice(begin, end));
        };
        $scope.$watch('currentPage + numPerPage', function () {
            $scope.adjustCourseList();
        });

        $scope.showPerPageDataOptions = [10, 25, 50, 100];
        
        $scope.modCourseObj = {};
        $scope.modalType = '';
        $scope.filterPanel = false;

        $scope.toggleFilterPanel = function () {
            $scope.filterPanel = !$scope.filterPanel;
        };
       
       


        $scope.editCourseContainer = function (data) {
            $scope.modalType = 'update';
            $scope.modCourseObj = data;
            $scope.Modals.openSubjectContainer();
        };

        $scope.addCourseContainer = function (data) {
            $scope.modalType = 'add';
            $scope.modCourseObj = data;
            $scope.Modals.openCourseContainer();
        };

       


        $scope.updateCourseDetails = function () {
            console.log($scope.modCourseObj);
            var postData = {
                "batchUpdateData":
                [{
                    "DegreeId": $scope.modCourseObj,
                    "DegreeName": $scope.modCourseObj,
                    "UniversityId": $scope.modCourseObj,
                    "CourseId": $scope.modCourseObj,
                    "CourseCode": $scope.modCourseObj,
                    "CourseName": $scope.modCourseObj,
                    "IsActive": $scope.modCourseObj,
                    "TOTAL": $scope.modCourseObj
                }]
            };

        };
        $scope.addCourseDetailsSuccess = function (data) {
            $('#course-modal-popup').modal({
                show: 'false'
            });
        };

        $scope.addCourseDetailsError = function (data) {
            $('#course-modal-popup').modal({
                show: 'false'
            });
        };
        $scope.addCourseDetails = function (form) {
            if (form.$valid) {
                
                var postData = {
                    "batchInsertData":
                    [{
                        "CourseCode": $scope.modCourseObj.CourseCode,
                        "CourseName": $scope.modCourseObj.CourseName
                    }]
                };
                
                $scope.filteredCourseData.push(postData.batchInsertData[0]);
                $scope.Modals.closeCourseContainer();
            }

        };


        (function startup() {

            $q.all([
                courseListService.getCourseList()
            ]).then(function (data) {
                if (data != null) {
                    console.log(data[0].results);
                    $scope.courseData = data[0].results;
                    $scope.adjustCourseList();
                }
            }, function (reason) {
                errorHandler.logServiceError('courseListController', reason);
            }, function (update) {
                errorHandler.logServiceNotify('courseListController', update);
            });
        })();

        function removeContact(contactId) {
            for (var i = 0; i < $scope.contacts.length; i++) {
                if ($scope.contacts[i].id == contactId) {
                    $scope.contacts.splice(i, 1);
                    break;
                }
            }
        };

        $scope.Modals = {
            openCourseContainer: function () {
                $scope.modalInstance = $modal.open({
                    animation: true,
                    templateUrl: '/App/Templates/Course/AddEditModalPopup.html',
                    size: 'lg',
                    scope: $scope,
                    backdrop: 'static'
                });

                $scope.modalInstance.result.then(
                    function (contact) {
                        if (contact.id != null) {
                            $scope.Commands.updateContact(contact);
                        }
                        else {
                            $scope.Commands.saveContact(contact);
                        }
                    },
                    function (event) {

                    });
            },
            openSubjectContainer: function () {
                $scope.modalInstance = $modal.open({
                    animation: true,
                    templateUrl: '/App/Templates/Course/managePopup.html',
                    size: 'lg',
                    scope: $scope,
                    backdrop: 'static'
                });

                $scope.modalInstance.result.then(
                    function (contact) {
                        if (contact.id != null) {
                            $scope.Commands.updateContact(contact);
                        }
                        else {
                            $scope.Commands.saveContact(contact);
                        }
                    },
                    function (event) {

                    });
            },
            closeCourseContainer: function () {
                $scope.modalInstance.dismiss();
            },
            closeSubjectContainer: function () {
                $scope.modalInstance.dismiss();
            }
        };




    };
})
    ();