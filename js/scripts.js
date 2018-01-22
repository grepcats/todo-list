var itemArray = [];

function Todo(item, completion) {
  this.itemText = item;
  this.completedBool = completion;
}

function createList(item, completion) {
  var listItem = new Todo(item, completion);
  itemArray.push(listItem);
  return itemArray;
}
