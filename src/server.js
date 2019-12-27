const mongoose = require('mongoose');
const app = require('./app');

mongoose.connect(
  'mongodb+srv://leonardo:leonardo@cluster0-ejizs.mongodb.net/AirBnbClone?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.listen(3333);
