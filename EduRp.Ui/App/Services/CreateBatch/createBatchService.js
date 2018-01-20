(function () {
    'use strict';

    angular
        .module('EduRpApp')
        .factory('createBatchService', createBatchService);

    createBatchService.$inject = ['$q', '$http', '$interpolate'];

    function createBatchService($q, $http, $interpolate) {

        var execute = function (url, method, data, ip) {
            var deferred = $q.defer();

            $http({

                url: $interpolate(urlService[url])(ip),
                method: method,
                dataType: 'json',
                headers: {
                    "Content-Type": "application/json"
                },
                data: data
            }

            ).then(function (data) {
                deferred.resolve(data.data);
            }, function (error) { deferred.reject(error); }
                );
            return deferred.promise;

        }

        var _getBatchList = function () {
            return execute('getBatchList', 'get', null);
        };
        var _getLinkedCoursesOfBatch = function (selPS) {
            return execute('getLinkedCoursesOfBatch', 'get', null, selPS);
        };
        var _getLinkedFeesOfBatch = function (selPS) {
            return execute('getLinkedFeesOfBatch', 'get', null, selPS);
        };

        var _addBatch = function (postData) {
            return execute('addBatch', 'post', postData);
        };

        var _removeSelectedCoursesFromBatch = function (postData) {
            return execute('removeSelectedCoursesFromBatch', 'post', postData);
        };
        var _removeSelectedFeesFromBatch = function (postData) {
            return execute('removeSelectedFeesFromBatch', 'post', postData);
        };
        var _getUnlinkedCoursesOfBatch = function () {
            return execute('getUnlinkedCoursesOfBatch', 'get', null);
        };

        var _getUnlinkedFeesOfBatch = function () {
            return execute('getUnlinkedFeesOfBatch', 'get', null);
        };
        var _assignUnlinkedCoursesToBatch = function (postData) {
            return execute('assignUnlinkedCoursesToBatch', 'post', postData);
        };
        var _assignUnlinkedFeesToBatch = function (postData) {
            return execute('assignUnlinkedFeesToBatch', 'post', postData);
        };

        return {
            getBatchList: _getBatchList,
            getLinkedCoursesOfBatch: _getLinkedCoursesOfBatch,
            getLinkedFeesOfBatch: _getLinkedFeesOfBatch,
            addBatch: _addBatch,
            getUnlinkedCoursesOfBatch: _getUnlinkedCoursesOfBatch,
            getUnlinkedFeesOfBatch: _getUnlinkedFeesOfBatch,
            removeSelectedCoursesFromBatch: _removeSelectedCoursesFromBatch,
            removeSelectedFeesFromBatch: _removeSelectedFeesFromBatch,
            assignUnlinkedCoursesToBatch: _assignUnlinkedCoursesToBatch,
            assignUnlinkedFeesToBatch: _assignUnlinkedFeesToBatch
        };

    }

})();