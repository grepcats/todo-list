var itemArray = [];
var completedArray = [];
var listItem = "";
var i = -1;

//Todo constructor
function Todo(item, completion) {
  this.itemText = item;
  this.completedBool = completion;
}

function createList(item, completion) {
  listItem = new Todo(item, completion);
  itemArray.push(listItem);
  return itemArray;
}
//to remove item
function removeItem(doneItemText) {
  var index = 0;
  itemArray.forEach(function(item) {
    i++;
    if (item.itemText === doneItemText) {
      return index = i;
    }
  });

  var removedItem = itemArray.splice(index, 1);
  completedArray.push(removedItem); 
}


$(document).ready(function() {
  $("#todo-list").submit(function(event) {
    event.preventDefault();
    var inputItem = $("input#todo-item").val();

    $("ul").append("<li><input type='checkbox' name='todo' value='" + inputItem + "'>" + inputItem + "</li>");


    console.log($("input:checkbox[name=todo]:checked").val());

  });
});
