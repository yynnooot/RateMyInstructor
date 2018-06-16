require('dotenv').config();
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const mongoose = require('mongoose');
const graphqlHTTP = require('express-graphql');
const { makeExecutableSchema } = require('graphql-tools');

const app = express();


mongoose.connect(process.env.M_URI);
const db = mongoose.connection;

// check connection
db.once('open', () => {
  console.log('Connected to MongoDB');
});
// check for db errors
db.on('error', (error) => {
  console.log(error);
});

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../public')));

const { userSchema } = require('./graphql');

app.use('/graphql', cors(), graphqlHTTP({
  schema: userSchema,
  rootValue: global,
  graphiql: true,
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
  secret: 'hotsauce',
  resave: false,
  saveUnitialized: false,
}));
// session object on every HTTP request
app.use((req, res, next) => {
  // console.log('session', req.session);
  next();
});

app.use(passport.initialize());
app.use(passport.session());

app.use('/api', require('./api')); // matches all requests to /api

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your server, listening on port ${port}`);
});
