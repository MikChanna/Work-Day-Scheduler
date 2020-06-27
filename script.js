$(document).ready(function () {
  // DOM Elements
  var container = $(".container");
  var currentDay = $("#currentDay");
  var storedPlans = [];

  // getting current day
  var now = moment().format("dddd, MMMM Do YYYY");

  currentDay.text(now);

  initialize();

  for (var i = 0; i < 24; i++) {
    //create rows for every hour of the day
    var time = moment().hour(i).format("H");
    var plannerRow = $("<div class = 'daily row'>");
    plannerRow.attr("data-time", time);
    container.append(plannerRow);

    // create div for where the time will go
    var rowDiv = $("<div>").addClass("hourOfDay col-md-3");
    var addSpan = $("<span id = 'time'>").attr("hour-index", i);
    rowDiv.append(addSpan);
    plannerRow.append(rowDiv);

    // format hours for display
    let displayHour = 0;
    let ampm = "";
    if (i > 12) {
      displayHour = i - 12;
      ampm = "pm";
    } else {
      displayHour = i;
      ampm = "am";
    }
    if (i === 0) {
      displayHour = 12;
      ampm = "am";
    }

    // populate addspan with time
    addSpan.text(displayHour + ampm);

    // create div for input area
    var inputarea = $("<div>").addClass("inputinfo col-md-6");
    var inputfield = $("<input type = 'text' id = 'input'>").attr(
      "field-index",
      i
    );
    inputarea.append(inputfield);
    plannerRow.append(inputarea);

    //create div for save button
    var save = $("<div>").addClass("save col-md-3");
    var saveButton = $("<button>").addClass("saveBtn");
    saveButton.attr("save-index", i);
    saveButton.text("Save");
    var icon = $("<i class='fa fa-calendar-plus-o'>");
    saveButton.append(icon);
    save.append(saveButton);
    plannerRow.append(save);
  }

  // event listener for save button click
  $(".saveBtn").on("click", function (event) {
    event.preventDefault();
    //function to save the input to localStorage
    var saveIndex = $(this).attr("save-index");
    var fieldIndex = $("[field-index~=" + saveIndex + "]");
    var plans = fieldIndex.val().trim();
    localStorage.setItem("Task", JSON.stringify(storedPlans));
    storedPlans.push(plans);
    console.log(storedPlans);

    renderPlans();
  });

  function initialize() {
    var lstoragePlans = JSON.parse(localStorage.getItem("plans"));
    if (lstoragePlans !== null) {
      storedPlans = lstoragePlans;
    }
  }
  //function to get input from localStorage and add it to text
  function renderPlans() {
    var savedInput = localStorage.getItem("Task");
    for (var i = 0; i < storedPlans.length; i++) {
      var tasks = storedPlans[i];
    }
  }
});
