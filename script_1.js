var trace2 = {
  x: [2, 3, 4, 5],
  y: [16, 5, 11, 9],
  mode: 'lines+markers'
};

var trace3 = {
  x: [1, 2, 3, 4],
  y: [12, 9, 15, 12],
  mode: 'lines+markers'
};

var data = [ trace2, trace3 ];

var layout = {
  title:'graph of data will go here'
};

Plotly.newPlot('chart-div-1', data, layout);
