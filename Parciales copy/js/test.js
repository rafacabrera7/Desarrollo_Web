const fs = require("fs");
fs.readFile("database.json", "utf8", (err, jsonString) => {
  if (err) {
    console.log("File read failed:", err);
    return;
  }
  var db = JSON.parse(jsonString);
  console.log(db);
});