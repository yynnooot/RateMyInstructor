const router = require('express').Router();

const passport = require('passport')
const LinkedinStrategy = require('passport-linkedin-oauth2').Strategy;

const { User } = require('../models');

require('dotenv').config();

const LINKEDIN_CLIENT_ID = process.env.clientId;
const LINKEDIN_CLIENT_SECRET = process.env.clientSecret;
const CALLBACK_URL = process.env.callbackURL;

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id).then((user)=> {
    done(null, user);
  })
});

// Use the LinkedinStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Linkedin
//   profile), and invoke a callback with a user object.
passport.use(new LinkedinStrategy({
  clientID:     LINKEDIN_CLIENT_ID,
  clientSecret: LINKEDIN_CLIENT_SECRET,
  callbackURL:  CALLBACK_URL,
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
      const { formattedName, emailAddress, id, publicProfileUrl } = profile._json
      const props = {
        name: formattedName,
        email: emailAddress,
        linkedinId: id,
        linkedinUrl: publicProfileUrl
      }
      User.findOrCreate(props)
        .then(user => {
          //console.log('this is userID))))))))):',user.id)
          // req.session.userId = user.id
          // req.session.save();
          console.log('______USER:', user)
          return done(null, user);
        })
        .catch(done)
      
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
//   request.  If authentickation fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
router.get('/linkedin/callback',
  passport.authenticate('linkedin', {
    successRedirect: '/',
    failureRedirect: '/'
  })
);

router.post('/logout', (req, res) => {
  req.logout()
  console.log('************req.user', req.user)
  res.redirect('/')
})

module.exports = router;