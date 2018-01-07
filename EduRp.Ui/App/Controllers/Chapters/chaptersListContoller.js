(function () {
    'use strict';

    angular
        .module('EduRpApp')
        .controller('chaptersListController', chaptersListController);

    chaptersListController.$inject = ['$scope', '$q', 'chaptersListService', 'errorHandler', '$modal'];

    function chaptersListController($scope, $q, chaptersListService, errorHandler, $modal) {
        $scope.chaptersData = [];
        $scope.filteredChaptersData = [];
        $scope.currentPage = 1
            , $scope.numPerPage = 10
            , $scope.maxSize = 5;
        $scope.orderByField = 'ChapterTitle';
        $scope.reverseSort = false;
        $scope.adjustChaptersList = function () {
            var begin = (($scope.currentPage - 1) * $scope.numPerPage)
                , end = begin + $scope.numPerPage;

            $scope.filteredChaptersData = angular.copy($scope.chaptersData.slice(begin, end));
        };
        $scope.$watch('currentPage + numPerPage', function () {
            $scope.adjustChaptersList();
        });

        $scope.showPerPageDataOptions = [10, 25, 50, 100];

        $scope.modChaptersObj = {};
        $scope.pp = '90';
        $scope.modalType = '';
        $scope.filterPanel = false;

        $scope.toggleFilterPanel = function () {
            $scope.filterPanel = !$scope.filterPanel;
        };




        $scope.editChaptersContainer = function (data) {
            $scope.modalType = 'update';
            $scope.modChaptersObj = data;
            $scope.Modals.openChaptersContainer();
        };

        $scope.addChaptersContainer = function (data) {
            $scope.modalType = 'add';
            $scope.modChaptersObj = data;
            $scope.Modals.openChaptersContainer();
        };




        $scope.updateChaptersDetails = function () {
            console.log($scope.modChaptersObj);
            var postData = {
                "batchUpdateData":
                [{
                    "ChaptersId": $scope.modChaptersObj,
                    "ChapterNumber": $scope.modChaptersObj,
                    "ChapterTitle": $scope.modChaptersObj,
                    "ModeOfTeaching": $scope.modChaptersObj,
                    "ChapterDetails": $scope.modChaptersObj,
                    "SKS": $scope.modChaptersObj

                }]
            };

        };
        $scope.addChaptersDetailsSuccess = function (data) {
            $('#chapters-modal-popup').modal({
                show: 'false'
            });
        };

        $scope.addChaptersDetailsError = function (data) {
            $('#chapters-modal-popup').modal({
                show: 'false'
            });
        };
        $scope.addChaptersDetails = function (form) {
            if (form.$valid) {

                var postData = {
                    "batchInsertData":
                    [{
                        "ChapterNumber": $scope.modChaptersObj,
                        "ChapterTitle": $scope.modChaptersObj,
                        "ModeOfTeaching": $scope.modChaptersObj,
                        "ChapterDetails": $scope.modChaptersObj,
                        "SKS": $scope.modChaptersObj
                    }]
                };

                $scope.filteredChaptersData.push(postData.batchInsertData[0]);
                $scope.Modals.closeChaptersContainer();
            }

        };


        (function startup() {

            $q.all([
                chaptersListService.getChaptersList()
            ]).then(function (data) {
                if (data != null) {
                    console.log(data[0].results);
                    $scope.chaptersData = data[0].results;
                    $scope.adjustChaptersList();
                }
            }, function (reason) {
                errorHandler.logServiceError('chaptersListController', reason);
            }, function (update) {
                errorHandler.logServiceNotify('chaptersListController', update);
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
            openChaptersContainer: function () {
                $scope.modalInstance = $modal.open({
                    animation: true,
                    templateUrl: '/App/Templates/Chapters/managePopup.html',
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
            openChaptersContainer: function () {
                $scope.modalInstance = $modal.open({
                    animation: true,
                    templateUrl: '/App/Templates/Chapters/managePopup.html',
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
            closeChaptersContainer: function () {
                $scope.modalInstance.dismiss();
            }
        };

    };
})
();