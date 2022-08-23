
// functions for computing indicators and stuff
// this is a module; functions are exported for use in server.js

const gauss = require("gauss");

function movingAverage(df, span) {
  // TODO
  /*
  Compute an exponential weighted moving average
  df: data frame
  span: number of trading days to use
  */
  return gauss;
}

module.exports = {
  "movingAverage": movingAverage,
};
