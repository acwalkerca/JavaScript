// from data.js
var tableData = data;

var table = d3.select("#ufo-table");

var tbody = d3.select("tbody");
function buildTable(data) {

  data.forEach(function(ufoFinder) {
//  console.log(ufoFinder);
    var row = tbody.append("tr");
    Object.entries(ufoFinder).forEach(function([key, value]) {
      var cell = tbody.append("td");
      cell.text(value);
  });
});
};

table.attr("class", "table table-bordered");


var filter = d3.select(".btn-default");

filter.on("click", function() {

  d3.event.preventDefault();

  var inputElement = d3.select("#datetime");

  var inputValue = inputElement.property("value");
  console.log(inputValue);


  var filteredData = tableData.filter(date => date.datetime === inputValue);
  console.log(filteredData);

buildTable(filteredData);
});
// YOUR CODE HERE!
