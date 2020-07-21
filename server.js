import express from 'express';
import mongoose from 'mongoose';
import passport from 'passport';
import config from './config/index.js';
import _passport from './config/passport.js';
import Express from './config/express.js';
import user from './models/user.js';

import routers from './routers/index.js';

const app = express();

mongoose.connect(config.db_url, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const port = 3000;
_passport(passport);
Express(app, passport);
routers(app, passport);
// respond with "hello world" when a GET request is made to the homepage

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
