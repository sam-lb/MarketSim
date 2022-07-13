const express = require('express');
const fs = require("fs");
const url = require("url");
const yf = require("yahoo-finance");
const gauss = require("gauss");

global.gauss = gauss;
const ind = require("./static/indicators.js");
global.ind = ind;

const app = express();
const PORT = 3000;
app.use(express.static("./static"));


const apiRequestListener = (req, res) => {
  console.log("API REQUEST RECEIVED : " + req.url);

  const params = url.parse(req.url, true).query;
  const start = `${params.Y}-${params.M}-${params.D}`;
  const end = `${params.endY}-${params.endM}-${params.D}`; // TODO fix this to use Date

  yf.historical({
    symbol: params.sym,
    from: start,
    to: end,
    period: params.per,
  }, (err,quotes)=>{
    /* TODO
    if (params.ind) {
      compute indicators
    }
    */
    res.end(JSON.stringify({content: quotes}));
  });
}

app.get('/', (req, res) => {
  fs.readFile("./index.html", function(err, data) {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(data);
    return res.send();
  });
});

app.get("/api", apiRequestListener);

app.listen(PORT, () => {
  console.log(`Cadus Investments Application Server listening on port ${PORT}`);
});
