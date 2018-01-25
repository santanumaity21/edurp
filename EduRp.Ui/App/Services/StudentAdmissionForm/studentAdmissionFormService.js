(function () {
    'use strict';

    angular
        .module('EduRpApp')
        .factory('studentAdmissionFormService', studentAdmissionFormService);

    studentAdmissionFormService.$inject = ['$q', '$http', 'commonService'];

        function studentAdmissionFormService($q, $http, commonService) {
            var execute = function (url, method, data) {
                return commonService.executeAPICall(url, method, data);
            };

            var _getAdmissionList = function () {
                return execute('getAdmissionList','get', null);
            };

            var _addStudentAdmissionForm = function (postData) {
                debugger;
                return execute('addStudentAdmissionForm', 'post', postData);

            };

            //function getData() { }

            return {

                getAdmissionList : _getAdmissionList,
                addStudentAdmissionForm : _addStudentAdmissionForm

            };
        }
})();



