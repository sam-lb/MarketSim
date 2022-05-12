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

// to be replaced with actual data
tickers = ["ticker 1", "ticker 2", "ticker 3"];
index_funds = ["index 1", "index 2", "index 3"];

viewIDCounter = 0;

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
        </div>
        <div class="view" id="view-content-${viewIDCounter}">view content</div>
      </div>`;
    div.innerHTML = newContent;

    const container = document.getElementById("view-container");
    container.appendChild(div);

    div.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

    viewIDCounter++;
}

// Plotly.newPlot('chart-div-1', data, layout);
