const express = require("express");

const {
  getAllTodolist,
  addToDoList,
  getAddToDoList,
  getUpdateToDoList,
  updateToDoList,
  getDeleteToDoList,
  deleteToDoList,
  getAllCompleted,
  getAllUncompleted,
  getAllnearlyCompleted,
} = require("../controllers/todolist");
var router = express.Router();
router.get("/", getAllTodolist);
router.get("/add", getAddToDoList);
router.post("/add", addToDoList);
router.get("/update/:id", getUpdateToDoList);
router.post("/update/:id", updateToDoList);
router.get("/delete/:id", getDeleteToDoList);
router.post("/delete/:id", deleteToDoList);

router.get("/completed", getAllCompleted);
router.get("/uncompleted", getAllUncompleted);
router.get("/nearlyCompleted", getAllnearlyCompleted);

module.exports = router;
