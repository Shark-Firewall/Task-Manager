const getAllTask = (req, res) => {
  res.send("All Items is listed!");
};

const postTask = (req, res) => {
  res.send("Task is Added!");
};

const getOneTask = (req, res) => {
  res.send("Single Task is Listed!");
};

const updateTask = (req, res) => {
  res.send("Task is Updated!");
};

const deleteTask = (req, res) => {
  res.send("Task is Deleted!");
};

module.exports = {
  getAllTask,
  postTask,
  getOneTask,
  updateTask,
  deleteTask
};
