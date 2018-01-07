(function () {
    'use strict';

    angular
        .module('EduRpApp')
        .controller('subjectListController', subjectListController);

    subjectListController.$inject = ['$scope', '$q', 'subjectListService', 'errorHandler', '$modal'];

    function subjectListController($scope, $q, subjectListService, errorHandler, $modal) {
        $scope.subjectData = [];
        $scope.filteredSubjectData = [];
        $scope.currentPage = 1
            , $scope.numPerPage = 10
            , $scope.maxSize = 5;
        $scope.orderByField = 'SubjectName';
        $scope.reverseSort = false;
        $scope.adjustSubjectList = function () {
            var begin = (($scope.currentPage - 1) * $scope.numPerPage)
                , end = begin + $scope.numPerPage;

            $scope.filteredSubjectData = angular.copy($scope.subjectData.slice(begin, end));
        };
        $scope.$watch('currentPage + numPerPage', function () {
            $scope.adjustSubjectList();
        });

        $scope.showPerPageDataOptions = [10, 25, 50, 100];

        $scope.modSubjectObj = {};
        $scope.pp = '90';
        $scope.modalType = '';
        $scope.filterPanel = false;

        $scope.toggleFilterPanel = function () {
            $scope.filterPanel = !$scope.filterPanel;
        };




        $scope.editSubjectContainer = function (data) {
            $scope.modalType = 'update';
            $scope.modSubjectObj = data;
            $scope.Modals.openSubjectContainer();
        };

        $scope.addSubjectContainer = function (data) {
            $scope.modalType = 'add';
            $scope.modSubjectObj = data;
            $scope.Modals.openSubjectContainer();
        };




        $scope.updateSubjectDetails = function () {
            console.log($scope.modSubjectObj);
            var postData = {
                "batchUpdateData":
                [{
           
                    "SubjectCode": $scope.modSubjectObj.SubjectCode,
                    "SubjectName": $scope.modSubjectObj.SubjectName,
                    "SKS": $scope.modSubjectObj.SKS

                }]
            };
            $scope.Modals.closeSubjectContainer();
        };
        $scope.addSubjectDetailsSuccess = function (data) {
            $('#subject-modal-popup').modal({
                show: 'false'
            });
        };

        $scope.addSubjectDetailsError = function (data) {
            $('#subject-modal-popup').modal({
                show: 'false'
            });
        };
        $scope.addSubjectDetails = function (form) {
            debugger;
            if (form.$valid) {
                
                var postData = {
                    "batchInsertData":
                    [{
                        "SubjectCode": $scope.modSubjectObj.SubjectCode,
                        "SubjectName": $scope.modSubjectObj.SubjectName,
                        "SKS": $scope.modSubjectObj.SKS
                    }]
                };
                console.log(postData);
                $scope.filteredSubjectData.push(postData.batchInsertData[0]);
                $scope.Modals.closeSubjectContainer();
            }

        };


        (function startup() {

            $q.all([
                subjectListService.getSubjectList()
            ]).then(function (data) {
                if (data !== null) {
                    console.log(data[0].results);
                    $scope.subjectData = data[0].results;
                    $scope.adjustSubjectList();
                }
            }, function (reason) {
                errorHandler.logServiceError('subjectListController', reason);
            }, function (update) {
                errorHandler.logServiceNotify('subjectListController', update);
            });
        })();

        function removesubject(subjectId) {
            for (var i = 0; i < $scope.subjects.length; i++) {
                if ($scope.subjects[i].id === subjectId) {
                    $scope.subjects.splice(i, 1);
                    break;
                }
            }
        }

        $scope.Modals = {
            openSubjectContainer: function () {
                $scope.modalInstance = $modal.open({
                    animation: true,
                    templateUrl: '/App/Templates/Subject/managePopup.html',
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
            openSubjectManagePopUp: function () {
                $scope.modalInstance = $modal.open({
                    animation: true,
                    templateUrl: '/App/Templates/Subject/managePopup.html',
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
            closeSubjectContainer: function () {
                $scope.modalInstance.dismiss();
            }
        };

    };
})
();