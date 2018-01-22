var itemArray = [];
var completedArray = [];


//Todo constructor
function Todo(item, completion) {
  this.itemText = item;
  this.completedBool = completion;
}

function createList(item, completion) {
  var listItem = new Todo(item, completion);
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
  completedArray.push(removedItem);
  i = -1;
}


$(document).ready(function() {
  $("#todo-list").submit(function(event) {
    event.preventDefault();
    var inputItem = $("input#todo-item").val();

    $("ul").append("<li>" + inputItem + "</li>")
    createList(inputItem, false);

    $("li").unbind().click(function() {
      debugger;
      removeItem($(this).text());
      $(this).remove();

    })

    $("#todo-item").val("");




    //$("ul").append("<li><input type='checkbox' name='todo' value='" + inputItem + "'>" + inputItem + "</li>");

    //$("input:checkbox[name=todo]:checked").val()

    //console.log($("input:checkbox[name=todo]:checked").val());

  });
});
