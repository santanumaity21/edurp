(function () {
    'use strict';

    angular
        .module('EduRpApp')
        .controller('programStudyController', programStudyController);

    programStudyController.$inject = ['$scope', '$q', 'programStudyService', 'errorHandler', '$modal'];

    function programStudyController($scope, $q, programStudyService, errorHandler, $modal) {
        $scope.programData = [];
        $scope.filteredprogramData = [];
        $scope.currentPage = 1
            , $scope.numPerPage = 10
            , $scope.maxSize = 5;
        $scope.orderByField = 'ProgramName';
        $scope.reverseSort = false;
        $scope.adjustProgramList = function () {
            var begin = (($scope.currentPage - 1) * $scope.numPerPage)
                , end = begin + $scope.numPerPage;

            $scope.filteredprogramData = angular.copy($scope.programData.slice(begin, end));
        };
        $scope.$watch('currentPage + numPerPage', function () {
            $scope.adjustProgramList();
        });

        $scope.showPerPageDataOptions = [10, 25, 50, 100];

        $scope.modProgramObj = {};
        $scope.pp = '90';
        $scope.modalType = '';
        $scope.filterPanel = false;

        $scope.toggleFilterPanel = function () {
            $scope.filterPanel = !$scope.filterPanel;
        };




        $scope.editProgramContainer = function (data) {
            $scope.modalType = 'update';
            $scope.modProgramObj = data;
            $scope.Modals.openProgramContainer();
        };

        $scope.addProgramContainer = function (data) {
            $scope.modalType = 'add';
            $scope.modProgramObj = data;
            $scope.Modals.openProgramContainer();
        };




        $scope.updateProgramDetails = function () {
            console.log($scope.modProgramObj);
            var postData = {
                "batchUpdateData":
                [{
                    "ProgramCode": $scope.modProgramObj.ProgramCode,
                    "ProgramName": $scope.modProgramObj.ProgramName
                }]
            };
            $scope.Modals.closeProgramContainer();
        };
        $scope.addProgramDetailsSuccess = function (data) {
            $('#program-modal-popup').modal({
                show: 'false'
            });
        };

        $scope.addprogramDetailsError = function (data) {
            $('#program-modal-popup').modal({
                show: 'false'
            });
        };
        $scope.addprogramDetails = function (form) {
            debugger;
            if (form.$valid) {

                var postData = {
                    "batchInsertData":
                    [{
                        "programCode": $scope.modProgramObj.programCode,
                        "programName": $scope.modProgramObj.programName
  
                    }]
                };
                console.log(postData);
                $scope.filteredprogramData.push(postData.batchInsertData[0]);
                $scope.Modals.closeProgramContainer();
            }

        };


        (function startup() {

            $q.all([
                programStudyService.getProgramStudyList()
            ]).then(function (data) {
                if (data !== null) {
                    console.log(data[0].results);
                    $scope.programData = data[0].results;
                    $scope.adjustProgramList();
                }
            }, function (reason) {
                errorHandler.logServiceError('programStudyController', reason);
            }, function (update) {
                errorHandler.logServiceNotify('programStudyController', update);
            });
        })();

        function removeprogram(programId) {
            for (var i = 0; i < $scope.programs.length; i++) {
                if ($scope.programs[i].id === programId) {
                    $scope.programs.splice(i, 1);
                    break;
                }
            }
        }

        $scope.Modals = {
            openProgramContainer: function () {
                $scope.modalInstance = $modal.open({
                    animation: true,
                    templateUrl: '/App/Templates/ProgramStudy/managePopup.html',
                    size: 'lg',
                    scope: $scope,
                    backdrop: 'static'
                });

                $scope.modalInstance.result.then(
                    function (program) {
                        if (program.programId !== null) {
                            $scope.Commands.updateprogram(program);
                        }
                        else {
                            $scope.Commands.saveprogram(program);
                        }
                    },
                    function (event) {

                    });
            },
            openProgramManagePopUp: function () {
                $scope.modalInstance = $modal.open({
                    animation: true,
                    templateUrl: '/App/Templates/ProgramStudy/managePopup.html',
                    size: 'lg',
                    scope: $scope,
                    backdrop: 'static'
                });

                $scope.modalInstance.result.then(
                    function (program) {
                        if (program.programId !== null) {
                            $scope.Commands.updateprogram(program);
                        }
                        else {
                            $scope.Commands.saveprogram(program);
                        }
                    },
                    function (event) {

                    });
            },
            closeProgramContainer: function () {
                $scope.modalInstance.dismiss();
            }
        };

    };
})
    ();