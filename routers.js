const waiterController = require("./controllers").waiter;
const wrap = require("./middleware/asyncWrapper");
const path = require("path");
const wrap = require("./middleware/handleAsync");

module.exports = router => {
  router.get(
    "/api/",
    wrap(async (req, res) => {
      res.status(200).json("API ROUTE");
    })
  );

  router.post("/api/w", wrap(waiterController.create));
  router.get("/api/w/test", wrap(waiterController.test));

  router.get(
    "*",
    wrap(async (req, res) => {
      res.sendFile(path.join(__dirname, "/client/dist", "index.html"));
    })
  );
};
