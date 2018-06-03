const express = require('express');
const app = express();
const path = require('path')
const morgan = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');

require('dotenv').config();
const mongoose = require('mongoose')

mongoose.connect(process.env.M_URI);
let db = mongoose.connection;

//check connection
db.once('open', function(){
  console.log('Connected to MongoDB')
})
//check for db errors 
db.on('error', function(error){
  console.log(error)
})

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
  secret: 'hotsauce',
  resave: false,
  saveUnitialized: false
}))
// session object on every HTTP request
app.use(function (req, res, next) {
  //console.log('session', req.session);
  next();
});

app.use(passport.initialize());
app.use(passport.session());

app.use('/api', require('./api')); // matches all requests to /api

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log(`Your server, listening on port ${port}`);
});
