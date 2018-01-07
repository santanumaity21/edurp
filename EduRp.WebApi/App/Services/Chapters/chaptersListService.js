(function () {
    'use strict';

    angular
        .module('EduRpApp')
        .factory('chaptersListService', chaptersListService);

    chaptersListService.$inject = ['$q', '$http'];

    function chaptersListService($q, $http) {

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

        var _getChaptersList = function () {
            return execute('getChaptersList', 'get', null);


        };


        return {
            getChaptersList: _getChaptersList

        };

    }

})();