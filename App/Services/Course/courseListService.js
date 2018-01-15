(function () {
    'use strict';

    angular
        .module('EduRpApp')
        .factory('courseListService', courseListService);

    courseListService.$inject = ['$q', '$http'];

    function courseListService($q, $http) {

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

        var _getCourseList = function () {
            return execute('getCourseList', 'get', null);
            

        };

       

        return {
            getCourseList: _getCourseList
           
        };

    }

})();