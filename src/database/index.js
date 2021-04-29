const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/noderest',
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
  });

module.exports = mongoose;
