const fs = require("fs");

// Synchronous call
// fs.writeFileSync("./test.txt", "Hii I am Software Developer");

// Asynchrounous call
// fs.writeFile("./test.txt", "Hii I am Learning nodeJs for backend", () => {});

//Read File
// const result = fs.readFileSync("./test.txt", "utf-8"); // Synchrounous call
// console.log(result);

// fs.readFile("./test.txt", "utf-8", (err, result) => {
//   if (err) console.log(err);
//   else console.log(result);
// });

// Appending the data in file
// fs.appendFileSync(
//   "./test.txt",
//   `\n${Date.now().toLocaleString()} I also did a bachelor in computer`
// );

// copy Sync
// fs.cpSync("./test.txt", "copy.txt");

// fs.unlinkSync("./copy.txt");

// Synchrounous and asynchrounous
// console.log("First");

// const result = fs.readFileSync("./test.txt", "utf-8");    // Blocking request
// console.log(result);

// fs.readFile("./test.txt", "utf-8", (err, data) => {     // Non Blocking request
//   console.log(data);
// });

// console.log("Second");
