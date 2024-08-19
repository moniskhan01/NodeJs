const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const { restrictTologgedInUserOnly, checkAuth } = require("./middleware/auth");

const { connectMongoDb } = require("./connect");

const urlRouter = require("./routes/url");
const staticRoute = require("./routes/staticRouter");
const userRoute = require("./routes/user");

const URL = require("./models/url");

const app = express();
const PORT = 8001;

// connecting mongodb
connectMongoDb("mongodb://127.0.0.1:27017/short-url").then(() =>
  console.log("MongoDB Connected Successfully!")
);

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

//MiddleWare - Plugin
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/url", restrictTologgedInUserOnly, urlRouter);
app.use("/user", userRoute);
app.use("/", checkAuth, staticRoute);

// app.get("/test", (req, res) => {
//   res.end("<h1>Hello from server</h1>");
// });

// app.get("/url/:shortId", async (req, res) => {
app.get("/test", async (req, res) => {
  const allUrls = await URL.find({});
  res.render("home", {
    url: allUrls,
  });
});

app.get("/url/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectURL);
});

app.listen(PORT, () => console.log(`Server Started at PORT : ${PORT}`));
