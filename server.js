const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const CONFIG = require('./config/config');

const app = express();

const apiProfileRoutes = require('./routes/api/profile');

// Init Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('tiny'));

// Init Routes
app.use('/api/profile', apiProfileRoutes);

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set Static Folder
  app.use(express.static('client/build'));

  app.get('*', (req, res, next) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Init Server
const PORT = CONFIG.PORT;
const MONGODB_URI = CONFIG.MONGODB_URI;
mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true })
  .then(result => {
    console.log('MongoDB connected...');
    app.listen(PORT, () => {
      console.log(`Backend server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error(err);
  });
