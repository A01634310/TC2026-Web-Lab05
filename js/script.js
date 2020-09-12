var todoList = [];

function postTodo(e) {
  e.preventDefault();
  if (!document.getElementById("todo-text").value.length) return;
  todoList.push({
    text: document.getElementById("todo-text").value,
    checked: false,
  });
  document.getElementById("todo-text").value = "";
  updateTodoListHTML();
}

function updateTodoListHTML() {
  document.getElementById("todo-list-container").innerHTML = "";
  var node;
  var checkbox;
  for (todo in todoList) {
    node = document.createElement("LI");
    checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todoList[todo].checked;
    node.appendChild(checkbox);
    node.appendChild(document.createTextNode(`  ${todoList[todo].text}`));
    document.getElementById("todo-list-container").appendChild(node);
  }
}

function clearTodos(e) {
  e.preventDefault();
  for (todo in todoList) {
    todoList[todo].checked = false;
  }
  updateTodoListHTML();
}

function markTodos(e) {
  e.preventDefault();
  for (todo in todoList) {
    todoList[todo].checked = true;
  }
  updateTodoListHTML();
}

function deleteTodos(e) {
  e.preventDefault();
  todoList = [];
  updateTodoListHTML();
}

document.getElementById("post-todo").addEventListener("click", postTodo);
document.getElementById("clear-todos").addEventListener("click", clearTodos);
document.getElementById("mark-todos").addEventListener("click", markTodos);
document.getElementById("delete-todos").addEventListener("click", deleteTodos);
