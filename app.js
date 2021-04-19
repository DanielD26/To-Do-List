function newItem() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("addItem").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  document.getElementById("list").appendChild(li);
  document.getElementById("addItem").value = "";
   
}