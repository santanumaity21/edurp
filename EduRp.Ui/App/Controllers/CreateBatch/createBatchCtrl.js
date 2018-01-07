(function () {
    'use strict';

    angular
        .module('EduRpApp')
        .controller('createBatchController', createBatchController);

    createBatchController.$inject = ['$scope', '$q', 'createBatchService', 'errorHandler', '$modal'];

    function createBatchController($scope, $q, createBatchService, errorHandler, $modal) {

        $scope.courseData = [];
        $scope.filteredCourseData = [];
        $scope.courseCurrentPage = 1, $scope.courseNumPerPage = 10, $scope.courseMaxSize = 5;
        $scope.courseOrderByField = 'CourseName';
        $scope.courseReverseSort = false;
        $scope.selectedBatch = null;

        $scope.adjustCourseList = function () {
            var begin = (($scope.courseCurrentPage - 1) * $scope.courseNumPerPage)
                , end = begin + $scope.courseNumPerPage;

            $scope.filteredCourseData = angular.copy($scope.courseData.slice(begin, end));
        };
        $scope.$watch('courseCurrentPage + courseNumPerPage', function () {
            $scope.adjustCourseList();
        });


        $scope.feesData = [];
        $scope.filteredFeesData = [];
        $scope.feesCurrentPage = 1, $scope.feesNumPerPage = 10, $scope.feesMaxSize = 5;
        $scope.feesOrderByField = 'CourseName';
        $scope.feesReverseSort = false;

        $scope.adjustFeesList = function () {
            var begin = (($scope.feesCurrentPage - 1) * $scope.feesNumPerPage)
                , end = begin + $scope.feesNumPerPage;

            $scope.filteredFeesData = angular.copy($scope.feesData.slice(begin, end));
        };
        $scope.$watch('feesCurrentPage + feesNumPerPage', function () {
            $scope.adjustFeesList();
        });

        $scope.showPerPageDataOptions = [10, 25, 50, 100];

        $scope.addBatchFormObj = {status: "Active"};

        $scope.modCourseObj = {};
        $scope.modalType = '';
        $scope.filterPanel = false;

        $scope.unlinkedCoursesOfBatchList = null;
        $scope.unlinkedFeesOfBatchList = null;

        $scope.toggleFilterPanel = function () {
            $scope.filterPanel = !$scope.filterPanel;
        };

        $scope.addBatchContainer = function () {
            $scope.Modals.open('App/Templates/CreateBatch/addBatch.html');
        };
        $scope.assignCoursesContainer = function () {
            $q.all([createBatchService.getUnlinkedCoursesOfBatch()]).then(function (data) {
                $scope.unlinkedCoursesOfBatchList = data[0].results;
            }, function () {

                });

            $scope.Modals.open('App/Templates/CreateBatch/assignCourses.html');
        };
        $scope.assignFeesContainer = function () {
            $q.all([createBatchService.getUnlinkedFeesOfBatch()]).then(function (data) {
                $scope.unlinkedFeesOfBatchList = data[0].results;
            }, function () {

            });
            $scope.Modals.open('App/Templates/CreateBatch/assignFees.html');
        };

        $scope.addBatch = function (form) {
            if (form.$valid) {
                $q.when(createBatchService.addBatch($scope.addBatchFormObj)).then(function (success) {
                    $scope.Modals.close();
                    $scope.batchData.push($scope.addBatchFormObj);
                    $scope.filteredBatchData.push($scope.addBatchFormObj);
                }, function (error) {

                });
            }
        };
       
        $scope.getCourseDetailsSuccess = function (data) {
            console.log("course data => " + data);
            $scope.courseData = data.results;

            
            $scope.adjustCourseList();
        };
        $scope.getCourseDetailsError = function (data) {
            console.log(data);
        };
        

        $scope.editCourseContainer = function (data) {
            $scope.modalType = 'update';
            $scope.modCourseObj = data;
            $('#course-modal-popup').modal({
                show: 'true'
            });
        };

        $scope.addCourseContainer = function (data) {
            $scope.modalType = 'add';
            $scope.modCourseObj = data;
            $scope.Modals.open();
        };

        $scope.updateCourseDetailsSuccess = function (data) {
            $('#course-modal-popup').modal({
                show: 'false'
            });
        };

        $scope.updateCourseDetailsError = function (data) {
            $('#course-modal-popup').modal({
                show: 'false'
            });
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
        $scope.addCourseDetails = function () {
            var postData = {
                "batchInsertData":
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


         (function startup() {
			 
              $q.all([
                  createBatchService.getBatchList(),
                  createBatchService.getLinkedCoursesOfBatch(),
                  createBatchService.getLinkedFeesOfBatch()
              ]).then(function (data) {
                 
                if (data != null) {
                    $scope.batchData = data[0].results;
                    if (data[0].results.length < 5 && data[0].results.length > 0) {
                        $scope.filteredBatchData = data[0].results;
                        $scope.selectedBatch = data[0].results[0];
                    } else if (data[0].results.length > 5) {
                        $scope.selectedBatch = data[0].results[0];
                        $scope.filteredBatchData = angular.copy(data[0].results.slice(0, 5));
                        $scope.filteredBatchData.push({
                            "id": null,
                            "degreeCode": "Other",
                            "degreeName": "Other",
                            "academic_term": null,
                            "sks": null,
                            "active": null
                        });
                    } 
                   

                    $scope.courseData = data[1].results;
                    $scope.adjustCourseList();

                    $scope.feesData = data[2].results;
                    $scope.adjustFeesList();
                }
                  }, function (reason) {
                      console.log("reason" + reason);
                      errorHandler.logServiceError('createBatchController', reason);
                  }, function (update) {
                      console.log("update" + update);
                      errorHandler.logServiceNotify('createBatchController', update);
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

        $scope.contacts = [];

        $scope.Commands = {
            saveContact: function (contact) {
                ContactService.addContact(contact).then(
                    function (result) {
                        $scope.contacts.push(result.data);
                    },
                    function (response) {
                        console.log(response);
                    });
            },
            updateContact: function (contact) {
                ContactService.updateContact(contact).then(
                    function (result) {

                    },
                    function (response) {
                        console.log(response);
                    });
            }
        };

        $scope.Queries = {
            getContacts: function () {
                ContactService.getContacts();
            },
            getContactById: function (contactId) {
                ContactService.getContactById(contactId);
            }
        };

        $scope.Modals = {
            open: function (url) {
                $scope.modalInstance = $modal.open({
                    animation: true,
                    templateUrl: url,
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
            close: function () {
                $scope.modalInstance.dismiss();
            }
        };


        

    };
})
();