const mongoose = require('mongoose');

//needs DB name
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/still-good-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true,
  // useFindAndModify: false
});

module.exports = mongoose.connection;
