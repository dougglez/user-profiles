var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var cors = require('cors');

var config = require('./config.json');

var users = require('./controllers/userCtrl');
var profile = require('./controllers/profileCtrl');

var app = express();

var corsOptions = {
  origin: 'http://localhost:config.port'
};

app.use(express.static(_dirname + '/public'));

app.use(bodyParser.json());

app.use(cors(corsOptions));

app.use(session({
  secret: config.sessionSecret,
  saveUninitialized: true,
  resave: true
}));




app.post('/api/login', users.login);

app.get('/api/profiles', profile.getFriends);





app.listen(config.port, function(){
  console.log('listening on', config.port);
});
