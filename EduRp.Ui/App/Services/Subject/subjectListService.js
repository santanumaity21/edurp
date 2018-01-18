(function () {
    'use strict';

    angular
        .module('EduRpApp')
        .factory('subjectListService', subjectListService);

    subjectListService.$inject = ['$q', '$http', '$interpolate', '$cookieStore'];

    function subjectListService($q, $http, $interpolate, $cookieStore) {
        var universityId = $cookieStore.get('unversityId');
        var userId = $cookieStore.get('userId');
        var tokenId = $cookieStore.get('tokenId');
        var mandatoryData = { universityId: universityId, userId: userId, tokenId: tokenId };
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
            return execute('deleteSubject', 'delete', postData, [{ SubjectId: postData.SubjectId }]);

        };

        return {

            getSubjectList : _getSubjectList,
            addSubject : _addSubject,
            updateSubject : _updateSubject,
            deleteSubject : _deleteSubject

        };

    }
})();