const waiterController = require("./controllers").waiter;
const path = require("path");

module.exports = router => {
  router.get("/api/", (req, res) => {
    res.status(200).json("API ROUTE");
  });

  router.get("/api/w/test", waiterController.test);
  router.post("/api/w", waiterController.create);
  router.delete("/api/w/:id", waiterController.destroy);

  router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/client/dist", "index.html"));
  });
};
