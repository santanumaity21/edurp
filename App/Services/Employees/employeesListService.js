(function () {
    'use strict';

    angular
        .module('EduRpApp')
        .factory('employeesListService', employeesListService);

    employeesListService.$inject = ['$q', '$http'];

    function employeesListService($q, $http) {

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

        var _getEmployeesList = function () {
            return execute('getEmployeesList', 'get', null);


        };


        return {
            getEmployeesList: _getemployeesList

        };

    }

})();