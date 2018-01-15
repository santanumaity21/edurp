(function () {
    'use strict';

    angular
        .module('EduRpApp')
        .controller('classRoomListController', classRoomListController);

    classRoomListController.$inject = ['$scope', '$q', 'classRoomListService', 'errorHandler', '$modal'];

    function classRoomListController($scope, $q, classRoomListService, errorHandler, $modal) {
        $scope.classRoomData = [];
        $scope.filteredclassRoomData = [];
        $scope.currentPage = 1
            , $scope.numPerPage = 10
            , $scope.maxSize = 5;
        $scope.orderByField = 'ClassName';
        $scope.reverseSort = false;
        $scope.adjustclassRoomList = function () {
            var begin = (($scope.currentPage - 1) * $scope.numPerPage)
                , end = begin + $scope.numPerPage;

            $scope.filteredclassRoomData = angular.copy($scope.classRoomData.slice(begin, end));
        };
        $scope.$watch('currentPage + numPerPage', function () {
            $scope.adjustclassRoomList();
        });

        $scope.showPerPageDataOptions = [10, 25, 50, 100];

        $scope.modclassRoomObj = {};
        $scope.pp = '90';
        $scope.modalType = '';
        $scope.filterPanel = false;

        $scope.toggleFilterPanel = function () {
            $scope.filterPanel = !$scope.filterPanel;
        };
        //Get PageLoad
        (function startup() {

            $q.all([
                classRoomListService.getClassRoomList()
            ]).then(function (data) {
                if (data !== null) {
                    console.log(data[0].results);
                    $scope.classRoomData = data[0].results;
                    $scope.adjustclassRoomList();
                }
            }, function (reason) {
                errorHandler.logServiceError('classRoomListController', reason);
            }, function (update) {
                errorHandler.logServiceNotify('classRoomListController', update);
            });
        })();


        $scope.addClassRoomContainer = function () {
            $scope.modalType = 'add';
            $scope.Modals.openClassRoomContainer();
        };
        //Add
        $scope.addClassRoomDetails = function (form) {
            debugger
            if (form.$valid) {
                $q.when([classRoomListService.addclassRoom($scope.modclassRoomObj)]).then(function (data) {
                    $scope.filteredclassRoomData.push($scope.modclassRoomObj);
                    $scope.Modals.closeClassRoomContainer();
                }, function (error) {

                });

            }

        };

        //update
        $scope.addClassRoomContainer = function (data) {
            $scope.modalType = 'update';
            $scope.modclassRoomObj = data;
            $scope.Modals.openClassRoomContainer();
        };

        $scope.updatClassRoomDetails = function (form) {
            console.log($scope.modclassRoomObj);
            if (form.$valid) {
                $q.when([classRoomListService.updateclassRoom($scope.modclassRoomObj)]).then(function (data) {
                    $scope.Modals.closeClassRoomContainer();
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
            openClassRoomContainer: function () {
                $scope.modalInstance = $modal.open({
                    animation: true,
                    templateUrl: '/App/Templates/ClassRoom/addEditModalPopup.html',
                    size: 'lg',
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
            closeClassRoomContainer: function () {
                $scope.modalInstance.dismiss();
            }
        };

    };
})
    ();
