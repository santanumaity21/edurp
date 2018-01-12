(function () {
    'use strict';

    angular
        .module('app')
        .controller('studentadmissionformController', studentadmissionformController);

    studentadmissionformController.$inject = ['$scope','$q','ngAnimate', 'ui.bootstrap', '$modal'];

    function studentadmissionformController($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'studentadmissionformController';

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
