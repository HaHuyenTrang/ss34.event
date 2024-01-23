// let div_1 = document.getElementById("button");
// let div2 = document.getElementById("item");
// let user = parseInt(prompt(""));
// input.addEventListener("click", function(){
//     item.add.input;
// });


function addItem() {
    var inputField = document.getElementById("input-field");
    var newItemText = inputField.value;
  
    if (newItemText !== "") {
      var itemList = document.getElementById("item-list");
      var newItem = document.createElement("li");
      newItem.innerText = newItemText;
      itemList.appendChild(newItem);
  
      inputField.value = "";
    }
  }