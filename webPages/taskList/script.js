const taskList = document.getElementById("taskList");
const form = document.getElementById("taskForm");
const task = document.getElementById("task");
const fieldDesign = document.querySelector("fieldset");

(function () {
  let stringJson = localStorage.getItem("dados");
  let pageData = JSON.parse(stringJson) ?? [];

  pageData.forEach((value) => {
    createItemList(value);
  });

  if (taskList.childNodes.length) {
    fieldDesign.classList.add("filledList");
  }
})();

function createItemList(contentItem) {
  const item = document.createElement("li");
  const delButton = document.createElement("button");
  item.innerHTML = contentItem;

  delButton.innerHTML = "Apagar";
  delButton.classList.add("noStyle");
  delButton.classList.add("delEvent");

  item.appendChild(delButton);
  taskList.appendChild(item);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fieldDesign.classList.add("filledList");

  createItemList(task.value);
  task.value = "";
  task.focus();
  saveData();
});

function saveData() {
  const nodeTemp = taskList.querySelectorAll("li");
  const pageData = [];
  nodeTemp.forEach((value) => {
    value = value.innerText.replace("Apagar", "");
    pageData.push(value);
  });

  const data = JSON.stringify(pageData);
  localStorage.setItem("dados", data);
}

document.addEventListener("click", (e) => {
  const element = e.target;
  if (element.classList.contains("delEvent")) {
    element.parentElement.remove();
    if (!taskList.childNodes.length) {
      fieldDesign.classList.remove("filledList");
    }
    saveData();
  }
});
