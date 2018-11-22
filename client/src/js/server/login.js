const passport = require('./passport').passport;
const path = require('path');

const isLoggedIn = (req, res, next) => {
  console.log('_________________________________________________________');
  console.log('isLoggedIn isAuthenticated='+req.isAuthenticated());
  if (req.isAuthenticated()) {
    console.log('Authenticated');
    console.log(req.path);
    next();
  }  else if (!req.isAuthenticated() && req.path.indexOf('/login')===0) {
    console.log('Not authenticated, but on the right path');
    console.log(req.path);
    next();
  } else if (!req.isAuthenticated() && req.xhr) {
    console.log('Not authenticated, is xhr');
    // don't redirect if the request comes from js instead of browser
    res.status(401).send();
  } else {
    console.log('Not authenticated, on the wrong path, lets redirect');
    console.log(req.path);
    // res.status(200).send();
    res.redirect('/login');
  }
};

exports.setup = (app) => {
  console.log('herererererer');
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(isLoggedIn);

  app.get('/login', passport.authenticate('google', { scope: ['profile', 'email'] }));

  app.get('/failed', (req, res) => {
    console.log('got failure to login');
  });

  app.get('/login/callback', passport.authenticate('google', {
    failureRedirect: '/failed', successRedirect: '/'
  }), (err, req, res, next) => { // custom error handler to catch any errors, such as TokenError
    console.log('faillllll', err);

    if (err.name === 'TokenError') {
      res.redirect('/failed'); // redirect them back to the login page
    } else {
      res.redirect('/');
    }
  },
  (req, res) => { // On success, redirect back to '/'
    console.log('successsssss', req);
    res.redirect('/');
  });
};
