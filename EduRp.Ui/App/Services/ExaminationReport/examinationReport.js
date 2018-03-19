﻿(function () {
    'use strict';

    angular
        .module('EduRpApp')
        .factory('examinationReport', examinationReport);

    examinationReport.$inject = ['$q', '$http', 'commonService'];

    function examinationReport($q, $http, commonService) {
        var execute = function (url, method, data) {
            return commonService.executeAPICall(url, method, data);
        };

        var _getExaminationReport = function () {
            return execute('getExaminationReport', 'get', null);

        };
        var _addExaminationReport = function (postData) {
            return execute('addExaminationReport', 'post', postData);

        };
        var _updateExaminationReport = function (postData) {
            return execute('updateExaminationReport', 'put', postData);

        };

        var _deleteExaminationReport = function (postData) {
            return execute('deleteExaminationReport', 'delete', postData);

        };

        var _erGridInfoBeforeUpdating = function () {
            return execute('erGridInfoBeforeUpdating', 'get', null);

        };
        var _getBatch = function () {
            return execute('getBatch', 'get', null);

        };
        var _getExamGroup = function () {
            return execute('getExamGroup', 'get', null);

        };
        var _getGrade = function () {
            return execute('getGrade', 'get', null);

        };
        

        return {
            getBatch: _getBatch,
            getExamGroup: _getExamGroup,
            getGrade: _getGrade,
            getExaminationReport: _getExaminationReport,
            addExaminationReport: _addExaminationReport,
            updateExaminationReport: _updateExaminationReport,
            deleteExaminationReport: _deleteExaminationReport,
            erGridInfoBeforeUpdating: _erGridInfoBeforeUpdating

        };

    }
})();