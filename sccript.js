let  input = document.getElementById("taskInput");
let  addButton = document.getElementById("addTaskBtn");
let  list = document.getElementById("taskList");
let  tasksTabButton = document.getElementById("tasksTabBtn");
let  notesTabButton = document.getElementById("notesTabBtn");
let  tasksTab = document.getElementById("tasksTab");
let  notesTab = document.getElementById("notesTab");

tasksTabButton.onclick = function () {
  tasksTab.classList.add("active");
  notesTab.classList.remove("active");

  tasksTabButton.classList.add("active");
  notesTabButton.classList.remove("active");
};

notesTabButton.onclick = function () {
  notesTab.classList.add("active");
  tasksTab.classList.remove("active");

  notesTabButton.classList.add("active");
  tasksTabButton.classList.remove("active");
};

addButton.onclick = function () {
  const text = input.value;
  if (text === "") return;

  const item = document.createElement("li");

  const taskText = document.createElement("span");
  taskText.textContent = text;

  taskText.onclick = function () {
    item.classList.toggle("completed");
  };

const dateInput = document.createElement("input");
  dateInput.type = "datetime-local";

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.onclick = function () {
    item.remove();
  };

  item.appendChild(taskText);
  item.appendChild(dateInput);
  item.appendChild(deleteBtn);
  list.appendChild(item);

  input.value = "";
};
