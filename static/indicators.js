
// functions for computing indicators and stuff
// this is a module; functions are exported for use in server.js

const gauss = require("gauss");

function movingAverage(df, span) {
  // TODO
  /*
  Compute an exponential weighted moving average
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



module.exports = {
  "movingAverage": movingAverage,
  "movingStdev": movingStdev,
};
