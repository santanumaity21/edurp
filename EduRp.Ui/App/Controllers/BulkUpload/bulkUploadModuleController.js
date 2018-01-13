﻿(function () {
    'use strict';

    angular
        .module('EduRpApp')
        .controller('bulkUploadCntrl', bulkUploadCntrl);

    bulkUploadCntrl.$inject = ['$scope', '$q', 'BulkUploadService', 'errorHandler', '$modal'];

    function bulkUploadCntrl($scope, $q, BulkUploadService, errorHandler, $modal) {


        (function startup() {

            $q.all([
                BulkUploadService.getBulkModule()
            ]).then(function (data) {
                if (data != null) {
                    $scope.filteredBulkmoudlefilter = angular.copy(data[0].results);
                }
            }, function (reason) {
                console.log("reason" + reason);
                errorHandler.logServiceError('BulkUploadModuleController', reason);
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
})();
