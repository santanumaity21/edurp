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
//Get PageLoad
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


        $scope.addSubjectContainer = function () {
            $scope.Modals.openSubjectContainer();
        };
//Add
        $scope.addSubjectDetails = function (form) {
            debugger
            if (form.$valid) {
                $q.when([subjectListService.addSubjects($scope.modSubjectObj)]).then(function (data) {
                    $scope.filteredSubjectData.push($scope.modSubjectObj);
                    $scope.Modals.closeSubjectContainer();
                }, function (error) {

                });

            }

        };

//update
        $scope.editSubjectContainer = function (data) {
            $scope.modalType = 'update';
            $scope.modSubjectObj = data;
            $scope.Modals.openSubjectContainer();
        };

        $scope.updateSubjectDetails = function (form) {
            console.log($scope.modSubjectObj);
            if (form.$valid) {
                $q.when([subjectListService.updateSubject($scope.modSubjectObj)]).then(function (data) {
                    //$scope.filteredSubjectData.push($scope.modSubjectObj);
                    $scope.Modals.closeSubjectContainer();
                }, function (error) {

                });

            }
        };
//delete 
        $scope.deleteSubject = function (subjectId) {
            if (confirm('Are you sure you want to delete this subject?')) {
                subjectListService.deleteSubject(subjectId).then(
                    function (data) {
                        removeSubject(subjectId);
                    },
                    function (response) {
                        console.log(response);
                    });
            }
            else {
                console.log('delete cancelled');
            }
        }
        function removesubject(subjectId) {
            for (var i = 0; i < $scope.subjectData.length; i++) {
                if ($scope.subjectData[i].id === subjectId) {
                    $scope.subjectData.splice(i, 1);
                    break;
                }
            }
        }


       
        //$scope.addSubjectDetailsSuccess = function (data) {
        //    $('#subject-modal-popup').modal({
        //        show: 'false'
        //    });
        //};

        //$scope.addSubjectDetailsError = function (data) {
        //    $('#subject-modal-popup').modal({
        //        show: 'false'
        //    });
        //};


       

   
       

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
            closeSubjectContainer: function () {
                $scope.modalInstance.dismiss();
            }
        };

    };
})
    ();