const { getUser } = require("../service/auth");

function checkForAuthentication(req, res, next) {
  const authorizationHeaderValue = req.headers["authorization"];
  req.user = null;

  if (
    !authorizationHeaderValue ||
    !authorizationHeaderValue.startsWith("Bearer")
  )
    return next();

  const token = authorizationHeaderValue.split("Bearer ")[1];
  const user = getUser(token);

  req.user = user;
  return next();
}

function restrictTo(roles) {
  return function (req, res, next) {
    if (!req.user) return res.redirect("/login");
    if (!req.includes(req.user.role)) return res.end("UnAuthorized");
  };
}

// async function restrictTologgedInUserOnly(req, res, next) {
//   //   const userUid = req.cookies.uid;
//   const userUid = req.headers["Authorization"];

//   if (!userUid) res.redirect("/login");
//   const token = userUid.split("Bearer ")[1];
//   const user = getUser(token);
//   //   const user = getUser(userUid);

//   if (!user) res.redirect("/login");

//   req.user = user;
//   next();
// }

// async function checkAuth(req, res, next) {
//   //   const userUid = req.cookies?.uid;
//   const userUid = req.headers["authorization"];
//   const token = userUid.split("Bearer ")[1];
//   const user = getUser(token);
//   //   const user = getUser(userUid);

//   req.user = user;
//   next();
// }

module.exports = {
  //   restrictTologgedInUserOnly,
  //   checkAuth,
  checkForAuthentication,
  restrictTo,
};
