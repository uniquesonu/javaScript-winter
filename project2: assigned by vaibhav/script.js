const yourName = prompt("Enter your name");
const h1 = document.querySelector('b');
h1.innerText = `${yourName}!`

console.log("\nEnter 1 to add item to the list\nEnter 2 to display the list\nEnter 3 to remove item from the list");

let n = prompt("Enter 1 to add item to the list\nEnter 2 to display the list\nEnter 3 to remove item from the list");

let todoList = [];
while(n==1){
    let todo = prompt("enter the todo");
    console.log(todo);
    addToDo(todo);
    n = prompt("Enter 1 to add item to the list\nEnter 2 to display the list\nEnter 3 to remove item from the list");
}
if(n==2){
    displayToDo();
    n = prompt("enter the number");
}
if(n==3){
    let removeItem = prompt("enter the item name to remove");
    removeToDo(removeItem);
    displayToDo();
    n = prompt("Enter 1 to add item to the list\nEnter 2 to display the list\nEnter 3 to remove item from the list");
}


function addToDo(item) {
    todoList.push(item);
    console.log(item + " added to the list.");
}

function displayToDo() {
    console.log("To-do list:");
    todoList.forEach(function(item) {
        console.log(item);
    });
}

function removeToDo(item) {
    let index = todoList.indexOf(item);
    if (index !== -1) {
      todoList.splice(index, 1);
      console.log(item + " removed from the list.");
    } else {
      console.log(item + " not found in the list.");
    }
}