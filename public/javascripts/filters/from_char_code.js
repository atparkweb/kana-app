angular.module('app.filters')
    .filter('fromCharCode', function () {
        return function (input) {
            return String.fromCharCode(input);
        }
    });