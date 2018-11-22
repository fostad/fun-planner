const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const passport = require('passport');

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});


passport.use(new GoogleStrategy({
  clientID: '362943760769-trcao1mimgkmcdncvjsi10vnblun3v3p.apps.googleusercontent.com',
  clientSecret: 'byU19uCdFyTgUkmCF8b7sJim',
  callbackURL: 'http://localhost:8080/login/callback'
} , (token, refreshToken, profile, done) => {
  let email = profile.emails[0].value;
  const user = {
    email: email,
    name: profile.displayName,
    givenname: profile.name.givenName,
    surname: profile.name.familyName,
    image: profile.photos[0].value
  };
  console.log('logged in ', user);
  done(null, user);
}));

exports.passport = passport;
