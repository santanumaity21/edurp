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
        //Get PageLoad
        (function startup() {

            $q.all([
                chaptersListService.getChaptersList()
            ]).then(function (data) {
                if (data !== null) {
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


        $scope.addChaptersContainer = function () {
            $scope.modalType = 'add';
            $scope.Modals.openChaptersContainer();
        };
        //Add
        $scope.addChaptersDetails = function (form) {
            debugger
            if (form.$valid) {
                $q.when([chaptersListService.addChapters($scope.modChaptersObj)]).then(function (data) {
                    $scope.filteredChaptersData.push($scope.modChaptersObj);
                    $scope.Modals.closeChaptersContainer();
                }, function (error) {

                });

            }

        };

        //update
        $scope.editChaptersContainer = function (data) {
            $scope.modalType = 'update';
            $scope.modChaptersObj = data;
            $scope.Modals.openChaptersContainer();
        };

        $scope.updateChaptersDetails = function (form) {
            console.log($scope.modChaptersObj);
            if (form.$valid) {
                $q.when([chaptersListService.updateChapters($scope.modChaptersObj)]).then(function (data) {
                    $scope.Modals.closeChaptersContainer();
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
            openChaptersContainer: function () {
                $scope.modalInstance = $modal.open({
                    animation: true,
                    templateUrl: '/App/Templates/Chapters/addEditModalPopup.html',
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
            closeChaptersContainer: function () {
                $scope.modalInstance.dismiss();
            }
        };

    };
})
    ();