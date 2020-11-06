const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/countries', {useNewUrlParser: true}, {useUnifiedTopology: true})

let mongoURI = "";

if (process.env.NODE_ENV === "production") {
    mongoURI = process.env.DB_URL;
  } else {
    mongoURI = "mongodb://localhost/countries";
  }
  





module.exports = mongoose