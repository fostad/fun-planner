const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require ('../../../webpack.config');
const express = require('express');
const login = require('./login');
const bodyParser = require('body-parser');

const app = express();

const compiler = webpack(webpackConfig);

const devCompiler = webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {colors: true},
  noInfo: true
});


app.use(devCompiler);

app.disable('x-powered-by');

app.use(bodyParser.urlencoded({ extended: false }));
// login.setup(app);
app.use(bodyParser.json());

app.use(bodyParser.json({limit: '10mb', type: 'application/json'}));

app.listen(8080, function () {
  console.log('Server running on port ' + 8080);
});
