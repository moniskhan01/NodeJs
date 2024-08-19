const User = require("../models/user");
const { v4: uuidv4 } = require("uuid");
const { setUser } = require("../service/auth");

async function handleUserSignUp(req, res) {
  const { name, email, password } = req.body;
  await User.create({
    name,
    email,
    password,
  });
  res.redirect("/");
}

async function handleUserLogin(req, res) {
  const { email, password } = req.body;
  const isUser = await User.findOne({ email, password });
  if (!isUser)
    return res.render("login", {
      error: "Invalid username or password",
    });
  //   const sessionId = uuidv4();

  //   setUser(sessionId, isUser);
  const token = setUser(isUser);
  //   res.cookie("uid", token);
  //   res.cookie("uid", sessionId);

  //   res.redirect("/");

  res.json({ token });
}

module.exports = {
  handleUserSignUp,
  handleUserLogin,
};
