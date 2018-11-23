const passport = require('./passport').passport;
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');

exports.setup = (app) => {
  console.log('herererererer');
  app.use(passport.initialize());
  app.use(passport.session());

  app.use(cookieSession({
    name: 'session',
    keys: ['123']
  }));
  app.use(cookieParser());


  // app.get('/', (req, res) => {
  //   if (req.session.token) {
  //     console.log('session cookie set');
  //     res.cookie('token', req.session.token);
  //     res.json({
  //       status: 'session cookie set'
  //     });
  //   } else {
  //     console.log('session cookie not set');
  //     res.cookie('token', '');
  //     res.json({
  //       status: 'session cookie not set'
  //     });
  //   }
  // });

  app.get('/auth/google', passport.authenticate('google', {
    scope: [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email'
    ]
  }));

  app.get('/auth/google/callback',
    passport.authenticate('google', {
      failureRedirect: '/'
    }),
    (req, res) => {
      req.session.token = req.user.token;
      res.redirect('/');
    }
  );

  app.get('/logout', (req, res) => {
    req.logout();
    req.session = null;
    res.redirect('/');
  });
};
