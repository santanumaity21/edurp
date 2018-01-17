(function () {
    'use strict';

    angular
        .module('EduRpApp')
        .factory('subjectListService', subjectListService);

    subjectListService.$inject = ['$q', '$http', '$interpolate'];

    function subjectListService($q, $http, $interpolate) {

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

        var _getSubjectList = function () {
            return execute('getSubjectList', 'get', null);

        };
        var _addSubject = function (postData) {
            return execute('addSubject', 'post', postData);

        };
        var _updateSubject = function (postData) {
            return execute('updateSubject', 'put', postData);

        };

        var _deleteSubject = function (postData) {
            return execute('deleteSubject', 'delete', postData, postData.SubjectId);

        };

        return {

            getSubjectList : _getSubjectList,
            addSubject : _addSubject,
            updateSubject : _updateSubject,
            deleteSubject : _deleteSubject

        };

    }
})();