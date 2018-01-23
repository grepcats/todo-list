var itemArray = [];
var completedArray = [];


//Todo constructor
function Todo(item, completion, date) {
  this.itemText = item;
  this.completedBool = completion;
  this.date = date;
}

function createList(item, completion, date) {
  var listItem = new Todo(item, completion, date);
  itemArray.push(listItem);
  return itemArray;
}
//to remove item
function removeItem(doneItemText) {
  var i = -1;
  var index = 0;
  itemArray.forEach(function(item) {
    i++;
    if (item.itemText === doneItemText) {
      return index = i;
    }
  });
  var removedItem = itemArray[index];
  itemArray.splice(index, 1);
  removedItem.completedBool = true;
  completedArray.push(removedItem);

  i = -1;
}


$(document).ready(function() {
  $("#todo-list").submit(function(event) {
    event.preventDefault();
    var inputItem = $("input#todo-item").val();
    var inputDate = $("input#todo-date").val();

    $("#yourToDoList").append("<li>" + inputItem + ", complete by: " + inputDate + "</li>")
    createList(inputItem, false, inputDate);
    $("#todo-item").val("");
    $("li").unbind().click(function() {

      removeItem($(this).text());
      $(this).remove();
      $("#completedTasks").append("<li>" + $(this).text() +  "</li>");


    });

    // completedArray.forEach(function(item){
    // //  $("#completedTasks").children("li").remove();
    //   $("#completedTasks").append("<li>" + item.itemText + "</li>");

  });
});
