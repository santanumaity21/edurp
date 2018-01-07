(function () {
    'use strict';

    angular
        .module('EduRpApp')
        .factory('programStudyService', programStudyService);

    programStudyService.$inject = ['$q', '$http'];

    function programStudyService($q, $http) {

        var execute = function (url, method, data) {
            var deferred = $q.defer();

            $http({

                url: urlService[url],
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

        var _getProgramStudyList = function () {
            return execute('getProgramStudyList', 'get', null);
        };

        var _addProgramStudy = function (postData) {
            return execute('addProgramStudy', 'post', postData);
        };


        return {
            getProgramStudyList: _getProgramStudyList,
            addProgramStudy: _addProgramStudy

        };

    }

})();