const express = require("express");
const router = express.Router();
const {
  getAllTask,
  postTask,
  getOneTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks");

//mini app
router.route("/").get(getAllTask).post(postTask);

router.route("/:id").get(getOneTask).patch(updateTask).delete(deleteTask);

module.exports = router;
