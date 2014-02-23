angular.module('kana').
    controller('KanaCtrl', ['$scope', '$routeParams', 'kanaService',
        function ($scope, $routeParams, kanaService) {
            'use strict';

            var type = $routeParams.type.toLowerCase();

            $scope.title = _.contains(['hiragana', 'katakana'], type) ? type : '';

            switch (type) {
            case 'hiragana':
                $scope.kana = kanaService.getHiragana();
                break;
            case 'katakana':
                $scope.kana = kanaService.getKatakana();
                break;
            default:
                $scope.kana = [];
            }
        }]);
