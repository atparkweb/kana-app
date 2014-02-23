
// Declare modules
angular.module('kana.services', []);
angular.module('kana.filters', []);

// Declare main module
var app = angular.module('kana', ['ngRoute', 'ngAnimate', 'kana.services', 'kana.filters']);

app.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        'use strict';

        $routeProvider.
            when('/kana/:type', {
                templateUrl: 'views/kana.html',
                controller: 'KanaCtrl'
            }).
            otherwise({
                redirectTo: '/kana/hiragana'
            });
    }]);