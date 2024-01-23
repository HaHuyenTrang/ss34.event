function addRow() {
    var table = document.getElementById("myTable");
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);

    for (var i = 0; i < table.rows[0].cells.length; i++) {
      var cell = row.insertCell(i);
      cell.innerHTML = "Cell " + (i + 1) + " row " + rowCount;
    }
  }