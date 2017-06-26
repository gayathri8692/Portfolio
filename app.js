const express = require('express');
const app = express();
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');

//routes import
var index = require('./routes/index.js');
var projects = require('./routes/projects.js');
var contact = require('./routes/contact.js');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//for sass
app.use(require('node-sass-middleware')({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true,
  sourceMap: true
}));

//use routes
app.use('/', index);
app.use('/projects', projects);
app.use('/contact', contact);

//set up PORT
const port = process.env.PORT || 3000;
app.listen(port);
console.log(`App running on port ${port}...`);

module.exports = app;