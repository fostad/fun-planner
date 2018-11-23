const user = require('../db/user');
const { handleResult, handleError } = require('./response');

module.exports = app => {
  app.get('/v1/users', (req, res) => {

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
