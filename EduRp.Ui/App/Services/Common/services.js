(function () {
    'use strict';

    angular
        .module('EduRpApp')
        .factory('commonService', commonService);

    commonService.$inject = ['$resource', '$q', '$http', '$cookieStore', '$interpolate'];

    function commonService($resource, $q, $http, $cookieStore, $interpolate) {
        
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
        var _fetchMainCookieData = function () {
            var UniversityId = $cookieStore.get('UniversityId');
            var UserId = $cookieStore.get('UserId');
            var TokenId = $cookieStore.get('TokenId');
            return { UniversityId: UniversityId, UserId: UserId, TokenId: TokenId };
        };
        var _processAllParamsVal = function (url, method, data) {
            
            if (url === 'getLinkedCoursesOfProgramStudy') {
                var cd = this.fetchMainCookieData();
                cd.PsId = data.ProgramStudyId;
                return cd;
            } else {
                return this.fetchMainCookieData();
            }
            
        };

        var _executeAPICall = function (url, method, data) {
            var deferred = $q.defer();
            var manDatoryCookies = this.processAllParamsVal(url, method, data);
            var apiURL = (method === 'get') ? $interpolate(urlService[url])(manDatoryCookies) : urlService[url];
            var finalData = null;
            if (method !== 'get') {
                finalData = this.fetchMainCookieData();
                angular.forEach(data, function (v, k) {
                    finalData[k] = v;
                });
            } 
            console.log(finalData);
           $http({
                url: apiURL,
                method: method,
                data: finalData,
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
        };
        return {
            getFilteredOptions: _getFilteredOptions,
            removeItemFromArray: _removeItemFromArray,
            fetchMainCookieData: _fetchMainCookieData,
            executeAPICall: _executeAPICall,
            processAllParamsVal: _processAllParamsVal
        };

    }

})();