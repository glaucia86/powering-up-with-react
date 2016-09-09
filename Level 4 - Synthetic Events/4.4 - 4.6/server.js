var fs          = require('fs');
var path        = require('path');
var express     = require('express');
var bodyParser  = require('body-parser');
var app         = express();

app.set('port', (process.env.PORT || 8000));

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Alow-Origin', '*');
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

app.listen(app.get('port'), function() {
  console.log('Servicço iniciado em: http://localhost:' + app.get('port') + '/');
});