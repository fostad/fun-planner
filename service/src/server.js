const express = require('express');
const bodyParser = require('body-parser');

module.exports = (port) => {
  const app = express();

  app.disable('x-powered-by');

  app.use(bodyParser.json({limit: '10mb', type: 'application/json'}));
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use((req, res, next) => {
    console.log(`HTTP ${req.method} ${req.url}`);

    next();
  });

  require('./routes/user')(app);

  app.listen(port, function () {
    console.log('Server running on port ' + port);
  });

};
