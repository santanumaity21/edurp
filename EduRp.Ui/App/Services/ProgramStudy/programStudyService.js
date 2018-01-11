(function () {
    'use strict';

    angular
        .module('EduRpApp')
        .factory('programStudyService', programStudyService);

    programStudyService.$inject = ['$q', '$http', '$interpolate'];

    function programStudyService($q, $http, $interpolate) {

        var execute = function (url, method, data, ip) {
            var deferred = $q.defer();

            $http({

                url: $interpolate(urlService[url])(ip),
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
        var _getLinkedCoursesOfProgramStudy = function (selPS) {
            return execute('getLinkedCoursesOfProgramStudy', 'get', null, selPS);
        };
        var _getLinkedFeesOfProgramStudy = function (selPS) {
            return execute('getLinkedFeesOfProgramStudy', 'get', null, selPS);
        };

        var _addProgramStudy = function (postData) {
            return execute('addProgramStudy', 'post', postData);
        };

        var _removeSelectedCourses = function (postData) {
            return execute('removeSelectedCourses', 'post', postData);
        };
        var _removeSelectedFees = function (postData) {
            return execute('removeSelectedFees', 'post', postData);
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
            removeSelectedCourses: _removeSelectedCourses,
            removeSelectedFees: _removeSelectedFees
        };

    }

})();