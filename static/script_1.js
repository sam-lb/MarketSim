
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
  /*
  create a new view of type viewType
  view is a value from the views enum
  */

  const div = document.createElement("div");
  div.setAttribute("id", "view-sub-"+viewIDCounter);
  div.setAttribute("class", "view-subcontainer");
  const title = view.title + " " + viewIDCounter;
  const currentDate = todaysDate();

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
          <div class="controls-subcontainer">
            <fieldset>
              <legend>Ticker Information</legend>
              <label for="ticker-select-${viewIDCounter}">Ticker symbol: </label>
              <select id="ticker-select-${viewIDCounter}">
                <option value="AAPL">AAPL (Apple Inc)</option>
              </select><br />
              <label for="start-date-${viewIDCounter}">Start date: </label>
              <input type="date" min="2012-01-01" max="${currentDate}" value="2021-01-01" id="start-date-${viewIDCounter}"><br />
              <label for="end-date-${viewIDCounter}">End date: </label>
              <input type="date" min="2012-01-01" max="${currentDate}" value="2021-02-01" id="end-date-${viewIDCounter}"><br />
              <label for="period-select-${viewIDCounter}">Period: </label>
              <select id="period-select-${viewIDCounter}">
                <option value="d">Daily</option>
                <option value="w">Weekly</option>
                <option value="m">Monthly</option>
              </select>
            </fieldset>
          </div>
          <button class="create-btn" onclick="readDataControls(${viewIDCounter});">Update View</button>
        </div>
        <div class="view" id="view-content-${viewIDCounter}">
          <div id="chart-div-${viewIDCounter}"></div>
        </div>
      </div>`;
    // TODO move the stuff in <fieldset> tags (and surrounding div) to the createControls function
    div.innerHTML = newContent;

    const container = document.getElementById("view-container");
    container.appendChild(div);

    div.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

    createControls(view, viewIDCounter);
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
      break;
    default:
  }
}

function createDataControls(viewID) {
  // TODO
  // generate html for the controls of a data view
  //const template = ``
}


// <fieldset>
//   <legend>Ticker Information</legend>
//   <label for="ticker-select-${viewIDCounter}">Ticker symbol: </label>
//   <select id="ticker-select-${viewIDCounter}">
//     <option value="AAPL">AAPL (Apple Inc)</option>
//   </select><br />
//   <label for="start-date-${viewIDCounter}">Start date: </label>
//   <input type="date" min="2012-01-01" max="${currentDate}" value="2021-01-01" id="start-date-${viewIDCounter}"><br />
//   <label for="end-date-${viewIDCounter}">End date: </label>
//   <input type="date" min="2012-01-01" max="${currentDate}" value="2021-02-01" id="end-date-${viewIDCounter}"><br />
//   <label for="period-select-${viewIDCounter}">Period: </label>
//   <select id="period-select-${viewIDCounter}">
//     <option value="d">Daily</option>
//     <option value="w">Weekly</option>
//     <option value="m">Monthly</option>
//   </select><br />
//   <label for="indicators-${viewIDCounter}">Compute Indicators? </label>
//   <input type="checkbox" id="indicators-${viewIDCounter}">
// </fieldset>

function readDataControls(viewID) {
  const ticker = document.getElementById(`ticker-select-${viewID}`).value;
  const start = document.getElementById(`start-date-${viewID}`).value;
  const end = document.getElementById(`end-date-${viewID}`).value;
  const period = document.getElementById(`period-select-${viewID}`).value;
  createGraph(viewID, start, end, ticker, period, false);
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

function createGraph(viewID, start, end, ticker, period, indicators) {
  // build a graph for a view

  // // these will be parameters in the future (from the interface) ------|
  // const start = "2012-01-01";
  // const end = "2012-02-01";
  // const ticker = "AAPL";
  // const period = "d";
  // const indicators = false;
  // // ------------------------------------------------------------------|

  getData(start, end, ticker, period, indicators)
    .then(data => {
      let closePrice = [], openPrice = [], xAxis = [];
      for (let i=0; i<data.content.length; i++) {
        xAxis.push(i);
        openPrice.push(data.content[i].close);
        closePrice.push(data.content[i].open);
      }

      const traces = [
        {
          x: xAxis,
          y: openPrice,
          mode: "lines+markers",
          name: "Open",
        },
        {
          x: xAxis,
          y: closePrice,
          mode: "lines+markers",
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

function createTable(viewID) {
  // TODO
  // build a table for a view
}
