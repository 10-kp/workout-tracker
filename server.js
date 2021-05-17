//Dependencies
const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');

//Port
const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

// Connect with MongoDB via mongoose on default port 27017
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/dbExample', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.use(require('./routes/apiRoutes'));
app.use(require('./routes/htmlRoutes'));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
