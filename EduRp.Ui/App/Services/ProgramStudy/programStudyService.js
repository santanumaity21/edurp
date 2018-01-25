﻿(function () {
    'use strict';

    angular
        .module('EduRpApp')
        .factory('programStudyService', programStudyService);

    programStudyService.$inject = ['$q', '$http', '$interpolate', 'commonService'];

    function programStudyService($q, $http, $interpolate, commonService) {

        var execute = function (url, method, data) {
            return commonService.executeAPICall(url, method, data);
        }

        var _getProgramStudyList = function () {
            return execute('getProgramStudyList', 'get', null);
        };
        var _getLinkedCoursesOfProgramStudy = function (selPS) {
            return execute('getLinkedCoursesOfProgramStudy', 'get', selPS);
        };
        var _getLinkedFeesOfProgramStudy = function (selPS) {
            return execute('getLinkedFeesOfProgramStudy', 'get', null, selPS);
        };

        var _addProgramStudy = function (postData) {
            return execute('addProgramStudy', 'post', postData);
        };

        var _removeSelectedCoursesFromProgramStudy = function (postData) {
            return execute('removeSelectedCoursesFromProgramStudy', 'post', postData);
        };
        var _removeSelectedFeesFromProgramStudy = function (postData) {
            return execute('removeSelectedFeesFromProgramStudy', 'post', postData);
        };
        var _getUnlinkedCoursesOfProgramStudy = function () {
            return execute('getUnlinkedCoursesOfProgramStudy', 'get', null);
        };

        var _getUnlinkedFeesOfProgramStudy = function () {
            return execute('getUnlinkedFeesOfProgramStudy', 'get', null);
        };
        var _assignUnlinkedCoursesToProgramStudy = function (postData) {
            return execute('assignUnlinkedCoursesToProgramStudy', 'post', postData);
        };
        var _assignUnlinkedFeesToProgramStudy = function (postData) {
            return execute('assignUnlinkedFeesToProgramStudy', 'post', postData);
        };

        return {
            getProgramStudyList: _getProgramStudyList,
            getLinkedCoursesOfProgramStudy: _getLinkedCoursesOfProgramStudy,
            getLinkedFeesOfProgramStudy: _getLinkedFeesOfProgramStudy,
            addProgramStudy: _addProgramStudy,
            getUnlinkedCoursesOfProgramStudy: _getUnlinkedCoursesOfProgramStudy,
            getUnlinkedFeesOfProgramStudy: _getUnlinkedFeesOfProgramStudy,
            removeSelectedCoursesFromProgramStudy: _removeSelectedCoursesFromProgramStudy,
            removeSelectedFeesFromProgramStudy: _removeSelectedFeesFromProgramStudy,
            assignUnlinkedCoursesToProgramStudy: _assignUnlinkedCoursesToProgramStudy,
            assignUnlinkedFeesToProgramStudy: _assignUnlinkedFeesToProgramStudy
        };

    }

})();