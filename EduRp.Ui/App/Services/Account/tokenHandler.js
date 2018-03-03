﻿(function () {
    'use strict';

    angular
        .module('EduRpApp')
        .factory('tokenHandler', tokenHandler);

    tokenHandler.inject = ['storageHandler','$window'];

    function tokenHandler(storageHandler, $window) {
        var loginTokenId = 'kiks-app-loginToken-2015';
        var nameTokenId = 'kiks-app-loginName-2015';
        var redirectUrl = null;

        return {
            setLoginToken: function (token) {
                storageHandler.setItem(loginTokenId, token);

            },
            getLoginToken: function () {
                return sessionStorage.accessToken;

            },
            removeLoginToken: function () {
                storageHandler.removeItem(loginTokenId);
            },
            hasLoginToken: function () {
                return this.getLoginToken() != null;
            },
            setRedirectUrl: function (url) {
                redirectUrl = url;
            },
            getRedirectUrl: function () {
                return redirectUrl;
            },
            setLoginName: function (name) {
                storageHandler.setItem(nameTokenId, name);
            },
            getLoginName: function () {
                return storageHandler.getItem(nameTokenId);
            }
        }

    }

}());