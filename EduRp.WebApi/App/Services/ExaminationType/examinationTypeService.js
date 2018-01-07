(function () {
    'use strict';

    angular
        .module('EduRpApp')
        .factory('examinationTypeService', examinationTypeService);

    examinationTypeService.$inject = ['$q', '$http'];

    function examinationTypeService($q, $http) {

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

        var _getexaminationTypeList = function () {
            return execute('getexaminationTypeList', 'get', null);


        };


        return {
            getExaminationTypeList: _getexaminationTypeList

        };

    }

})();