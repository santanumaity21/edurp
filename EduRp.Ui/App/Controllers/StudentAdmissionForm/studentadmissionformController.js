(function () {
    'use strict';

    angular
        .module('EduRpApp')
        .controller('studentAdmissionFormController', studentAdmissionFormController);

    studentAdmissionFormController.$inject = ['$scope','$q','errorHandler','studentAdmissionFormService','commonService','$modal'];

    function studentAdmissionFormController($scope, $q, studentAdmissionFormService, errorHandler, commonService,$modal,) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'studentAdmissionFormController';
        $scope.oneAtATime = true;


        $scope.OrginalAdmissionObj = {

            "fldtitle": "Mr",
            "fldfirstname": "Praveen",
            "fldlastname" : "Venkatachalam" , 
            "fldgender" : "M" , 
            "fldgovtid" : "123" , 
            "fldplaceofbirth" : "Bangalore" , 
            "flddateofbirth" : "03- 01 - 1971" , 
            "fldmobileno" : "8861783995" , 
            "fldtelephoneno" : "8861783995" , 
            "fldemailaddress" : "167, classic Orchards , Bangalore - 560076" , 
            "fldpermanentaddress" : "167, classic Orchards , Bangalore - 560076" , 
            "fldcorrespondanceaddress":"dfsdfdsf"
        };
        $scope.modAdmissionObj = angular.copy($scope.OrginalAdmissionObj);


        $scope.status = {
            isFirstOpen: true,
            isFirstDisabled: false,
        };


        $scope.currentAccordionState = 1;
        $scope.currentAccordion = function (index) {
            console.log(index, $scope.currentAccordionState);
            $scope.currentAccordionState = $scope.currentAccordionState === index ? !index : index;
        };
        activate();

        $scope.addAdmissionFormDetails = function (form) {
                $q.when([studentAdmissionFormService.addStudentAdmissionForm($scope.modAdmissionObj)]).then(function (data) {
                    $scope.modAdmissionObj.$setPristine();
                    //$scope.filteredSubjectData.push($scope.modSubjectObj);
                    //$scope.Modals.closeSubjectContainer();
                }, function (error) {

                });

        };


        function activate() { }

        $scope.resetForm = function () {
            $scope.student = angular.copy($scope.OrginalAdmissionObj);
        };
    };
})();