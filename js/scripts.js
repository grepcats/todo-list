var itemArray = [];
var completedArray = [];
var listItem = "";
function Todo(item, completion) {
  this.itemText = item;
  this.completedBool = completion;
}

function createList(item, completion) {
  listItem = new Todo(item, completion);
  itemArray.push(listItem);
  return itemArray;
}

function status(listItem) {
  console.log(listItem);
  // if (completedBool === true);
  //   itemArray.indexOf(itemText)
}
