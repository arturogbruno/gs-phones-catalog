require('dotenv').config();

const express      = require('express');
const favicon      = require('serve-favicon');
const path         = require('path');
const cors         = require('cors');

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

const whitelist = ['http://localhost:3000'];
const corsOptions = {
  origin: (origin, cb) => {
      const originWhitelisted = whitelist.includes(origin)
      cb(null, originWhitelisted)
  },
  credentials: true
}
app.use(cors(corsOptions));

app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

// default value for title local
app.locals.title = 'GS - Phones Catalog';

const index = require('./routes/index');
app.use('/', index);

module.exports = app;