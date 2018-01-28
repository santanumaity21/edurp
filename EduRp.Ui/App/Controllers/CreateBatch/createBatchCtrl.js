(function () {
    'use strict';

    angular
        .module('EduRpApp')
        .controller('createBatchController', createBatchController);

    createBatchController.$inject = ['$scope', '$q', 'createBatchService', 'errorHandler', '$modal', '$translate', 'commonService'];

    function createBatchController($scope, $q, createBatchService, errorHandler, $modal, $translate, commonService) {

        $scope.programStudyData = [];
        $scope.filteredCourseData = [];
        $scope.programStudyCurrentPage = 1;
        $scope.programStudyNumPerPage = 10;
        $scope.courseMaxSize = 5;
        $scope.assignedProgramStudyCodeByField = 'ProgramStudyCode';
        $scope.assignedProgramStudyReverseSort = false;
        $scope.nonAssignedProgramStudyOrderByField = 'ProgramStudyCode';
        $scope.nonAssignedProgramStudyReverseSort = false;
        $scope.selectedBatch = null;
        $scope.mainContent = false;
        $scope.mainContentSubPart = false;
        $scope.linkedProgramStudySelectedArr = [];
        $scope.unlinkedProgramStudySelectedArr = [];
        $scope.adjustCourseList = function () {
            var begin = (($scope.courseCurrentPage - 1) * $scope.courseNumPerPage)
                , end = begin + $scope.courseNumPerPage;

            $scope.filteredCourseData = angular.copy($scope.programStudyData.slice(begin, end));
        };
        $scope.$watch('programStudyCurrentPage + programStudyNumPerPage', function () {
            $scope.adjustProgramStudyList();
        });
        $scope.changeLanguage = function (langKey) {
            $translate.use(langKey);
        };

        $scope.feesData = [];
        $scope.filteredFeesData = [];
        $scope.feesCurrentPage = 1;
        $scope.feesNumPerPage = 10;
        $scope.feesMaxSize = 5;
        $scope.assignedFeesOrderByField = 'feesName';
        $scope.assignedFeesReverseSort = false;
        $scope.nonAssignedFeesOrderByField = 'feesName';
        $scope.nonAssignedFeesReverseSort = false;
        $scope.linkedFeesSelectedArr = [];
        $scope.unlinkedFeesSelectedArr = [];

        $scope.adjustFeesList = function () {
            var begin = (($scope.feesCurrentPage - 1) * $scope.feesNumPerPage)
                , end = begin + $scope.feesNumPerPage;

            $scope.filteredFeesData = angular.copy($scope.feesData.slice(begin, end));
        };
        $scope.$watch('feesCurrentPage + feesNumPerPage', function () {
            $scope.adjustFeesList();
        });

        $scope.showPerPageDataOptions = [10, 25, 50, 100];

        $scope.addBatchFormObj = { status: "Active" };

        $scope.modCourseObj = {};
        $scope.modalType = '';
        $scope.filterPanel = false;

        $scope.unlinkedProgramStudyOfPSList = null;
        $scope.unlinkedFeesOfPSList = null;

        $scope.toggleFilterPanel = function () {
            $scope.filterPanel = !$scope.filterPanel;
        };

        $scope.addBatchContainer = function () {
            $scope.Modals.open('App/Templates/CreateBatch/addBatch.html');
        };
        $scope.assignProgramStudyContainer = function () {
            $q.all([createBatchService.getUnlinkedCoursesOfBatch()]).then(function (data) {
                $scope.unlinkedCoursesOfPSList = data[0].results;
            }, function () {

            });

            $scope.Modals.open('App/Templates/CreateBatch/assignCourses.html');
        };
        $scope.assignFeesContainer = function () {
            $q.all([createBatchService.getUnlinkedFeesOfBatch()]).then(function (data) {
                $scope.unlinkedFeesOfPSList = data[0].results;
            }, function () {

            });
            $scope.Modals.open('App/Templates/CreateBatch/assignFees.html');
        };

        $scope.isLinkedProgramStudyAllSelected = function () {
            if ($scope.linkedProgramStudyAllSelected) {
                var tt = $scope.filteredCourseData;
                for (var i = 0; i < tt.length; i++) {
                    $scope.linkedProgramStudySelectedArr.push(tt[i].id);
                    $scope.filteredProgramStudyData[i].Selected = 'true';
                }
            } else {
                angular.forEach($scope.filteredProgramStudyData, function (item) {
                    $scope.linkedProgramStudySelectedArr = [];
                    item.Selected = 'false';
                });
            }
        };
        $scope.isUnlinkedProgramStudyAllSelected = function () {
            if ($scope.unlinkedProgramStudyAllSelected) {
                var tt = $scope.unlinkedProgramStudyOfPSList;
                for (var i = 0; i < tt.length; i++) {
                    $scope.unlinkedProgramStudySelectedArr.push(tt[i].id);
                    $scope.unlinkedProgramStudyOfPSList[i].Selected = 'true';
                }
            } else {
                angular.forEach($scope.unlinkedProgramStudyOfPSList, function (item) {
                    $scope.unlinkedProgramStudySelectedArr = [];
                    item.Selected = 'false';
                });
            }
        };
        $scope.isUnlinkedFeesAllSelected = function () {
            if ($scope.unlinkedFeesAllSelected) {
                var tt = $scope.unlinkedFeesOfPSList;
                for (var i = 0; i < tt.length; i++) {
                    $scope.unlinkedFeesSelectedArr.push(tt[i].id);
                    $scope.unlinkedFeesOfPSList[i].Selected = 'true';
                }
            } else {
                angular.forEach($scope.unlinkedFeesOfPSList, function (item) {
                    $scope.unlinkedFeesSelectedArr = [];
                    item.Selected = 'false';
                });
            }
        };
        $scope.isLinkedFeesAllSelected = function () {
            if ($scope.linkedFeesAllSelected) {
                var tt = $scope.filteredFeesData;
                for (var i = 0; i < tt.length; i++) {
                    $scope.linkedFeesSelectedArr.push(tt[i].id);
                    $scope.filteredFeesData[i].Selected = 'true';
                }
            } else {
                angular.forEach($scope.filteredFeesData, function (item) {
                    $scope.linkedFeesSelectedArr = [];
                    item.Selected = 'false';
                });
            }
        };
        $scope.isThisLinkedProgramStudySelected = function (that) {
            if ($scope.linkedCoursesAllSelected) {
                if (that.Selected === 'true') {
                    $scope.linkedCoursesSelectedArr.push(that.id);

                } else {
                    $scope.linkedCoursesSelectedArr = commonService.removeItemFromArray($scope.linkedCoursesSelectedArr, that.id);
                    if ($scope.linkedCoursesSelectedArr.length === 0) {
                        $scope.linkedCoursesAllSelected = false;
                    }

                }
            } else {
                if (that.Selected) {
                    $scope.linkedCoursesSelectedArr.push(that.id);
                    if ($scope.filteredCourseData.length === $scope.linkedCoursesSelectedArr.length) {
                        $scope.linkedCoursesAllSelected = true;
                    }
                } else {
                    $scope.linkedCoursesSelectedArr = commonService.removeItemFromArray($scope.linkedCoursesSelectedArr, that.id);
                    if ($scope.linkedCoursesSelectedArr.length === 0) {
                        $scope.linkedCoursesAllSelected = false;
                    }
                }

            }
        };
        $scope.isThisUnlinkedProgramStudySelected = function (that) {
            if ($scope.unlinkedCoursesAllSelected) {
                if (that.Selected === 'true') {
                    $scope.unlinkedCoursesSelectedArr.push(that.id);
                } else {
                    $scope.unlinkedCoursesSelectedArr = commonService.removeItemFromArray($scope.unlinkedCoursesSelectedArr, that.id);
                    if ($scope.unlinkedCoursesSelectedArr.length === 0) {
                        $scope.unlinkedCoursesAllSelected = false;
                    }

                }
            } else {
                if (that.Selected) {
                    $scope.unlinkedCoursesSelectedArr.push(that.id);
                    if ($scope.unlinkedCoursesOfPSList.length === $scope.unlinkedCoursesSelectedArr.length) {
                        $scope.unlinkedCoursesAllSelected = true;
                    }
                } else {
                    $scope.unlinkedCoursesSelectedArr = commonService.removeItemFromArray($scope.unlinkedCoursesSelectedArr, that.id);
                    if ($scope.unlinkedCoursesSelectedArr.length === 0) {
                        $scope.unlinkedCoursesAllSelected = false;
                    }
                }

            }
        };
        $scope.isThisUnlinkedFeeSelected = function (that) {
            if ($scope.unlinkedFeesAllSelected) {
                if (that.Selected === 'true') {
                    $scope.unlinkedFeesSelectedArr.push(that.id);
                } else {
                    $scope.unlinkedFeesSelectedArr = commonService.removeItemFromArray($scope.unlinkedFeesSelectedArr, that.id);
                    if ($scope.unlinkedFeesSelectedArr.length === 0) {
                        $scope.unlinkedFeesAllSelected = false;
                    }

                }
            } else {
                if (that.Selected) {
                    $scope.unlinkedFeesSelectedArr.push(that.id);
                    if ($scope.unlinkedFeesOfPSList.length === $scope.unlinkedFeesSelectedArr.length) {
                        $scope.unlinkedFeesAllSelected = true;
                    }
                } else {
                    $scope.unlinkedFeesSelectedArr = commonService.removeItemFromArray($scope.unlinkedFeesSelectedArr, that.id);
                    if ($scope.unlinkedFeesSelectedArr.length === 0) {
                        $scope.unlinkedFeesAllSelected = false;
                    }
                }

            }
        };
        $scope.isThisLinkedFeeSelected = function (that) {
            if ($scope.linkedFeesAllSelected) {
                if (that.Selected === 'true') {
                    $scope.linkedFeesSelectedArr.push(that.id);

                } else {
                    $scope.linkedFeesSelectedArr = commonService.removeItemFromArray($scope.linkedFeesSelectedArr, that.id);
                    if ($scope.linkedFeesSelectedArr.length === 0) {
                        $scope.linkedFeesAllSelected = false;
                    }

                }
            } else {
                if (that.Selected) {
                    $scope.linkedFeesSelectedArr.push(that.id);
                    if ($scope.filteredFeesData.length === $scope.linkedFeesSelectedArr.length) {
                        $scope.linkedFeesAllSelected = true;
                    }
                } else {
                    $scope.linkedFeesSelectedArr = commonService.removeItemFromArray($scope.linkedFeesSelectedArr, that.id);
                    if ($scope.linkedFeesSelectedArr.length === 0) {
                        $scope.linkedFeesAllSelected = false;
                    }
                }

            }
        };
        $scope.addBatch = function (form) {
            if (form.$valid) {
                $q.when(createBatchService.addBatch($scope.addBatchFormObj)).then(function (success) {
                    $scope.Modals.close();
                    $scope.pageLoad();
                }, function (error) {
                    alert('Please try again');
                });
            }
        };

        $scope.removeSelectedCourses = function () {
            if ($scope.linkedProgramStudySelectedArr.length > 0) {
                $q.when(createBatchService.removeSelectedCoursesFromBatch($scope.linkedProgramStudySelectedArr)).then(function (success) {
                    $scope.Modals.close();
                    var tempCD = [];
                    angular.forEach($scope.programStudyData, function (tcd, key) {
                        if ($scope.linkedProgramStudySelectedArr.indexOf(tcd.id) === -1) {
                            tempCD.push(tcd);
                        }
                    });
                    $scope.programStudyData = tempCD;
                    $scope.adjustProgramStudyList();
                    $scope.linkedProgramStudySelectedArr = [];
                    $scope.linkedProgramStudyAllSelected = false;
                }, function (error) {
                    alert("Please try again.");
                });
            } else {
                alert("Please select courses before removing it.");
            }

        };
        $scope.removeSelectedFees = function () {
            if ($scope.linkedFeesSelectedArr.length > 0) {
                $q.when(createBatchService.removeSelectedFeesFromBatch($scope.linkedFeesSelectedArr)).then(function (success) {
                    $scope.Modals.close();
                    var tempCD = [];
                    angular.forEach($scope.feesData, function (tcd, key) {
                        if ($scope.filteredFeesData.indexOf(tcd.id) === -1) {
                            tempCD.push(tcd);
                        }
                    });
                    $scope.feesData = tempCD;
                    $scope.adjustFeesList();
                    $scope.linkedFeesSelectedArr = [];
                    $scope.linkedFeesAllSelected = false;
                }, function (error) {
                    alert("Please try again.");
                });
            } else {
                alert("Please select fees before removing it.");
            }

        };
        $scope.assignUnlinkedCourses = function () {
            if ($scope.unlinkedProgramStudySelectedArr.length > 0) {
                $q.when(createBatchService.assignUnlinkedCoursesToBatch($scope.unlinkedProgramStudySelectedArr)).then(function (success) {
                    $scope.Modals.close();
                    $scope.programStudyData.push($scope.unlinkedProgramStudySelectedArr);
                    $scope.adjustProgramStudyList();
                    $scope.unlinkedProgramStudySelectedArr = [];
                    $scope.unlinkedProgramStudyAllSelected = false;
                }, function (error) {
                    alert("Please try again.");
                });
            } else {
                alert("Please select courses before assigning it.");
            }

        };

        $scope.assignUnlinkedFees = function () {
            if ($scope.unlinkedFeesSelectedArr.length > 0) {
                $q.when(createBatchService.assignUnlinkedFeesToBatch($scope.unlinkedFeesSelectedArr)).then(function (success) {
                    $scope.Modals.close();
                    $scope.feesData.push($scope.unlinkedFeesSelectedArr);
                    $scope.adjustFeesList();
                    $scope.unlinkedFeesSelectedArr = [];
                    $scope.unlinkedCoursesAllSelected = false;
                }, function (error) {
                    alert("Please try again.");
                });
            } else {
                alert("Please select fees before assigning it.");
            }

        };
        $scope.addProgramStudyContainer = function (data) {
            $scope.modalType = 'add';
            $scope.modProgramStudyObj = data;
            $scope.Modals.open();
        };
        $scope.fetchRelatedDataOfBatch = function () {
            var selBatch = angular.copy($scope.selectedBatch);
            if (selBatch) {
                $q.all([
                    createBatchService.getLinkedProgramStudyOfBatch(selBatch),
                    createBatchService.getLinkedFeesOfBatch(selBatch)
                ]).then(function (data) {
                    $scope.mainContentSubPart = true;
                    if (data != null) {
                        $scope.programStudyData = data[0].results;
                        $scope.adjustProgramStudyList();

                        $scope.feesData = data[1].results;
                        $scope.adjustFeesList();
                    }
                }, function (reason) {
                    errorHandler.logServiceError('createBatchController', reason);
                });
            } else {
                alert("Please select a batch");
            }
        };


        $scope.pageLoad = function () {
            $q.all([
                createBatchService.getBatchList()
            ]).then(function (data) {
                $scope.mainContent = true;
                if (data != null) {
                    $scope.batchData = data[0].results;
                    if (data[0].results.length < 5 && data[0].results.length > 0) {
                        $scope.filteredBatchData = data[0].results;
                    } else if (data[0].results.length >= 5) {
                        $scope.filteredBatchData = data[0].results;
                    }

                }
            }, function (reason) {
                console.log("reason" + reason);
                errorHandler.logServiceError('createBatchController', reason);
            }, function (update) {
                console.log("update" + update);
                errorHandler.logServiceNotify('createBatchController', update);
            });
        };

        function removeContact(contactId) {
            for (var i = 0; i < $scope.contacts.length; i++) {
                if ($scope.contacts[i].id == contactId) {
                    $scope.contacts.splice(i, 1);
                    break;
                }
            }
        };

        $scope.contacts = [];

        $scope.Commands = {
            saveContact: function (contact) {
                ContactService.addContact(contact).then(
                    function (result) {
                        $scope.contacts.push(result.data);
                    },
                    function (response) {
                        console.log(response);
                    });
            },
            updateContact: function (contact) {
                ContactService.updateContact(contact).then(
                    function (result) {

                    },
                    function (response) {
                        console.log(response);
                    });
            }
        };

        $scope.Queries = {
            getContacts: function () {
                ContactService.getContacts();
            },
            getContactById: function (contactId) {
                ContactService.getContactById(contactId);
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

        $scope.pageLoad();


    };
})();