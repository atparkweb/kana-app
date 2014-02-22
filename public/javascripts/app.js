
// Declare modules
angular.module('app.services', []);
angular.module('app.filters', []);

// Declare main module
var app = angular.module('app', ['ngRoute', 'ngAnimate', 'app.services', 'app.filters']);

app.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        'use strict';

        $routeProvider.
            when('/kana/:type', {
                templateUrl: 'views/kana.html',
                controller: 'KanaCtrl',
                resolve: {
                    kana: function (kanaList) {
                        return kanaList();
                    }
                }
            }).
            otherwise({
                redirectTo: '/kana/hiragana'
            });
    }]);