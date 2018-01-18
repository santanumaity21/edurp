(function () {
    'use strict';

    angular
        .module('EduRpApp')
        .factory('courseListService', courseListService);

    courseListService.$inject = ['$q', '$http', '$interpolate', '$cookieStore'];

    function courseListService($q, $http, $interpolate, $cookieStore) {
        var universityId = $cookieStore.get('unversityId');
        var userId = $cookieStore.get('userId');
        var tokenId = $cookieStore.get('tokenId');
        var mandatoryData = {universityId: universityId, userId:userId, tokenId:tokenId};
       
        var execute = function (url, method, data, ip) {
            var deferred = $q.defer();
            if (ip != null && ip.length) {
                angular.forEach(ip, function (v, k) {
                    mandatoryData[k] = v;
                });
            }
            $http({
                url: $interpolate(urlService[url])(mandatoryData),
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
        var _addCourse = function (postData) {
            return execute('addCourse', 'post', postData);
        };
        var _updateCourse = function (postData) {
            return execute('updateCourse', 'put', postData);
        };
        var _deleteCourse = function (postData) {
            return execute('deleteCourse', 'delete', postData, [{ id: postData.CourseId}]);
        };
        return {
            getCourseList: _getCourseList,
            addCourse: _addCourse,
            updateCourse: _updateCourse,
            deleteCourse: _deleteCourse
           
        };

    }

})();