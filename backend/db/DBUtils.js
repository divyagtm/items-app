const mongoose = require('mongoose');

const connectToDB = async () => {
  try {
    const uri = process.env.DB_URL;
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to the database');
  } catch (error) {
    console.error('Error connecting to the database:', error.message);
  }
};

module.exports = { connectToDB };
