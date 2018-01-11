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

        var _removeItemFromArray = function (arr, _name) {
            var index = arr.indexOf(_name);
            arr.splice(index, 1);
            return arr;
        };

        return {
            getFilteredOptions: _getFilteredOptions,
            removeItemFromArray: _removeItemFromArray
        };

    }

})();