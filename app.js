const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');

const educationRouter = require('./Route/educationRoute');
const blogRouter = require('./Route/blogRoute');

dotenv.config({ path: './config.env' });

const app = express();

//middleware for parsing body
app.use(express.json());

// Third-Party Middleware
// HTTP request logger
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}


app.use('/portfolio/api/v1/education', educationRouter);
app.use('/portfolio/api/v1/', blogRouter);


module.exports = app;
