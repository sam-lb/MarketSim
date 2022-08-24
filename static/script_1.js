
// to be replaced with data from api calls
const trace2 = {
  x: [2, 3, 4, 5],
  y: [16, 5, 11, 9],
  mode: 'lines+markers'
};

const trace3 = {
  x: [1, 2, 3, 4],
  y: [12, 9, 15, 12],
  mode: 'lines+markers'
};

const data = [ trace2, trace3 ];

const layout = {
  title:'graph of data will go here'
};

// to be replaced with actual data
tickers = ["ticker 1", "ticker 2", "ticker 3"];
index_funds = ["index 1", "index 2", "index 3"];

let viewIDCounter = 0;
const PORT = 3000;
const apiAddress = `http://localhost:${PORT}/api`;

const views = {
  DATA: {id: 0, title: "Untitled Data View"},
  SIMULATION: {id: 1, title: "Untitled Simulation View"},
  PREDICTOR: {id: 2, title: "Untitled Predictor View"},
};

const TOP_TICKERS_HTML = (()=>{
  let result = "";
  for (let ticker of TOP_TICKERS) {
    result += `<option value="${ticker}">${ticker}</option>`;
  }
  return result;
})();

function editTitle(viewID) {
  // toggle the editility of the title of the given view
  const header = document.getElementById(`view-header-title-${viewID}`);
  const button = document.getElementById(`title-edit-${viewID}`);
  if (button.innerHTML === "Edit View Title") {
    header.style.border = "1px solid black;"
    header.contentEditable = true;
    button.innerHTML = "Save Title"
    header.focus();

    // select title text
    const range = document.createRange();
    range.selectNodeContents(header);
    selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  } else {
    header.style.border = "none";
    header.contentEditable = "false";
    button.innerHTML = "Edit View Title";
  }
}

function deleteView(viewID) {
  const target = document.getElementById("view-sub-"+viewID);
  target.parentNode.removeChild(target);
}

function test(viewID) {
  const chartDiv =  document.getElementById("chart-div-"+viewID);
  chartDiv.style.display = (chartDiv.style.display === "block") ? "none" : "block";
}

function todaysDate() {
  const today = new Date();
  return today.getFullYear() + "/" + String(today.getMonth() + 1).padStart(2, "0") + "/" + String(today.getDate()).padStart(2, "0");
}

function createView(view) {
  const div = document.createElement("div");
  div.setAttribute("id", "view-sub-"+viewIDCounter);
  div.setAttribute("class", "view-subcontainer");
  const title = view.title + " " + viewIDCounter;
  const controlsHTML = createControls(view, viewIDCounter);

  const newContent = `
      <div class="view-header">
        <div class="view-header-title" id="view-header-title-${viewIDCounter}"><h4>${title}</h4></div>
        <div class="view-header-content">
          <button class="create-btn" onclick="editTitle(${viewIDCounter});" id="title-edit-${viewIDCounter}">Edit View Title</button>
          <button class="create-btn" onclick="deleteView(${viewIDCounter});">Delete View</button>
        </div>
      </div>
      <div class="view-content">
        <div class="view-controls" id="view-controls-${viewIDCounter}">
          <!--<br/>
          <button class="create-btn" onclick="test(${viewIDCounter});">hide/show</button>-->
          ${controlsHTML}
          <div class="submit-btn-cont">
            <button class="create-btn" onclick="readControls(${view.id}, ${viewIDCounter});">Update View</button>
          </div>
        </div>
        <div class="view" id="view-content-${viewIDCounter}">
          <div id="chart-div-${viewIDCounter}"></div>
        </div>
      </div>`;
    div.innerHTML = newContent;

    const container = document.getElementById("view-container");
    container.appendChild(div);

    div.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

    // createGraph(viewIDCounter);
    viewIDCounter++;
}

function createControls(view, viewID) {
  // TODO
  // generate html for the controls of a view
  switch(view) {
    case views.DATA:
      return createDataControls(viewID);
      break;
    case views.SIMULATION:
      break;
    case views.PREDICTOR:
      return createPredictorControls(viewID);
      break;
    default:
  }
}

function createDataControls(viewID) {
  // TODO
  // generate html for the controls of a data view
  //const template = ``
  const currentDate = todaysDate();
  const controls = `<div class="controls-subcontainer">
    <fieldset>
      <legend>Ticker Information</legend>
      <label for="ticker-select-${viewID}">Ticker symbol: </label>
      <select id="ticker-select-${viewID}">
        ${TOP_TICKERS_HTML}
      </select><br />
      <label for="start-date-${viewID}">Start date: </label>
      <input type="date" min="2012-01-01" max="${currentDate}" value="2021-01-01" id="start-date-${viewID}"><br />
      <label for="end-date-${viewID}">End date: </label>
      <input type="date" min="2012-01-01" max="${currentDate}" value="2021-02-01" id="end-date-${viewID}"><br />
      <label for="period-select-${viewID}">Period: </label>
      <select id="period-select-${viewID}">
        <option value="d">Daily</option>
        <option value="w">Weekly</option>
        <option value="m">Monthly</option>
      </select>
    </fieldset><br />
    <fieldset>
      <legend>Plot settings</legend>
      <label for="plot-type-select-${viewID}">Plot type: </label>
      <select id="plot-type-select-${viewID}">
        <option value="line-plot">Line Plot</option>
        <option value="candlestick-plot">Candlestick Plot</option>
      </select><br />
      <label for="show-points-${viewID}">Show points</label>
      <input type="checkbox" id="show-points-${viewID}" checked>
    </fieldset>
  </div>`;
  return controls;
}

function createPredictorControls(viewID) {
  const currentDate = todaysDate();
  const controls = `<div class="controls-subcontainer">
    <fieldset>
      <legend>Ticker Information</legend>
      <label for="ticker-select-${viewID}">Ticker symbol: </label>
      <select id="ticker-select-${viewID}">
        ${TOP_TICKERS_HTML}
      </select><br />
      <label for="start-date-${viewID}">Start date: </label>
      <input type="date" min="2012-01-01" max="${currentDate}" value="2021-01-01" id="start-date-${viewID}"><br />
      <label for="end-date-${viewID}">End date: </label>
      <input type="date" min="2012-01-01" max="${currentDate}" value="2021-02-01" id="end-date-${viewID}"><br />
      <label for="period-select-${viewID}">Period: </label>
      <select id="period-select-${viewID}">
        <option value="d">Daily</option>
        <option value="w">Weekly</option>
        <option value="m">Monthly</option>
      </select>
    </fieldset><br />
    <fieldset>
      <legend>Plot settings</legend>
      <label for="plot-type-select-${viewID}">Plot type: </label>
      <select id="plot-type-select-${viewID}">
        <option value="line-plot">Line Plot</option>
        <option value="candlestick-plot">Candlestick Plot</option>
      </select><br />
      <label for="show-points-${viewID}">Show points</label>
      <input type="checkbox" id="show-points-${viewID}" checked>
    </fieldset><br />
    <fieldset>
      <legend>Indicators to display</legend>
      <button class="create-btn" onclick="checkAllIndicators(${viewID});">Select all</button><br /><br />
      <label for="macd-${viewID}">MACD</label>
      <input type="checkbox" id="macd-${viewID}"><br />
      <label for="rsi-${viewID}">RSI</label>
      <input type="checkbox" id="rsi-${viewID}"><br />
      <label for="moving-13-${viewID}">13 day moving average</label>
      <input type="checkbox" id="moving-13-${viewID}"><br />
      <label for="moving-26-${viewID}">26 day moving average</label>
      <input type="checkbox" id="moving-26-${viewID}"><br />
      <label for="moving-sd-${viewID}">Moving Standard Deviation</label>
      <input type="checkbox" id="moving-sd-${viewID}">
    </fieldset>
  </div>`;
  return controls;
}

function checkAllIndicators(viewID) {
  document.getElementById(`macd-${viewID}`).checked = true;
  document.getElementById(`rsi-${viewID}`).checked = true;
  document.getElementById(`moving-13-${viewID}`).checked = true;
  document.getElementById(`moving-26-${viewID}`).checked = true;
  document.getElementById(`moving-sd-${viewID}`).checked = true;
}

function readControls(view, viewID) {
  switch(view) {
    case views.DATA.id:
      return readDataControls(viewID);
      break;
    case views.SIMULATION.id:
      break;
    case views.PREDICTOR.id:
      return readPredictorControls(viewID);
      break;
    default:
  }
}

function readDataControls(viewID) {
  const ticker = document.getElementById(`ticker-select-${viewID}`).value;
  const start = document.getElementById(`start-date-${viewID}`).value;
  const end = document.getElementById(`end-date-${viewID}`).value;
  const period = document.getElementById(`period-select-${viewID}`).value;

  const plotSettings = {
    "plot-type": document.getElementById(`plot-type-select-${viewID}`).value,
    "show-points": document.getElementById(`show-points-${viewID}`).checked,
  };

  switch (plotSettings["plot-type"]) {
    case "line-plot":
      createLineGraph(viewID, start, end, ticker, period, plotSettings);
      break;
    case "candlestick-plot":
      createCandlestick(viewID, start, end, ticker, period, plotSettings);
      break;
    default:
      createLineGraph(viewID, start, end, ticker, period, plotSettings);
  }
}

function readPredictorControls(viewID) {
  const ticker = document.getElementById(`ticker-select-${viewID}`).value;
  const start = document.getElementById(`start-date-${viewID}`).value;
  const end = document.getElementById(`end-date-${viewID}`).value;
  const period = document.getElementById(`period-select-${viewID}`).value;

  const plotSettings = {
    "plot-type": document.getElementById(`plot-type-select-${viewID}`).value,
    "show-points": document.getElementById(`show-points-${viewID}`).checked,
    "show-macd": document.getElementById(`macd-${viewID}`).checked,
    "show-rsi": document.getElementById(`rsi-${viewID}`).checked,
    "show-moving-13": document.getElementById(`moving-13-${viewID}`).checked,
    "show-moving-26": document.getElementById(`moving-26-${viewID}`).checked,
    "show-moving-sd": document.getElementById(`moving-sd-${viewID}`).checked,
  };

  createPredictorGraph(viewID, start, end, ticker, period, plotSettings);
}

function getData(start, end, ticker, period, indicators) {
  // pull data from ./api (yahoo-finance historical data and computed indicators)
  start = start.split("-");
  end = end.split("-"); // TODO fix this to use Date
  const Y = start[0], M = start[1], D = start[2];
  const endY = end[0], endM = end[1], endD = end[2];
  indicators = indicators ? 1 : 0;

  // TODO add validity checks for parameters

  const queryString = `?Y=${Y}&M=${M}&D=${D}&endY=${endY}&endM=${endM}&endD=${endD}&sym=${ticker}&per=${period}&ind=${indicators}`;
  return fetch(apiAddress + queryString).then(response => response.json());
}

function createLineGraph(viewID, start, end, ticker, period, plotSettings) {
  // build a graph for a view

  const lineMode = plotSettings["show-points"] ? "lines+markers" : "lines";

  getData(start, end, ticker, period, false)
    .then(data => {

      const traces = [
        {
          x: data.datetime,
          y: data.open,
          mode: lineMode,
          name: "Open",
        },
        {
          x: data.datetime,
          y: data.close,
          mode: lineMode,
          name: "Close",
        },
      ];

      const graphLayout = {
        title: `${ticker} from ${start} to ${end}`,
        xaxis: {
          title: {
            text: "Time",
          },
        },
        yaxis: {
          title: {
            text: "Fat Stacks"
          },
        },
      };

      Plotly.newPlot("chart-div-" + viewID, traces, graphLayout);
    });
}

function createCandlestick(viewID, start, end, ticker, period, plotSettings) {
  getData(start, end, ticker, period, false)
    .then(data => {

      const traces = [
        {
          x: data.datetime,
          close: data.close,
          decreasing: {line: {color: "#FFBBBB"}},
          high: data.high,
          increasing: {line: {color: "#BBBBFF"}},
          low: data.low,
          open: data.open,
          type: "candlestick",
        }
      ];

      const graphLayout = {
        title: `${ticker} from ${start} to ${end}`,
        xaxis: {
          title: {
            text: "Time",
          },
          rangeslider: {
            visible: false
          }
        },
        yaxis: {
          title: {
            text: "Fat Stacks"
          },
        },
      };

      Plotly.newPlot("chart-div-" + viewID, traces, graphLayout);
    });
}

function createPredictorGraph(viewID, start, end, ticker, period, plotSettings) {
  getData(start, end, ticker, period, true)
    .then(data => {

      const lineMode = plotSettings["show-points"] ? "lines+markers" : "lines";

      const traces = [
        {
          x: data.datetime,
          y: data.open,
          mode: lineMode,
          name: "Open",
        },
      ];

      const graphLayout = {
        title: `Indicators for ${ticker} from ${start} to ${end}`,
        xaxis: {
          title: {
            text: "Time",
          },
          rangeslider: {
            visible: false
          }
        },
        yaxis: {
          title: {
            text: "Fat Stacks"
          },
        },
      };

      Plotly.newPlot("chart-div-" + viewID, traces, graphLayout);
    });
}

function createTable(viewID) {
  // TODO
  // build a table for a view
}
