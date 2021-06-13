// from data.js
var tableData = data;
console.log(tableData);

// body reference
var tbody = d3.select("tbody");

// sightings
tableData.forEach(function(ufoSighting) {
    
    // write sighting to console
    console.log(ufoSighting);

    // append row for each sighting
    var row = tbody.append("tr");

    // return array and output to web console
    Object.entries(ufoSighting).forEach(function([key, value]) {
      console.log(key, value);
      
      // append cell to row
      var cell = row.append("td");
      cell.text(value);
    });
  });