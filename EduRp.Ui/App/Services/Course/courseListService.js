(function () {
    'use strict';

    angular
        .module('EduRpApp')
        .factory('courseListService', courseListService);

    courseListService.$inject = ['$q', '$http', '$interpolate'];

    function courseListService($q, $http, $interpolate) {

        var execute = function (url, method, data, ip) {
            var deferred = $q.defer();

            $http({
                url: $interpolate(urlService[url])(ip),
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
            return execute('deleteCourse', 'delete', postData, postData.CourseId);
        };
        return {
            getCourseList: _getCourseList,
            addCourse: _addCourse,
            updateCourse: _updateCourse,
            deleteCourse: _deleteCourse
           
        };

    }

})();