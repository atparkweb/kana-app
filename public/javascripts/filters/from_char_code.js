angular.module('kana.filters')
    .filter('fromCharCode', function () {
        return function (input) {
            return String.fromCharCode(input);
        };
    });