const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const dotenv = require('dotenv');
dotenv.config();

const app = express();

//Connect database
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));

//app.get('/', (req, res) => res.send('API RUNNING'))

//Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/presets', require('./routes/api/presets'));

//Serve static assets in production
if (process.env.NODE_ENV === 'PRODUCTION') {
  app.use(express.static('../client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(PORT));
