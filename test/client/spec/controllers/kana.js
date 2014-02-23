describe('Testing Kana Controller', function () {
    var $scope, $location, $rootScope, $controller, createController;

    beforeEach(module('kana'));

    beforeEach(inject(function ($injector) {
        $rootScope = $injector.get('$rootScope');
        $scope = $rootScope.$new();

        var $controller = $injector.get('$controller');

        createController = function () {
            return $controller('KanaCtrl', {
                '$scope': $scope
            });
        };
    }));

    it('should initially load a list of kana', function () {
        var controller = createController();
        $location.path('/kana/hiragana');

        expect($location.path()).toBe('/kana/hiragana');
        expect($scope.isActive('/kana/hiragana')).toBe(true);
        expect($scope.kana.length > 0);
    });
});