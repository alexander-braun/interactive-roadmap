const mongoose = require('mongoose');
//const config = require('config');
//const db = config.get('mongoURI');

const dotenv = require('dotenv');

if (process.env.NODE_ENV === 'DEVELOPMENT') {
  dotenv.config({ path: './config/config.env' });
}

const db = process.env.mongoURI;

console.log(db);

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log('MONGODB CONNECTED :)');
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
