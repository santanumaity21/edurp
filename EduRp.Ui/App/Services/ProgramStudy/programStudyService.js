(function () {
    'use strict';

    angular
        .module('EduRpApp')
        .factory('programStudyService', programStudyService);

    programStudyService.$inject = ['$q', '$http'];

    function programStudyService($q, $http) {

        var execute = function (url, method, data) {
            var deferred = $q.defer();

            $http({

                url: urlService[url],
                method: method,
                dataType : 'json',
                headers: {
                    "Content-Type": "application/json"
                },
                data: data
            }

            ).then(function (data) {
                deferred.resolve(data.data);
            }, function (error) { deferred.reject(error); }
                );
            return deferred.promise;

        }

        var _getProgramStudyList = function () {
            return execute('getProgramStudyList', 'get', null);
        };
        var _getLinkedCoursesOfProgramStudy = function () {
            return execute('getLinkedCoursesOfProgramStudy', 'get', null);
        };
        var _getLinkedFeesOfProgramStudy = function () {
            return execute('getLinkedFeesOfProgramStudy', 'get', null);
        };

        var _addProgramStudy = function (postData) {
            return execute('addProgramStudy', 'post', postData);
        };

        var _removeSelectedCourses = function (postData) {
            return execute('removeSelectedCourses', 'post', postData);
        };

        var _getUnlinkedCoursesOfProgramStudy = function () {
            return execute('getUnlinkedCoursesOfProgramStudy', 'get', null);
        };

        var _getUnlinkedFeesOfProgramStudy = function () {
            return execute('getUnlinkedFeesOfProgramStudy', 'get', null);
        };

        return {
            getProgramStudyList: _getProgramStudyList,
            getLinkedCoursesOfProgramStudy: _getLinkedCoursesOfProgramStudy,
            getLinkedFeesOfProgramStudy: _getLinkedFeesOfProgramStudy,
            addProgramStudy: _addProgramStudy,
            getUnlinkedCoursesOfProgramStudy: _getUnlinkedCoursesOfProgramStudy,
            getUnlinkedFeesOfProgramStudy: _getUnlinkedFeesOfProgramStudy,
            removeSelectedCourses: _removeSelectedCourses

        };

    }

})();