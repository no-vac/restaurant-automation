const tableController = require("./controllers").table;
const orderController = require("./controllers").order;
const userController = require("./controllers").users;

const path = require("path");

module.exports = router => {
  router.get("/api/", (req, res) => {
    res.status(200).json("API ROUTE");
  });

  // route handling for table
  router.post("/api/t/:waiterId/t", tableController.create);
  router.get("/api/t/", tableController.list);
  router.delete("/api/t/deleteTable", tableController.destroy);

  // route handling for order
  router.post("/api/o", orderController.create);

  // route handling for user
  router.post("/api/u", userController.create);
  router.delete("/api/u/:userId", userController.destroy);
  router.get("/api/u/", userController.list);
  router.put("/api/u/:userId", userController.update);
  router.post("/api/u/perRole", userController.perRole);
  router.post("/api/u/login", userController.login);

  router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/client/dist", "index.html"));
  });
};
