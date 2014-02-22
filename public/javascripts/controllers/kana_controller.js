angular.module('app').
    controller('KanaCtrl', ['$scope', '$routeParams', 'kana',
        function ($scope, $routeParams, kana) {
            'use strict';

            var type = $routeParams.type;

            $scope.title = _.contains(['hiragana', 'katakana'], type) ? type : '';
            $scope.kana = kana;

            $scope.offset = 1;

            $scope.convert = function () {
                var offset = $scope.offset;

                _.each($scope.kana, function (v, k, list) {
                    list[k] = v + offset;
                });

                $scope.offset *= -1;
            };
        }]);