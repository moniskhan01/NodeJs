// const http = require("http");
// const fs = require("fs");
// const url = require("url");

// const os = require("os");
// console.log("My OS DETAILS", os);

// const myServer = http.createServer((req, res) => {
//   const log = `${Date.now()} ${req.url}- New Request Recieved\n`;
//   const myUrl = url.parse(req.url, true);
//   console.log(myUrl);

//   fs.appendFile("log.txt", log, (err, data) => {
//     switch (myUrl.pathname) {
//       case "/":
//         res.end("HomePage");
//         break;
//       case "/contact-us":
//         res.end("Contact us Page");
//         break;
//       case "/about":
//         const userName = myUrl.query.myname;
//         res.end(`hii, this is ${userName}`);
//         break;
//       default:
//         res.end("404 not found");
//     }
//     // res.end("Hii this is triggering after refresh");
//   });
//   //   console.log(req.headers);

//   //   console.log("New Request detected");
//   // res.end("Hello from server");
// });

// myServer.listen(1000, () => console.log("Server Started"));

// Working with Express

const http = require("http");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from HomePage");
});

app.get("/about", (req, res) => {
  res.send(
    "Hello from about page" +
      "I am " +
      req.query.myname +
      " my Id is " +
      req.query.id
  );
});

// const myServer = http.createServer(app);
// myServer.listen(8001, (req, res) => console.log("Server Started"));

app.listen(8001, () => console.log("Hello from the server of express"));
