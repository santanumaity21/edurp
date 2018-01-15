(function () {
    'use strict';

    angular
        .module('EduRpApp')
        .factory('createBatchService', createBatchService);

    createBatchService.$inject = ['$q', '$http'];

    function createBatchService($q, $http) {

        var execute = function (url, method, data) {
            var deferred = $q.defer();

            $http({

                url: urlService[url],
                method: method,
                dataType : 'json',
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
        var _getLinkedCoursesOfBatch = function () {
            return execute('getLinkedCoursesOfBatch', 'get', null);
        };
        var _getLinkedFeesOfBatch = function () {
            return execute('getLinkedFeesOfBatch', 'get', null);
        };

        var _addBatch = function (postData) {
            return execute('addBatch', 'post', postData);
        };

        var _getUnlinkedCoursesOfBatch = function () {
            return execute('getUnlinkedCoursesOfBatch', 'get', null);
        };

        var _getUnlinkedFeesOfBatch = function () {
            return execute('getUnlinkedFeesOfBatch', 'get', null);
        };

        return {
            getBatchList: _getBatchList,
            getLinkedCoursesOfBatch: _getLinkedCoursesOfBatch,
            getLinkedFeesOfBatch: _getLinkedFeesOfBatch,
            addBatch: _addBatch,
            getUnlinkedCoursesOfBatch: _getUnlinkedCoursesOfBatch,
            getUnlinkedFeesOfBatch: _getUnlinkedFeesOfBatch

        };

    }

})();