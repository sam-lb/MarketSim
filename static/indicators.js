
// functions for computing indicators and stuff
// this is a module; functions are exported for use in server.js

const gauss = require("gauss");

function movingAverage(df, span) {
  /*
  Compute a simple moving average
  df: array of numbers
  span: number of trading days to use
  */
  const result = [];

  for (let i=0; i<span-1; i++) {
    result.push(NaN);
  }

  if (span > df.length) return result;

  for (let i=span; i<=df.length; i++) {
    const vec = gauss.Vector(df.slice(i-span, i));
    result.push(vec.mean());
  }

  return result;
}

function movingStdev(df, span) {
  if (span === undefined) span = 5;
  const result1 = [], result2 = [];

  for (let i=0; i<span-1; i++) {
    result1.push(NaN);
    result2.push(NaN);
  }

  if (span > df.length) return {upper: result1, lower:result2,};

  for (let i=span; i<=df.length; i++) {
    const vec = gauss.Vector(df.slice(i-span, i));
    const stdev = vec.stdev();
    result1.push(df[i-1] + stdev);
    result2.push(df[i-1] - stdev);
  }

  return {
    upper: result1,
    lower: result2,
  };
}

function macd(df) {
  const result1 = [], result2 = [], signalDays = [];

  for (let i=0; i<25; i++) {
    result1.push(NaN);
    result2.push(NaN);
    if (i<8) signalDays.push(NaN)
  }

  if (result1.length > df.length) return {"macd": result1, "signal": result2,};

  df = gauss.Vector(df);
  const ema26 = gauss.Vector(result1.concat(df.ema(26).toArray()));
  const ema12 = gauss.Vector(result2.concat(df.ema(12).toArray().slice(14)));
  const macdLine = ema12.subtract(ema26).toArray();
  const signalLine = signalDays.concat(result2.concat(gauss.Vector(macdLine.slice(25)).ema(9).toArray()));

  return {
    "macd": macdLine,
    "signal": signalLine,
  };
}

function rsi(df) {
  
}



module.exports = {
  "movingAverage": movingAverage,
  "movingStdev": movingStdev,
  "macd": macd,
  "rsi": rsi,
};
