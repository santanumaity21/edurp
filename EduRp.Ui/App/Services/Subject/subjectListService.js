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
        var _addSubject = function (form) {
            return execute('addSubjects', 'post', form);

        };
        var _updateSubject = function (form) {
            return execute('updateSubject', 'put', form);

        };

        //var _deleteSubject = function (id) {
        //   debugger
        //    return execute('deleteSubject', 'delete', id);

        //};

        return {

            getSubjectList : _getSubjectList,
            addSubjects : _addSubject,
            updateSubject : _updateSubject,
            //deleteSubject : _deleteSubject

        };

    }

    //var deleteSubject = function (id) {
    //    var url = 'http://localhost:50381/api/Subjectmasters/Delete/' + id;
    //    return $http(
    //        {
    //            method: 'delete',
    //            data: id,
    //            url: url
    //        });

    //}
})();