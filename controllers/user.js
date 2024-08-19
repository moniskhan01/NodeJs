const User = require("../models/user");

async function handleGetAllUsers(req, res) {
  const allDbUsers = await User.find({});
  res.send(allDbUsers);
}
async function handleGetUserById(req, res) {
  const user = await User.findById(req.params.id);
  if (!user) res.status(404).json({ msg: "User not found" });
  res.json(user);
}
async function handleUpdateUserById(req, res) {
  await User.findByIdAndUpdate(req.params.id, { last_name: "Happy" });
  res.json({ status: "Value Updated Successfully" });
}

async function handleDeleteUserById(req, res) {
  await User.findByIdAndDelete(req.params.id, { last_name: "Happy" });
  res.json({ status: "Value deleted Successfully" });
}

async function handleAddUser(req, res) {
  const body = req.body;
  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.gender ||
    !body.job_title ||
    !body.email
  ) {
    res.status(400).json({ msg: "All fields required" });
  }

  const result = await User.create({
    first_name: body.first_name,
    last_name: body.last_name,
    gender: body.gender,
    email: body.email,
    job_title: body.job_title,
  });

  console.log(result);

  res.status(201).json({ msg: "User Created Successfully", id: result._id });
}

module.exports = {
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleAddUser,
};
