(function () {
    'use strict';

    angular
        .module('EduRpApp')
        .controller('examinationReportController', examinationReportController);

    examinationReportController.$inject = ['$scope', '$q', 'examinationReport', 'errorHandler', '$modal', 'commonService'];

    function examinationReportController($scope, $q, examinationReport, errorHandler, $modal, commonService) {
        $scope.examinationReportData = [];
        $scope.filteredExaminationReportData = [];
        $scope.currentPage = 1, $scope.numPerPage = 5, $scope.maxSize = 5;
        $scope.orderByField = 'StudentId';
        $scope.orderByLerningField = 'Skill';
        $scope.reverseSort = false;
        $scope.adjustExaminationReportList = function () {
            var begin = (($scope.currentPage - 1) * $scope.numPerPage)
                , end = begin + $scope.numPerPage;

            $scope.filteredExaminationReportData = angular.copy($scope.examinationReportData.slice(begin, end));
        };
        $scope.$watch('currentPage + numPerPage', function () {
            $scope.adjustExaminationReportList();
        });

        $scope.showPerPageDataOptions = [5, 10, 25, 50, 100];

        $scope.modExaminationReportObj = {};
        $scope.modalType = '';
        $scope.filterPanel = false;

        $scope.toggleFilterPanel = function () {
            $scope.filterPanel = !$scope.filterPanel;
        };

        
        //Get PageLoad
        (function startup() {

            $q.all([
                examinationReport.getExaminationReport()
            ]).then(function (data) {
                if (data !== null) {
                    $scope.examinationReportData = data[0].results;
                    $scope.adjustExaminationReportList();
                }
            }, function (reason) {
                errorHandler.logServiceError('examinationTypeController', reason);
            }, function (update) {
                errorHandler.logServiceNotify('examinationTypeController', update);
            });
        })();


        $scope.addExaminationReportContainer = function () {
            $scope.modalType = 'add';
            $scope.Modals.openExaminationReportContainer();
        };
        //Add
        $scope.addExaminationReportDetails = function (form) {
            console.log(form.$valid);
            console.log($scope.examinationReportObj);
            if (form.$valid) {
                $q.when([examinationReport.addExaminationReport($scope.examinationReportObj)]).then(function (data) {
                    $scope.filteredExaminationTypeData.push($scope.modExaminationTypeObj);
                    $q.all();
                    $scope.modExaminationTypeObj = {};
                    $scope.Modals.closeExaminationTypeContainer();
                }, function (error) {
                    alert("please try later");
                });

            }

        };

        //update
        $scope.editExaminationReportContainer = function (data) {
            $scope.modalType = 'update';
            $scope.modExaminationTypeObj = data;
            $scope.Modals.openExaminationReportContainer();
        };
        $scope.previewExaminationReportContainer = function (data) {
            $scope.modalType = 'preview';
            $scope.modExaminationTypeObj = data;
            $scope.Modals.openExaminationReportContainer();
        };
        
        $scope.setSkillCheckBox = function (index, value) {
            if ($scope.modExaminationReportObj['Skills_' + index + '_CSFR'] === value) {
                $scope.modExaminationReportObj['Skills_' + index + '_CSFR'] = '';
            } else {
                $scope.modExaminationReportObj['Skills_' + index + '_CSFR'] = value;
            }
        };
        $scope.updateExaminationReportDetails = function (form, eid) {
            var postData = angular.copy($scope.dataBeforeUpdating);
            console.log($scope.modExaminationReportObj);
            angular.forEach($scope.modExaminationReportObj, function (modV, modK) {
                angular.forEach($scope.dataBeforeUpdating, function (nmodV, nmodK) {
                    angular.forEach(nmodV, function (subv, subk) {
                        if (subk === modK) {
                            postData[nmodK][modK] = modV;
                        }
                        if (modK.indexOf('SubjectId') !== -1 && subk === 'Subjects') {
                            var splitedSubjectsParts = modK.split('_');

                            angular.forEach(subv, function (eachSubObj, eachSubKey) {

                                if (splitedSubjectsParts[2] === 'Subject' && splitedSubjectsParts[1] === eachSubObj.SubjectId) {
                                    postData[nmodK][subk][eachSubKey]['SubjectName'] = modV;
                                }
                                if (splitedSubjectsParts[2] === 'Mark' && splitedSubjectsParts[1] === eachSubObj.SubjectId) {
                                    postData[nmodK][subk][eachSubKey]['Mark'] = modV;
                                }
                                if (splitedSubjectsParts[2] === 'Band' && splitedSubjectsParts[1] === eachSubObj.SubjectId) {
                                    postData[nmodK][subk][eachSubKey]['Band'] = modV;
                                }


                            });
                        }
                        if (modK.indexOf('SubjectId2') !== -1 && subk === 'Subjects2') {
                            var splitedSubjects2Parts = modK.split('_');

                            angular.forEach(subv, function (eachSub2Obj, eachSub2Key) {

                                if (splitedSubjects2Parts[2] === 'Subject' && splitedSubjects2Parts[1] === eachSub2Obj.SubjectId) {
                                    postData[nmodK][subk][eachSub2Key]['SubjectName'] = modV;
                                }
                                if (splitedSubjects2Parts[2] === 'Project' && splitedSubjects2Parts[1] === eachSub2Obj.SubjectId) {
                                    postData[nmodK][subk][eachSub2Key]['Project'] = modV;
                                }
                                if (splitedSubjects2Parts[2] === 'Grade' && splitedSubjects2Parts[1] === eachSub2Obj.SubjectId) {
                                    postData[nmodK][subk][eachSub2Key]['Grade'] = modV;
                                }


                            });
                        }
                        if (modK.indexOf('CurricularId') !== -1 && subk === 'Curricular') {
                            var splitedCurricularParts = modK.split('_');

                            angular.forEach(subv, function (eachSubObj, eachSubKey) {

                                if (splitedCurricularParts[2] === 'Name' && splitedCurricularParts[1] === eachSubObj.CurricularId) {
                                    postData[nmodK][subk][eachSubKey]['CurricularName'] = modV;
                                }
                                if (splitedCurricularParts[2] === 'Grade' && splitedCurricularParts[1] === eachSubObj.CurricularId) {
                                    postData[nmodK][subk][eachSubKey]['CurricularGrade'] = modV;
                                }


                            });
                        }

                        if (modK.indexOf('Skills') !== -1 && subk === 'LearningSkills') {
                            var splitedSkillsParts = modK.split('_');

                            angular.forEach(subv, function (eachSubObj, eachSubKey) {

                                if (splitedSkillsParts[2] === 'CSFR' && parseInt(splitedSkillsParts[1]) === parseInt(eachSubKey)) {
                                    postData[nmodK][subk][eachSubKey]['Value'] = modV;
                                }


                            });
                        }


                    }); 

                    
                    
                });
            });
            
            if (form.$valid) {
                examinationReport.updateExaminationReport(postData).then(function (data) {
                    
                    $scope.modExaminationReportObj = {};
                    $scope.Modals.closeExaminationReportContainer();

                }, function (error) {
                    alert("Please try again");
                });

            }
        };
        //delete 

        $scope.deleteExaminationReportContainer = function (ed) {
            if (confirm('Are you sure you want to delete this ExaminationType?')) {
                examinationTypeService.deleteExaminationType(ed).then(function (data) {
                    $scope.filteredExaminationTypeData = commonService.removeItemFromArray($scope.filteredExaminationTypeData, ed);
                }, function (error) {
                    alert("Please try again");
                });
            }


        };


        $scope.Modals = {
            openExaminationReportContainer: function () {

                $q.all([
                    examinationReport.erGridInfoBeforeUpdating()
                ]).then(function (data) {
                    if (data !== null) {
                        $scope.dataBeforeUpdating = data[0].results;
                        angular.forEach(data[0].results, function (result, resultIndex) {
                            angular.forEach(result, function (v, k) {
                                if (k === 'Name') {
                                    $scope.modExaminationReportObj.Name = v;
                            } if (k === 'Class') {
                                $scope.modExaminationReportObj.Class = v;
                            }
                            if (k === 'RegNoOrNSIN') {
                                $scope.modExaminationReportObj.RegNoOrNSIN = v;
                            } if (k === 'Section') {
                                $scope.modExaminationReportObj.Section = v;
                            }
                            if (k === 'Subjects') {
                                $scope.erSubjectsGIBA = v;
                                angular.forEach(v, function (subv, subk) {
                                    $scope.modExaminationReportObj['SubjectId_' + subv.SubjectId + '_Subject'] = subv.SubjectName;
                                    $scope.modExaminationReportObj['SubjectId_' + subv.SubjectId + '_Mark'] = subv.Mark;
                                    $scope.modExaminationReportObj['SubjectId_' + subv.SubjectId + '_Band'] = subv.Band;

                                }); 
                            } if (k === 'Subjects2') {
                                $scope.erSubjects2GIBA = v;
                                angular.forEach(v, function (subv, subk) {
                                    $scope.modExaminationReportObj['SubjectId2_' + subv.SubjectId + '_Subject'] = subv.SubjectName;
                                    $scope.modExaminationReportObj['SubjectId2_' + subv.SubjectId + '_Project'] = subv.Project;
                                    $scope.modExaminationReportObj['SubjectId2_' + subv.SubjectId + '_Grade'] = subv.Grade;

                                }); 
                            } if (k === 'Curricular') {
                                $scope.erCurricularGIBA = v;
                                angular.forEach(v, function (subv, subk) {
                                    $scope.modExaminationReportObj['CurricularId_' + subv.CurricularId + '_Name'] = subv.CurricularName;
                                    $scope.modExaminationReportObj['CurricularId_' + subv.CurricularId + '_Grade'] = subv.CurricularGrade;

                                }); 
                            } if (k === 'LearningSkills') {
                                $scope.erLearningSkillsGIBA = v;
                                angular.forEach(v, function (subv, subk) {
                                    $scope.modExaminationReportObj['Skills_' + subk + '_CSFR'] = subv.Value; 

                                }); 
                            }
                            });

                        });
                        $scope.modalInstance = $modal.open({
                            animation: true,
                            templateUrl: '/App/Templates/ExaminationReport/updateExaminationReport.html',
                            size: 'lg',
                            scope: $scope,
                            backdrop: 'static'
                        });
                    }
                }, function (reason) {
                    errorHandler.logServiceError('examinationTypeController', reason);
                }, function (update) {
                    errorHandler.logServiceNotify('examinationTypeController', update);
                });
                

               
            },
            closeExaminationReportContainer: function () {
                $scope.modalInstance.dismiss();
            }
        };

    };
})
();