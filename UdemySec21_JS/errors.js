const fs = require("fs");
function readFile() {
  let fileData;
  try {
    fileData = fs.readFileSync("data.json");
  } catch {
    console.log("An error occurred!");
  }

  console.log("Hi there!");
}

readFile();

module.exports = {
  readFile: readFile,
};
