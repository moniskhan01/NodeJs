// const sessionIdToUserMap = new Map();

// function setUser(id, name) {
//   sessionIdToUserMap.set(id, name);
// }
// function getUser(id) {
//   return sessionIdToUserMap.get(id);
// }
// module.exports = {
//   setUser,
//   getUser,
// };

// using tokens

// const sessionIdToUserMap = new Map();

const jwt = require("jsonwebtoken");
const secretKey = "Monis$123@$";

function setUser(user) {
  return jwt.sign(
    {
      _id: user._id,
      email: user.email,
    },
    secretKey
  );
}
function getUser(token) {
  if (!token) return null;
  try {
    return jwt.verify(token, secretKey);
  } catch (error) {
    return null;
  }
}
module.exports = {
  setUser,
  getUser,
};
