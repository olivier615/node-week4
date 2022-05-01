const createError = require('http-errors')
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var postsRouter = require('./routes/posts');

var app = express();
require('./connection/connection.js')
const cors = require('cors')

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api/posts', postsRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

app.use((err, req, res, next) => {
	const errorMessage = err.message;
	res.status(500).send({
		status: 'false',
		message: errorMessage
	});
});

module.exports = app;
