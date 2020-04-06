const tableController = require("./controllers").table;
const orderController = require("./controllers").order;
const userController = require("./controllers").users;
const payroll = require('./controllers').payroll;

const path = require("path");

module.exports = router => {
  router.get(
    "/api/",
    wrap(async (req, res) => {
      res.status(200).json("API ROUTE");
    })
  );

  // route handling for table
  router.post("/api/t/:waiterId/t", tableController.create);
  router.get("/api/t/", tableController.list);
  router.delete("/api/t/deleteTable", tableController.destroy);

  // route handling for order
  router.post("/api/o", orderController.create);
  router.get("/api/o", orderController.list);
  router.get("/api/o/:orderId", orderController.listPerId);
  router.get("/api/o/t/:tableId", orderController.listPerTableId);
  router.delete("/api/o/:orderId", orderController.destroy);
  router.put("/api/o/:orderId", orderController.update);

  // route handling for user
  router.post("/api/u", userController.create);
  router.delete("/api/u/:userId", userController.destroy);
  router.get("/api/u/", userController.list);
  router.put("/api/u/:userId", userController.update);
  router.post("/api/u/perRole", userController.perRole);
  router.post("/api/u/login", userController.login);

  // route handling for payroll
  router.post("/api/p", userController.create);

  router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/client/dist", "index.html"));
  });
};
