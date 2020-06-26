$(document).ready(function () {
  // DOM Elements
  var container = $(".container");
  var currentDay = $("#currentDay");
  // getting current day
  var now = moment().format("dddd, MMMM Do YYYY");

  currentDay.text(now);

  //
  for (var i = 0; i < 24; i++) {
    createDiv();

    function createDiv() {
      var time = moment().hour(i).format("H");
      var plannerRow = $("<div class = 'daily'>");
      plannerRow.attr("data-time", time);
      container.append(plannerRow);
    }
  }
});
