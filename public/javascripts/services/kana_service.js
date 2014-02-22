angular.module('app.services').
    factory('kanaList', ['$http', '$q', '$route',
        function ($http, $q, $route) {
            return function () {
                var delay = $q.defer(),
                    type = $route.current.params.type;

                if (_.contains(['hiragana', 'katakana'], type)) {
                    $http({
                        method: 'GET',
                        url: 'http://localhost:3000/api/' + type
                    }).
                        success(function (data, status, headers, config) {
                            delay.resolve(data);
                        }).
                        error(function (data, status, headers, config) {
                            delay.reject('Unable to fetch data');
                        });
                }

                return delay.promise;
            };
        }]);