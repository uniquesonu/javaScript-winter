const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


function createTask(task){
    
    // todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo')
    // create li
    const newTodo = document.createElement('li')
    newTodo.innerText = `${task}`;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    // mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    // edit button
    const editBtn = document.createElement('button');
    editBtn.innerHTML= '<i class="fas fa-edit"></i>';
    editBtn.classList.add("edit-btn");
    todoDiv.appendChild(editBtn);

    //  trash button
    const transhButton = document.createElement('button');
    transhButton.innerHTML = '<i class="fas fa-trash"></i>';
    transhButton.classList.add("trash-btn");
    todoDiv.appendChild(transhButton);

    // Append to list
    todoList.appendChild(todoDiv);
    // clear todo input value
    todoInput.value = "";

}
const addTodo = (e) =>{
    e.preventDefault();
    if (todoInput.value.trim() !== "") {
        createTask(todoInput.value)
        todoInput.value = ""
    }
}


// const editTask=(e)=>{
//     const item = e.target;
//     if(item.classList[0] === "edit-btn"){
//         console.log("here")
    
// }
// }

function taskCheck(e){
    const item = e.target;
    // delete todo
    if(item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        // animation
        todo.classList.add('fall');
        todo.addEventListener('transitionend',()=>{
            todo.remove();
        })
    }

    // check mark
    else if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
    else if(item.classList[0]=="edit-btn"){
        const newTask = prompt("Edit the task",item.parentElement.children[0].textContent)
    if(newTask.trim()!==""){
        item.parentElement.children[0].innerHTML = newTask
    }
    }
}


todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',taskCheck);
// todoList.addEventListener('click',editTask)
