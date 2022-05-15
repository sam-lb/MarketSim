const express = require('express');
const fs = require("fs");
const app = express();
const PORT = 3000;

app.use(express.static("./static"));

app.get('/', (req, res) => {
  fs.readFile("./index.html", function(err, data) {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(data);
    return res.end();
  });
});

app.listen(PORT, () => {
  console.log(`Cadus Investments Application Server listening on port ${PORT}`);
});
