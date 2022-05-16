
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

function createView(view) {
  /*
  create a new view of type viewType
  view is a value from the views enum
  */

  const div = document.createElement("div");
  div.setAttribute("id", "view-sub-"+viewIDCounter);
  div.setAttribute("class", "view-subcontainer");
  const title = view.title + " " + viewIDCounter;

  const newContent = `
      <div class="view-header">
        <div class="view-header-title" id="view-header-title-${viewIDCounter}"><h4>${title}</h4></div>
        <div class="view-header-content">
          <button class="create-btn" onclick="editTitle(${viewIDCounter});" id="title-edit-${viewIDCounter}">Edit View Title</button>
          <button class="create-btn" onclick="deleteView(${viewIDCounter});">Delete View</button>
        </div>
      </div>
      <div class="view-content">
        <div class="view-controls" id="view-controls-${viewIDCounter}">controls
          <br/>
          <button class="create-btn" onclick="test(${viewIDCounter});">hide/show</button>
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

    Plotly.newPlot('chart-div-'+viewIDCounter, data, layout);
    viewIDCounter++;
}

function createControls(view) {
  // TODO
  // generate html for the controls of a view
  switch(view) {
    case views.DATA:
      break;
    case views.SIMULATION:
      break;
    case views.PREDICTOR:
      break;
    default:
  }
}

function getData(start, end, interval) {
  // TODO
  // pull data from ./api (yahoo-finance historical data and computed indicators)
  const queryParams = "";
  fetch(apiAddress + queryParams)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    });
}

function createGraph(viewID) {
  // TODO
  // build a graph for a view
}

function createTable(viewID) {
  // TODO
  // build a table for a view
}
