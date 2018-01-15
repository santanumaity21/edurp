(function () {
    'use strict';

    angular
        .module('EduRpApp')
        .controller('academicBatchController', academicBatchController);

    academicBatchController.$inject = ['$scope', '$q', 'academicBatchService', 'errorHandler', '$modal'];

    function academicBatchController($scope, $q, academicBatchService, errorHandler, $modal) {
        $scope.academicBatchData = [];
        $scope.filteredAcademicBatchData = [];
        $scope.currentPage = 1
            , $scope.numPerPage = 10
            , $scope.maxSize = 5;
        $scope.orderByField = 'SubjectName';
        $scope.reverseSort = false;
        $scope.adjustAcademicBatchList = function () {
            var begin = (($scope.currentPage - 1) * $scope.numPerPage)
                , end = begin + $scope.numPerPage;

            $scope.filteredAcademicBatchData = angular.copy($scope.academicBatchData.slice(begin, end));
        };
        $scope.$watch('currentPage + numPerPage', function () {
            $scope.adjustSubjectList();
        });

        $scope.showPerPageDataOptions = [10, 25, 50, 100];

        $scope.modAcademicBatchObj = {};
        $scope.pp = '90';
        $scope.modalType = '';
        $scope.filterPanel = false;

        $scope.toggleFilterPanel = function () {
            $scope.filterPanel = !$scope.filterPanel;
        };
        //Get PageLoad
        (function startup() {

            $q.all([
                academicBatchService.getAcademicBatchList()
            ]).then(function (data) {
                if (data !== null) {
                    console.log(data[0].results);
                    $scope.academicBatchData = data[0].results;
                    $scope.adjustAcademicBatchList();
                }
            }, function (reason) {
                errorHandler.logServiceError('academicBatchController', reason);
            }, function (update) {
                errorHandler.logServiceNotify('academicBatchController', update);
            });
        })();


        $scope.addAcademicBatchContainer = function () {
            $scope.modalType = 'add';
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
            console.log($scope.modAcademicBatchObj);
            if (form.$valid) {
                $q.when([subjectListService.updateSubject($scope.modSubjectObj)]).then(function (data) {
                    $scope.Modals.closeSubjectContainer();
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
            closeAcademicBatchContainer: function () {
                $scope.modalInstance.dismiss();
            }
        };

    };
})
    ();