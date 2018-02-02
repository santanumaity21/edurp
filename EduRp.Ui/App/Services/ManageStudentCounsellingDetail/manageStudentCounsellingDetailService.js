(function () {
    'use strict';

    angular
        .module('EduRpApp')
        .factory('manageStudentCounsellingDetailService', manageStudentCounsellingDetailService);

    manageStudentCounsellingDetailService.$inject = ['$q', '$http', 'commonService'];

    function manageStudentCounsellingDetailService($q, $http, commonService) {

        var execute = function (url, method, data) {
            return commonService.executeAPICall(url, method, data);
        };

        var _getStdCounsellingDetail = function () {
            return execute('getStdCounsellingDetail','get', null);

        };

        return {
            getStdCounsellingDetail: _getStdCounsellingDetail,
        };

    }
})();