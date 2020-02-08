const waiterController = require("./controllers").waiter;
const tableController = require("./controllers").table;

const path = require("path");

module.exports = router => {
  router.get("/api/", (req, res) => {
    res.status(200).json("API ROUTE");
  });

  router.get("/api/w/test", waiterController.test);
  router.post("/api/w", waiterController.create);
  router.delete("/api/deleteWaiter/", waiterController.destroy);
  router.get("/api/w", waiterController.list);

  router.post("/api/t/:waiterId/table", tableController.create);

  router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/client/dist", "index.html"));
  });
};
