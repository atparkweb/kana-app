var express = require('express'),
    http = require('http'),
    path = require('path');

var routes = require('./routes');

var app = express();

app.configure(function () {
    app.set('port', process.env.PORT || 3000);
    app.use(express.favicon());
    app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function () {
    app.use(express.errorHandler());
});

app.get('/api/hiragana', routes.hiragana);
app.get('/api/katakana', routes.katakana);

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});