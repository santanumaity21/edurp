﻿(function () {
    'use strict';

    angular
        .module('EduRpApp')
        .factory('createBatchService', createBatchService);

    createBatchService.$inject = ['$q', '$http', '$interpolate', 'commonService'];

    function createBatchService($q, $http, $interpolate, commonService) {

        var execute = function (url, method, data) {
            return commonService.executeAPICall(url, method, data);
        };

        var _getBatchList = function () {
            return execute('getBatchList', 'get', null);
        };
        var _getLinkedProgramStudyOfBatch = function (selPS) {
            return execute('getLinkedProgramStudyOfBatch', 'get', selPS);
        };
        var _getLinkedFeesOfBatch = function (selPS) {
            return execute('getLinkedFeesOfBatch', 'get', selPS);
        };

        var _addBatch = function (postData) {
            return execute('addBatch', 'post', postData);
        };

        var _removeSelectedProgramStudyFromBatch = function (postData) {
            return execute('removeSelectedProgramStudyFromBatch', 'post', postData);
        };
        var _removeSelectedFeesFromBatch = function (postData) {
            return execute('removeSelectedFeesFromBatch', 'post', postData);
        };
        var _getUnlinkedProgramStudyOfBatch = function () {
            return execute('getUnlinkedProgramStudyOfBatch', 'get', null);
        };

        var _getUnlinkedFeesOfBatch = function () {
            return execute('getUnlinkedFeesOfBatch', 'get', null);
        };
        var _assignUnlinkedProgramStudyToBatch = function (postData) {
            return execute('assignUnlinkedProgramStudyToBatch', 'post', postData);
        };
        var _assignUnlinkedFeesToBatch = function (postData) {
            return execute('assignUnlinkedFeesToBatch', 'post', postData);
        };

        return {
            getBatchList: _getBatchList,
            getLinkedProgramStudyOfBatch: _getLinkedProgramStudyOfBatch,
            getLinkedFeesOfBatch: _getLinkedFeesOfBatch,
            addBatch: _addBatch,
            getUnlinkedProgramStudyOfBatch: _getUnlinkedProgramStudyOfBatch,
            getUnlinkedFeesOfBatch: _getUnlinkedFeesOfBatch,
            removeSelectedProgramStudyFromBatch: _removeSelectedProgramStudyFromBatch,
            removeSelectedFeesFromBatch: _removeSelectedFeesFromBatch,
            assignUnlinkedProgramStudyToBatch: _assignUnlinkedProgramStudyToBatch,
            assignUnlinkedFeesToBatch: _assignUnlinkedFeesToBatch
        };

    }

})();