var todoList = [];

function postTodo(e) {
  e.preventDefault();
  if (!$("#todo-text").val()) return;
  todoList.push({
    text: $("#todo-text").val(),
    checked: false,
  });
  $("#todo-text").val("");
  updateTodoListHTML();
}

function updateTodoListHTML() {
  $("#todo-list-container").empty();
  for (todo of todoList) {
    $("#todo-list-container").append(`
      <li>
        <input
          type="checkbox"
          ${todo.checked ? "checked" : ""} />
        <label>
          ${todo.text}
        </label>
      </li>
    `);
  }
}

function clearTodos(e) {
  e.preventDefault();
  for (todo of todoList) {
    todo.checked = false;
  }
  updateTodoListHTML();
}

function markTodos(e) {
  e.preventDefault();
  for (todo of todoList) {
    todo.checked = true;
  }
  updateTodoListHTML();
}

function deleteTodos(e) {
  e.preventDefault();
  todoList = [];
  updateTodoListHTML();
}

$("#post-todo").on("click", postTodo);
$("#clear-todos").on("click", clearTodos);
$("#mark-todos").on("click", markTodos);
$("#delete-todos").on("click", deleteTodos);
