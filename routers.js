const waiterController = require("./controllers").waiter;
const path = require("path");

module.exports = router => {
  router.get("/api/", (req, res) => {
    res.status(200).json("API ROUTE");
  });

  router.post("/api/w", waiterController.create);
  router.get("/api/w/test", waterController.test);

  router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/client/dist", "index.html"));
  });
};
