$(document).ready(function () {
  // DOM Elements
  var container = $(".container");
  var currentDay = $("#currentDay");
  var planInput = $("#input");

  // getting current day
  var now = moment().format("dddd, MMMM Do YYYY");

  currentDay.text(now);

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

  // var save = $(
  //   "<div class = 'save col-md-3'><button class = 'saveBtn'>Save<i class='fa fa-calendar-plus-o'></i></button>"
  // );
  // $(".daily").append(rowDiv, input, save);

  // event listener for save button click
  // $(".saveBtn").on("click", function () {
  //   //function to save the input to localStorage
  //   var plans = planInput.val();
  //   localStorage.setItem("input", plans);
  //   console.log(plans);
  // });

  // //function to get input from localStorage and add it to text
  // function getInput() {
  //   var savedInput = localStorage.getItem("input");
  //   planInput(savedInput);
  // }

  // // will add each hour of the day to hourslot
  // for (var i = 0; i < 24; i++) {
  //   addData();

  //   var hourslot = $("#hour");
  //   hourslot.attr("data-time", time);
  // }
});
