(function () {
    'use strict';

    angular
        .module('EduRpApp')
        .factory('subjectListService', subjectListService);

    subjectListService.$inject = ['$q', '$http'];

    function subjectListService($q, $http) {

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

        var _getSubjectList = function () {
            return execute('getSubjectList', 'get', null);

        };

        var _addSubject = function (subdata) {
            debugger
            return execute('addSubjects', 'post', subdata);

        };

        var _updateSubject = function (subdata) {
            debugger
            return execute('updateSubject', 'put', subdata);

        };

        var _deleteSubject = function (subdata) {
           debugger
           return execute('deleteSubject', 'delete', subdata);

        };

        return {

            getSubjectList : _getSubjectList,
            addSubjects : _addSubject,
            updateSubject : _updateSubject,
            deleteSubject : _deleteSubject

        };

    }

})();