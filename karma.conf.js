module.exports = function (config) {
    config.set({
        basePath: 'public',
        files: [
            'bower_components/angular/angular.min.js',
            'bower_components/angular-animate/angular-animate.min.js',
            'bower_components/angular-route/angular-route.min.js',
            'bower_components/lodash/dist/lodash.min.js',
            'javascripts/**/*.js'
        ]
    });
};