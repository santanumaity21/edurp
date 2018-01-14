(function () {
    'use strict';

    angular
        .module('EduRpApp')
        .controller('studentadmissionformController', studentadmissionformController);

    studentadmissionformController.$inject = ['$scope','$q','$modal'];

    function studentadmissionformController($scope) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'studentadmissionformController';
        $scope.oneAtATime = true;

        $scope.status = {
            isFirstOpen: true,
            isFirstDisabled: false
        };
        activate();

        $scope.addAdmissionForm = function (form) {
            debugger
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
