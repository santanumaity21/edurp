(function () {
    'use strict';

    angular
        .module('EduRpApp')
        .factory('classRoomListService', classRoomListService);

    classRoomListService.$inject = ['$q', '$http'];

    function classRoomListService($q, $http) {

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

        var _getclassRoomList = function () {
            return execute('getclassRoomList', 'get', null);


        };


        return {
            getClassRoomList: _getclassRoomList

        };

    }

})();