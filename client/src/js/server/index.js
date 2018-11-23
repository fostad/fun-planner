const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const bodyParser = require('body-parser');
const express = require('express');
const httpProxy = require('http-proxy');
const config = require('../config');
const webpackConfig = require ('../../../webpack.config');
const login = require('./login');

const app = express();

const compiler = webpack(webpackConfig);

const devCompiler = webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {colors: true},
  noInfo: true
});


app.use(devCompiler);


const proxy = httpProxy.createProxyServer({ignorePath: true});
app.all('/api/*', (req, res) => {
  const url = req.url.replace('/api', config.serviceUrl);
  proxy.web(req, res, { target: url }, e => {
    res.status(503);
    if(e.code === 'ECONNREFUSED') {
      res.send('Could not reach the server');
    }
    res.end();
  });
});

app.disable('x-powered-by');

app.use(bodyParser.urlencoded({ extended: false }));
login.setup(app);
app.use(bodyParser.json());

app.use(bodyParser.json({limit: '10mb', type: 'application/json'}));

app.listen(8080, function () {
  console.log('Server running on port ' + 8080);
});
