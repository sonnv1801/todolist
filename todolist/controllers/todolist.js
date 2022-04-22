const { ToDoList } = require("../models/todolist");

const getAllTodolist = async (req, res, next) => {
  const list = await ToDoList.find().sort("status");
  res.render("todolist/newtodo", {
    todolists: list,
  });
};

const getAddToDoList = (req, res, next) => {
  res.render("todolist/add");
};

const addToDoList = async (req, res, next) => {
  const { title, date, status, progress, size } = req.body;

  if (!title)
    return res
      .status(400)
      .json({ success: false, message: "Title is required" });
  try {
    const newtodolist = new ToDoList({
      title,
      date,
      status,
      progress,
      size,
    });
    await newtodolist.save();
    res.redirect("/");
  } catch (error) {
    res.status(500).json({ success: false, message: "Error" });
  }
};

const getUpdateToDoList = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updateone = await ToDoList.findById(id).exec();
    res.render("todolist/update", {
      todolist: updateone,
    });
  } catch (error) {
    res
      .status(404)
      .json({ success: false, message: "Không Tìm Thấy Công Việc" });
  }
};

const updateToDoList = async (req, res, next) => {
  const { title, date, status, progress, size } = req.body;

  try {
    const id = req.params.id;
    let todolist = await ToDoList.findByIdAndUpdate(
      id,
      {
        title,
        date,
        status,
        progress,
        size,
      },
      { new: true }
    );
    if (!todolist)
      res
        .status(404)
        .json({ success: false, message: "Không Tìm Thấy Công Việc" });
    res.redirect("/");
  } catch (error) {
    res.status(500).json({ success: false, message: "Error" });
  }
};

const getDeleteToDoList = async (req, res, next) => {
  try {
    const id = req.params.id;
    const editone = await ToDoList.findById(id).exec();
    res.render("todolist/delete", {
      todolist: editone,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: "Error" });
  }
};

const deleteToDoList = async (req, res, next) => {
  try {
    const id = req.params.id;
    const sachsapph = await ToDoList.findByIdAndRemove(id);
    if (!sachsapph)
      res.status(404).json({
        success: false,
        message: "Không Tìm Thấy Công Việc Với ID này!!!",
      });
    res.redirect("/");
  } catch (error) {
    res.status(400).json({ success: false, message: "Error" });
  }
};

// Lấy Ra Những Công Việc Đã Hoàn Thành

const getAllCompleted = async (req, res, next) => {
  const list = await ToDoList.find().where("status").equals("Hoàn Thành");
  res.render("todolist/completed", {
    todolists: list,
  });
};

// Lấy Ra Những Công Việc Sắp Hoàn Thành

const getAllUncompleted = async (req, res, next) => {
  const list = await ToDoList.find().where("status").equals("Chưa Hoàn Thành");
  res.render("todolist/uncompleted", {
    todolists: list,
  });
};

// Lấy Ra Những Công Việc Sắp Hoàn Thành

const getAllnearlyCompleted = async (req, res, next) => {
  const list = await ToDoList.find().where("status").equals("Sắp Hoàn Thành");
  res.render("todolist/nearlyCompleted", {
    todolists: list,
  });
};

module.exports = {
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
};
