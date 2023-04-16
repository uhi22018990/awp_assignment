const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

var corsOptions = {
  origin: "http://localhost:5000"
};

/* mongodb connection */
console.log("Connecting mongodb....");
mongoose.connect('mongodb://127.0.0.1:27017/answers')
  .then(() => {
    console.log("ok");
  })
  .catch((err) => {
    console.log('error: ' + err)
  });
console.log("mongodb readyState....");
console.log(mongoose.connection.readyState);

/* mongoose model */
var answers = mongoose.model(
  'answers',
  new mongoose.Schema({any: {}}, {strict: false})
  );


app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// simple route
app.get("/", (req, res) => {
  res.json({message: "Welcome to the app"});
});

/* API answers route */
app.get("/answers/:urltitle", (req, res) => {
  answers.findOne({urltitle: req.params.urltitle})
    .then((result) => {
      res.json({
        success: true,
        data: result
      })
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    })
});

// set port, listen for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
