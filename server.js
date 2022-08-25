const express = require('express');
const fs = require("fs");
const url = require("url");
const yf = require("yahoo-finance");
const ind = require("./static/indicators.js");

const app = express();
const PORT = 3000;
app.use(express.static("./static"));


function formatData(quotes) {
  const openPrice = [], highPrice = [], lowPrice = [], closePrice = [], dateTime = [];
  let quote;
  for (let i=quotes.length-1; i>=0; i--) {
    quote = quotes[i];
    openPrice.push(quote.open);
    highPrice.push(quote.high);
    lowPrice.push(quote.low);
    closePrice.push(quote.close);
    dateTime.push(quote.date);
  }
  return {
    "open": openPrice,
    "high": highPrice,
    "low": lowPrice,
    "close": closePrice,
    "datetime": dateTime,
  };
}

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
  }, (err,quotes) => {
    const result = formatData(quotes);
    const indicators = {};
    if (params.ind) {
      indicators.moving13 = ind.movingAverage(result.close, 13);
      indicators.moving26 = ind.movingAverage(result.close, 26);
      indicators.movingStdev = ind.movingStdev(result.close);
      indicators.macd = ind.macd(result.close);
    }
    result.indicators = indicators;
    res.end(JSON.stringify(result));
  });
}

app.get('/', (req, res) => {
  console.log("New connection to Cadus Investments Application Server");
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
