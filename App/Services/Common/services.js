(function () {
    'use strict';

    angular
        .module('EduRpApp')
        .factory('commonService', commonService);

    commonService.$inject = ['$resource', '$q', '$http'];

    function commonService($resource, $q, $http) {
        
        var _getFilteredOptions = function (data) {
            var deferred = $q.defer();

            
                
            deferred.resolve(result);
            deferred.reject(response);
            return deferred.promise;
        };

        return {
            getFilteredOptions: _getFilteredOptions
        };

    }

})();