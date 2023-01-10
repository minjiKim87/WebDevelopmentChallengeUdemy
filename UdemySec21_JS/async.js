const fs = require("fs");

function readFile() {
  let fileData;

  fileData = fs.readFileSync("data.txt", function () {
    console.log("File parsing done!");
    console.log(fileData.toString());
  });

  fs.readFile("data.txt")
    .then(function (fileData) {
      consolelog("File parsing done!");
      console.log(fileData.toString());
    })
    .then(function () {});
  console.log("Hi there!");
}

readFile();
