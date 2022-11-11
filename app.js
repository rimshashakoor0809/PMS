const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');

const educationRouter = require('./Route/educationRoute');
const blogRouter = require('./Route/blogRoute');
const teachingRouter = require('./Route/teachingRoute');
const experienceRouter = require('./Route/ExperienceRoute');


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
app.use('/portfolio/api/v1/teaching', teachingRouter);
app.use('/portfolio/api/v1/experience', experienceRouter);

module.exports = app;
