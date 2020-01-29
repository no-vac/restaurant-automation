const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require("cors");
const morgan = require("morgan");

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
  app.use(cors());
  app.use(morgan("tiny"));

  //init passport
  // app.use(passport.initialize());

  // require("./config/passport")(passport)

  //connect to db

  router(app);
  startServer(app);
}

init();
