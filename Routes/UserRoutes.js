const express = require("express");
const router = express.Router();
const controller = require("../Controllers/UserController");

router.get("/", controller.getUsers);
router.get("/:id", controller.getUser);
router.post("/", controller.addUser);
router.put("/", controller.updateUser);
router.delete("/:id", controller.deleteUser);

module.exports = router;
