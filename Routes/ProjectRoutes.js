const express = require("express");
const router = express.Router();
const controller = require("../Controllers/ProjectController");

router.get("/", controller.getProjects);
router.get("/:id", controller.getProject);
router.post("/", controller.addProject);
router.put("/", controller.updateProject);
router.delete("/:id", controller.deleteProject);

module.exports = router;
