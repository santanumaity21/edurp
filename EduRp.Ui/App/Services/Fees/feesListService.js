(function () {
    'use strict';

    angular
        .module('EduRpApp')
        .factory('feesListService', feesListService);

    feesListService.$inject = ['$q', '$http'];

    function feesListService($q, $http) {

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

        var _getFeesList = function () {
            return execute('getFeesList', 'get', null);


        };


        return {
            getFeesList: _getFeesList

        };

    }

})();