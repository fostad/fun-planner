// const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
const passport = require('passport');
const fetch = require('node-fetch');
const config = require('../config');

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});


passport.use(new GoogleStrategy({
  clientID: '362943760769-3bnkuf18n5q1sopi66pehg4hgqrbqn8i.apps.googleusercontent.com',//'362943760769-trcao1mimgkmcdncvjsi10vnblun3v3p.apps.googleusercontent.com',
  clientSecret: 'U8Ui8AJORrSLGFWp7btb2Tk-',//'byU19uCdFyTgUkmCF8b7sJim',
  callbackURL: 'http://localhost:8080/auth/google/callback',//'http://localhost:8080/login/callback'
} , (token, refreshToken, profile, done) => {
  console.log('profile', profile);
  let email = profile.emails[0].value;
  const user = {
    email: email,
    name: profile.displayName,
    givenname: profile.name.givenName,
    familyname: profile.name.familyName,
    image: profile.photos[0].value
  };
  console.log('logged in ', user);
  saveUser(user)
    .then(r => {
      console.log('saved user', r);
      done(null, {profile, token});
    })
    .catch(e => {
      console.log('error in saving user', e);
      done(null, {profile, token});
    });

}));

const saveUser = (user) => {
  return fetch(`${config.serviceUrl}/v1/users`, {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify(user)
  })
    .then(response => {
      return response.json();
    });
};

exports.passport = passport;
