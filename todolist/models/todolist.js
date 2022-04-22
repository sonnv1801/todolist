const mongoose = require("mongoose");
const Joi = require("joi");

const todolistSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  progress: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
});

const ToDoList = mongoose.model("todolist", todolistSchema);

// const validateToDoList = (todolist) => {
//   const schema = {
//     title: Joi.string().required(),
//     date: Joi.string().required(),
//     status: Joi.string().required(),
//     progress: Joi.string().required(),
//     size: Joi.string().required(),
//   };

//   return Joi.validate(todolist, schema);
// };

module.exports.ToDoList = ToDoList;
// module.exports.validate = validateToDoList;
