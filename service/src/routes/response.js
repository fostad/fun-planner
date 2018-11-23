const status = require('http-status');

const handleResult = (r, res) => {
  if(!r || r.length <= 0) {
    res.status(status.NOT_FOUND).end();
  } else {
    res.json(r);
  }
};

const handleError = (e, res) => {
  switch (e.type) {
  case 'invalidParams':
    res.status(status.BAD_REQUEST);
    break;
  default:
    res.status(status.INTERNAL_SERVER_ERROR);
  }
  res.send(e.message).end();
};

module.exports = {
  handleResult,
  handleError
};
