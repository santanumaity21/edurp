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
<<<<<<< HEAD:EduRp.WebApi/App/Services/Subject/subjectListService.js
        };
        var _addSubject = function (postData) {
            return execute('addSubject', 'post', postData);
=======

        };
        var _addSubject = function (form) {
            debugger
            return execute('addSubjects', 'post', form);

        };
        var _updateSubject = function (form) {
            debugger
            return execute('updateSubject', 'put', form);

>>>>>>> orgin/Vipin_NewEduRp:App/Services/Subject/subjectListService.js
        };

        //var _deleteSubject = function (id) {
        //   debugger
        //    return execute('deleteSubject', 'delete', id);

        //};

        return {
<<<<<<< HEAD:EduRp.WebApi/App/Services/Subject/subjectListService.js
            getSubjectList: _getSubjectList,
            addSubject: _addSubject
=======

            getSubjectList : _getSubjectList,
            addSubjects : _addSubject,
            updateSubject : _updateSubject,
            //deleteSubject : _deleteSubject

>>>>>>> orgin/Vipin_NewEduRp:App/Services/Subject/subjectListService.js
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