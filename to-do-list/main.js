const todoTitle = document.querySelector(".todo-title");
const addTodoButton = document.querySelector(".add-todo");
const todoList = document.querySelector(".todo-list");

function removeTodo(event) {
    event.target.parentNode.remove();
}

function addTodo() {

    if(todoTitle.value) {
        //todo
        const todo = document.createElement("div");
        todo.classList.add("todo");

        //h3
        const h3 = document.createElement("h3");
        h3.classList.add("todo-text");
        h3.innerHTML = todoTitle.value;

        //button
        const button = document.createElement("button");
        button.type = "button";
        button.classList.add("remove-todo");
        button.innerHTML = "ลบ";
        button.addEventListener("click", removeTodo);

        //todoFooter
        const todoFooter = document.createElement("div");
        todoFooter.classList.add("todo-footer");

        //button => todoFooter
        todoFooter.append(button);

        //h3, todoFooter => todo
        todo.append(h3, todoFooter);

        //todo => todo list
        todoList.prepend(todo);
    }
}