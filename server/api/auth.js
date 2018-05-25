const router = require('express').Router();


const passport = require('passport')
const LinkedinStrategy = require('passport-linkedin-oauth2').Strategy;

require('dotenv').config();

var LINKEDIN_CLIENT_ID = process.env.clientId;
var LINKEDIN_CLIENT_SECRET = process.env.clientSecret;

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

// Use the LinkedinStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Linkedin
//   profile), and invoke a callback with a user object.
passport.use(new LinkedinStrategy({
  clientID:     LINKEDIN_CLIENT_ID,
  clientSecret: LINKEDIN_CLIENT_SECRET,
  callbackURL:  'http://127.0.0.1:1337/api/auth/linkedin/callback',
  scope:        [ 'r_basicprofile', 'r_emailaddress'],
  passReqToCallback: true
},
function(req, accessToken, refreshToken, profile, done) {
  // asynchronous verification, for effect...
  req.session.accessToken = accessToken;
  process.nextTick(function () {
    // To keep the example simple, the user's Linkedin profile is returned to
    // represent the logged-in user.  In a typical application, you would want
    // to associate the Linkedin account with a user record in your database,
    // and return that user instead.
      console.log('____________THIS IS PROFILE:', profile)
      return done(null, profile);
    });
  }
));

// .../api/auth
router.get('/', (req,res,next) => {
  console.log('HIT________________________________')
  res.json('HELLO')
})
router.get('/linkedin',
  passport.authenticate('linkedin', { state: 'SOME STATE' }),
  function(req, res){
    // The request will be redirected to Linkedin for authentication, so this
    // function will not be called.
  });

// GET /auth/linkedin/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
router.get('/linkedin/callback',
  passport.authenticate('linkedin', {
    successRedirect: '/',
    failureRedirect: '/login'
  })
);
  // ,
  // function(req, res) {
  //   res.redirect('/');
  // });

module.exports = router;