//Dependencies
const express = require('express');

//middleware - logs all request details
const logger = require('morgan');
const mongoose = require('mongoose');

//Port & heroku
const PORT = process.env.PORT || 3000;

//Assigning app to express function
const app = express();

//Middleware that parses json objects and body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Uses the public folder
app.use(express.static('public'));

// Connect with MongoDB via mongoose. If not, to default port 27017
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

// Routes
app.use(require('./routes/apiRoutes'));
app.use(require('./routes/htmlRoutes'));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
