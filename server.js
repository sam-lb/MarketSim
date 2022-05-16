const express = require('express');
const fs = require("fs");
const url = require("url");

const ind = require("./static/indicators.js");

const app = express();
const PORT = 3000;
app.use(express.static("./static"));


const apiRequestListener = (req, res) => {
  console.log("REQUEST RECEIVED : " + req.url);
  const responseData = {
    "sample 1": 12,
    "sample 2": "chicken",
    "sample 3": [1, 2, 3],
    "sample 4": {
      "subsample 1": 5,
      "subsample 2": "subchicken",
    },
  };
  const jsonData = JSON.stringify(responseData);
  res.end(jsonData);
}

app.get('/', (req, res) => {
  fs.readFile("./index.html", function(err, data) {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(data);
    return res.end();
  });
});

app.get("/api", apiRequestListener);

app.listen(PORT, () => {
  console.log(`Cadus Investments Application Server listening on port ${PORT}`);
});
