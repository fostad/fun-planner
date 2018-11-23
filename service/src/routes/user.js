const user = require('../db/user');
const { handleResult, handleError } = require('./response');

module.exports = app => {
  app.get('/v1/users/:email', (req, res) => {
    Promise.resolve()
      .then(() => {
        if(!req.params || !req.params.email) {
          const e = new Error('Email is missing');
          e.type = 'invalidParams';
        }
        return user.getUserByEmail(req.params.email);
      })
      .then(r => {
        console.log('r', r);
        handleResult(r, res);
      })
      .catch(e => {
        console.log(e);
        handleError(e, res);
      });
  });

  app.post('/v1/users', (req, res) => {
    console.log('req.body', req.body);
    user.saveUser(req.body)
      .then(r => {
        console.log('r', r);
        handleResult(r, res);
      })
      .catch(e => {
        console.log(e);
        handleError(e, res);
      });
  });
};
