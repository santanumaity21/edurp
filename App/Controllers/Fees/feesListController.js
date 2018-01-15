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
        //Get PageLoad
        (function startup() {

            $q.all([
                feesListService.getFeesList()
            ]).then(function (data) {
                if (data !== null) {
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


        $scope.addFeesContainer = function () {
            $scope.modalType = 'add';
            $scope.Modals.openFeesContainer();
        };
        //Add
        $scope.addFeesDetailsSuccess = function (form) {
            debugger
            if (form.$valid) {
                $q.when([feesListService.addFees($scope.modFeesObj)]).then(function (data) {
                    $scope.filteredFeesData.push($scope.modFeesObj);
                    $scope.Modals.closeFeesContainer();
                }, function (error) {

                });

            }

        };

        //update
        $scope.editFeesContainer = function (data) {
            $scope.modalType = 'update';
            $scope.modFeesObj = data;
            $scope.Modals.openFeesContainer();
        };

        $scope.updateFeesDetails = function (form) {
            console.log($scope.modFeesObj);
            if (form.$valid) {
                $q.when([feesListService.updateFees($scope.modFeesObj)]).then(function (data) {
                    $scope.Modals.closeFeesContainer();
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
            openFeesContainer: function () {
                $scope.modalInstance = $modal.open({
                    animation: true,
                    templateUrl: '/App/Templates/Fees/addEditModalPopup.html',
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
            closeFeesContainer: function () {
                $scope.modalInstance.dismiss();
            }
        };

    };
})
    ();