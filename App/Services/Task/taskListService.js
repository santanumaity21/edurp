(function () {
    'use strict';

    angular
        .module('EduRpApp')
        .factory('taskListService', taskListService);

    taskListService.$inject = ['$q', '$http'];

    function taskListService($q, $http) {

        var execute = function (url, method, data) {
            var deferred = $q.defer();

            $http({

                url: urlService[url],
                method: method,
                data: data,
                headers: {
                    "Content-Type": "application/json"
                },
                dataType: 'json'
            }

            ).then(function (data) {
                deferred.resolve(data.data);
            }, function (error) { deferred.reject(error); }


                );
            return deferred.promise;

        }

        var _getTaskList = function () {
            return execute('getTaskList', 'get', null);


        };


        return {
            getTaskList: _getTaskList

        };

    }

})();