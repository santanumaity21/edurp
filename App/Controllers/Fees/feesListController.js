(function () {
    'use strict';

    angular
        .module('EduRpApp')
        .controller('feesListController', feesListController);

    feesListController.$inject = ['$scope', '$q', 'feesListService', 'errorHandler', '$modal'];

    function feesListController($scope, $q, feesListService, errorHandler, $modal) {
        $scope.feesData = [];
        $scope.filteredFeesData = [];
        $scope.currentPage = 1
            , $scope.numPerPage = 10
            , $scope.maxSize = 5;
        $scope.orderByField = 'FeesName';
        $scope.reverseSort = false;
        $scope.adjustFeesList = function () {
            var begin = (($scope.currentPage - 1) * $scope.numPerPage)
                , end = begin + $scope.numPerPage;

            $scope.filteredFeesData = angular.copy($scope.feesData.slice(begin, end));
        };
        $scope.$watch('currentPage + numPerPage', function () {
            $scope.adjustFeesList();
        });

        $scope.showPerPageDataOptions = [10, 25, 50, 100];

        $scope.modFeesObj = {};
        $scope.pp = '90';
        $scope.modalType = '';
        $scope.filterPanel = false;

        $scope.toggleFilterPanel = function () {
            $scope.filterPanel = !$scope.filterPanel;
        };




        $scope.editFeesContainer = function (data) {
            $scope.modalType = 'update';
            $scope.modFeesObj = data;
            $scope.Modals.openFeesContainer();
        };

        $scope.addFeesContainer = function (data) {
            $scope.modalType = 'add';
            $scope.modFeesObj = data;
            $scope.Modals.openFeesContainer();
        };




        $scope.updateFeesDetails = function () {
            console.log($scope.modFeesObj);
            var postData = {
                "batchUpdateData":
                [{
           
                    "SubjectId": $scope.modFeesObj,
                    "SubjectCode": $scope.modFeesObj,
                    "SubjectName": $scope.modFeesObj,
                    "SKS": $scope.modFeesObj

                }]
            };

        };
        $scope.addFeesDetailsSuccess = function (data) {
            $('#subject-modal-popup').modal({
                show: 'false'
            });
        };

        $scope.addFeesDetailsError = function (data) {
            $('#subject-modal-popup').modal({
                show: 'false'
            });
        };
        $scope.addSubjectDetails = function (form) {
            if (form.$valid) {

                var postData = {
                    "batchInsertData":
                    [{
                        "SubjectCode": $scope.modFeesObj,
                        "SubjectName": $scope.modFeesObj,
                        "SKS": $scope.modFeesObj
                    }]
                };

                $scope.filteredFeesData.push(postData.batchInsertData[0]);
                $scope.Modals.closeFeesContainer();
            }

        };


        (function startup() {

            $q.all([
                feesListService.getFeesList()
            ]).then(function (data) {
                if (data != null) {
                    console.log(data[0].results);
                    $scope.feesData = data[0].results;
                    $scope.adjustFeesList();
                }
            }, function (reason) {
                errorHandler.logServiceError('feesListController', reason);
            }, function (update) {
                errorHandler.logServiceNotify('feesListController', update);
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
            openFeesContainer: function () {
                $scope.modalInstance = $modal.open({
                    animation: true,
                    templateUrl: '/App/Templates/Fees/managePopup.html',
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
            openFeesContainer: function () {
                $scope.modalInstance = $modal.open({
                    animation: true,
                    templateUrl: '/App/Templates/Subject/managePopup.html',
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
            closeFeesContainer: function () {
                $scope.modalInstance.dismiss();
            },
            closeFeesContainer: function () {
                $scope.modalInstance.dismiss();
            }
        };

    };
})
();