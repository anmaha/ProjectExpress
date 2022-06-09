const express = require('express');
const path = require('path');
const appRouter = require("./appRoutes");
const app = express();
// Set EJS as templating engine 
app.set("view engine", "jsx");
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.json());
const bodyParser = require('body-parser')
app.use(bodyParser.json({limit: '16mb', extended: true}));     // Make sure you add these two lines
app.use(bodyParser.urlencoded({limit: '16mb', extended: true}));

app.use("/static", express.static(path.join(__dirname, "public")));

app.use("/MAAR", appRouter)
//app.get('/', (req, res) => {
  //  res.send([body]);
//});

  module.exports = app;