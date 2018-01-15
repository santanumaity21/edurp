(function () {
    'use strict';

    angular
        .module('EduRpApp')
        .controller('examinationTypeController', examinationTypeController);

    examinationTypeController.$inject = ['$scope', '$q', 'examinationTypeService', 'errorHandler', '$modal'];

    function examinationTypeController($scope, $q, examinationTypeService, errorHandler, $modal) {
        $scope.examinationTypeData = [];
        $scope.filteredExaminationTypeData = [];
        $scope.currentPage = 1
            , $scope.numPerPage = 10
            , $scope.maxSize = 5;
        $scope.orderByField = 'ExamName';
        $scope.reverseSort = false;
        $scope.adjustExaminationList = function () {
            var begin = (($scope.currentPage - 1) * $scope.numPerPage)
                , end = begin + $scope.numPerPage;

            $scope.filteredExaminationTypeData = angular.copy($scope.examinationTypeData.slice(begin, end));
        };
        $scope.$watch('currentPage + numPerPage', function () {
            $scope.adjustExaminationList();
        });

        $scope.showPerPageDataOptions = [10, 25, 50, 100];

        $scope.modExaminationTypeObj = {};
        $scope.pp = '90';
        $scope.modalType = '';
        $scope.filterPanel = false;

        $scope.toggleFilterPanel = function () {
            $scope.filterPanel = !$scope.filterPanel;
        };




        $scope.editExaminationTypeContainer = function (data) {
            $scope.modalType = 'update';
            $scope.modExaminationTypeObj = data;
            $scope.Modals.openExaminationTypeContainer();
        };

        $scope.addExaminationTypeContainer = function (data) {
            $scope.modalType = 'add';
            $scope.modExaminationTypeObj = data;
            $scope.Modals.openExaminationTypeContainer();
        };




        $scope.updateExaminationTypeDetails = function () {
            console.log($scope.modExaminationTypeObj);
            var postData = {
                "batchUpdateData":
                [{
                    "ExaminationTypeId": $scope.modExaminationTypeObj,
                    "ExamGroup": $scope.modExaminationTypeObj,
                    "ExamName": $scope.modExaminationTypeObj,
                    "MinMarks": $scope.modExaminationTypeObj,
                    "MaxMarks": $scope.modExaminationTypeObj,
                    "FeeLabel": $scope.modExaminationTypeObj,
                    "Amount": $scope.modExaminationTypeObj

                }]
            };

        };
        $scope.addExaminationTypeDetailsSuccess = function (data) {
            $('#examintaionType-modal-popup').modal({
                show: 'false'
            });
        };

        $scope.addExaminationTypeDetailsError = function (data) {
            $('#examintaionType-modal-popup').modal({
                show: 'false'
            });
        };
        $scope.addExaminationTypeDetails = function (form) {
            if (form.$valid) {

                var postData = {
                    "batchInsertData":
                    [{
                        "ExamGroup": $scope.modExaminationTypeObj,
                        "ExamName": $scope.modExaminationTypeObj,
                        "MinMarks": $scope.modExaminationTypeObj,
                        "MaxMarks": $scope.modExaminationTypeObj,
                        "FeeLabel": $scope.modExaminationTypeObj,
                        "Amount": $scope.modExaminationTypeObj
                    }]
                };

                $scope.filteredExaminationTypeData.push(postData.batchInsertData[0]);
                $scope.Modals.closeExaminationTypeContainer();
            }

        };


        (function startup() {

            $q.all([
                examinationTypeService.getExaminationTypeList()
            ]).then(function (data) {
                if (data != null) {
                    console.log(data[0].results);
                    $scope.examinationTypeData = data[0].results;
                    $scope.adjustExaminationList();
                }
            }, function (reason) {
                errorHandler.logServiceError('examinationTypeController', reason);
            }, function (update) {
                errorHandler.logServiceNotify('examinationTypeController', update);
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
            openExaminationTypeContainer: function () {
                $scope.modalInstance = $modal.open({
                    animation: true,
                    templateUrl: '/App/Templates/ExaminationType/managePopup.html',
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
            openExaminationTypeContainer: function () {
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
            closeSubjectContainer: function () {
                $scope.modalInstance.dismiss();
            },
            closeSubjectContainer: function () {
                $scope.modalInstance.dismiss();
            }
        };

    };
})
();