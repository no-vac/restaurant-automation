const tableController = require("./controllers").table;
const orderController = require("./controllers").order;
const userController = require("./controllers").users;
const payroll = require('./controllers').payroll;

const path = require("path");

module.exports = router => {
  router.get("/api/", (req, res) => {
    res.status(200).json("API ROUTE");
  });

  // route handling for table
  router.post("/api/t/", tableController.create);
  router.get("/api/t/", tableController.list);
  router.put("/api/t/", tableController.update);
  router.get("/api/t/perTable", tableController.table);
  router.delete("/api/t/", tableController.destroy);

  // route handling for order
  router.post("/api/o", orderController.create);
  router.get("/api/o", orderController.list);
  router.get("/api/o/getOrder", orderController.listPerId);
  router.get("/api/o/t/:tableId", orderController.listPerTableId);
  router.delete("/api/o/:orderId", orderController.destroy);
  router.put("/api/o/:orderId", orderController.update);

  // route handling for user
  router.post("/api/u", userController.create);
  router.delete("/api/u", userController.destroy);
  router.get("/api/u/", userController.list);
  router.get("/api/u/user", userController.getUser);
  router.put("/api/u/", userController.updateUser);
  router.get("/api/u/perRole", userController.perRole);
  router.post("/api/u/login", userController.login);
  router.post("/api/u/logout", userController.logout);


  // route handling for payroll
  router.post("/api/p", userController.create);

  router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/client/dist", "index.html"));
  });
};
