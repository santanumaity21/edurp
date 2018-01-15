(function () {
    'use strict';

    angular
        .module('EduRpApp')
        .controller('studentadmissionformController', studentadmissionformController);

    studentadmissionformController.$inject = ['$scope', '$q', '$modal'];

    function studentadmissionformController($scope) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'studentadmissionformController';
        $scope.oneAtATime = true;

        $scope.status = {
            isFirstOpen: true,
            isFirstDisabled: false
        };

        $scope.currentAccordionState = 1;
        $scope.currentAccordion = function (index) {
            console.log(index, $scope.currentAccordionState);
            $scope.currentAccordionState = $scope.currentAccordionState === index ? !index : index;
        };
        activate();

        $scope.addAdmissionForm = function (form) {
            if (form.$valid) {
                //$q.when([subjectListService.addAdmissionForm($scope.modSubjectObj)]).then(function (data) {
                //    $scope.filteredSubjectData.push($scope.modSubjectObj);
                //    $scope.Modals.closeSubjectContainer();
                //}, function (error) {

                //});

            }

        };

        function activate() { }


    }
})();