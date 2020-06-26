$(document).ready(function () {
  // DOM Elements
  var container = $(".container");
  var currentDay = $("#currentDay");
  // getting current day
  var now = moment().format("dddd, MMMM Do YYYY");

  currentDay.text(now);

  //create rows for every hour of the day
  for (var i = 0; i < 24; i++) {
    createDiv();

    function createDiv() {
      var time = moment().hour(i).format("H");
      var plannerRow = $("<div class = 'daily row'>");
      plannerRow.attr("data-time", time);
      container.append(plannerRow);
    }
  }
  // adding new divs within the row
  var rowDiv = $("<div class = 'hourOfDay col-md-3'><span id= 'hour'>");
  var input = $(
    "<div class = 'inputInfo col-md-6'><input type = 'text' id = 'input'>"
  );
  var save = $(
    "<div class = 'save col-md-3'><button class = 'saveBtn'>Save<i class='fa fa-calendar-plus-o'></i></button>"
  );
  $(".daily").append(rowDiv, input, save);
});
