const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");

//pull in envs
require("dotenv").config();

//routes
const router = require("./routers");

function startServer(server) {
  const { PORT } = process.env;

  server.listen(PORT || 5000, () => {
    console.log(`Server is live on port ${PORT}`);
  });
}

async function init() {
  //grab db from env

  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));

  app.use(cors());
  app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  app.use(morgan("tiny"));

  app.use(express.static(path.join(__dirname, "/client/dist")));

  //init passport
  // app.use(passport.initialize());

  // require("./config/passport")(passport)

  //connect to db

  router(app);
  startServer(app);

  //handle unhandled rejections
  // process.on("unhandledRejection", (err, promise) => {
  //   console.log(`Error: ${err.message}`);
  //   //close server and exit process
  //   server.close(() => process.exit(1));
  // });
}

init();
