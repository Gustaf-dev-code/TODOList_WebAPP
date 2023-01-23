import checkComplete from "./components/checkComplete.js";
import trashIcon from "./components/trashIcon.js";

const btn = document.querySelector("[data-form-btn]");

const createTask = (evento) => {
  evento.preventDefault();
  const input = document.querySelector("[data-form-input]");
  const value = input.value;
  const list = document.querySelector("[data-list]");
  const task = document.createElement("li");
  task.classList.add("card");
  input.value = "";
  //console.log(checkComplete());
  const taskContent = document.createElement("div");
  taskContent.appendChild(checkComplete());
  const titleTask = document.createElement("span");
  titleTask.classList.add("task");
  titleTask.innerText = value;
  taskContent.appendChild(titleTask);
  //task.innerHTML = content;
  task.appendChild(taskContent);
  task.appendChild(trashIcon());
  list.appendChild(task);
  //console.log(content);
};

console.log(btn);

btn.addEventListener("click", createTask);
