document.addEventListener("DOMContentLoaded", function () {
  const addTodoButton = document.getElementById("addTodoButton");
  const newTodoInput = document.getElementById("newTodo");
  const todoList = document.getElementById("todoList");

  // Add new to-do item
  addTodoButton.addEventListener("click", function () {
    const todoText = newTodoInput.value.trim();
    if (todoText !== "") {
      addTodoItem(todoText);
      newTodoInput.value = "";
    }
  });

  // Higher-order function to handle DOM manipulation
  function handleDom(element, action) {
    if (action === "append") {
      todoList.appendChild(element);
    } else if (action === "remove") {
      element.parentNode.removeChild(element);
    }
  }

  // Add to-do item function
  function addTodoItem(text) {
    const todoItem = createTodoItem(text);
    handleDom(todoItem, "append");
  }

  // Create a new to-do item
  function createTodoItem(text) {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function () {
      if (checkbox.checked) {
        li.classList.add("completed");
      } else {
        li.classList.remove("completed");
      }
    });

    const span = document.createElement("span");
    span.textContent = text;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", function () {
      handleDom(li, "remove");
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(removeButton);

    return li;
  }
});
