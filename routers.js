const path = require("path");
const userController = require("./controllers/userController");

module.exports = router => {
  router.get("/api/", (req, res) => {
    res.status(200).json("HELLO");
  });

  router.get("/api/u/test", userController.test);

  router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/client/dist", "index.html"));
  });
};
