let form = document.querySelector("form");
let input = document.querySelector("#input");
let list = document.querySelector(".list");
let deleteAllBtn = document.querySelector(".deleteAllBtn");

let api = [
  {
    id: 1,
    title: "wake up",
  },
  {
    id: 2,
    title: "brush teeth",
  },
];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let newTodo = {
    id: api.length + 1,
    title: input.value,
    completed: false,
  };

  if (!newTodo.title) {
    alert("duzgun tapsiriq elave et");
    return;
  }
  api.push(newTodo);
  createTodo();
  input.value = "";
});
function createTodo() {
  list.innerHTML = "";

  api.forEach((todo, index) => {
    let li = document.createElement("li");
    li.setAttribute("data-id", todo.id);
    li.classList.add("list_item");
    li.style.color = todo.completed ? "green" : "red";

    let serialNumber = document.createElement("span");
    serialNumber.textContent = `${index + 1}. `;
    serialNumber.classList.add("serial-number");

    let span = document.createElement("span");
    span.textContent = todo.title;
    span.classList.add("task");

    let setting = document.createElement("div");
    setting.classList.add("setting");

    let completedButton = document.createElement("button");
    completedButton.textContent = "Complete";
    completedButton.classList.add("btn", "complete-btn");

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fa-solid", "fa-trash-can");

    let editIcon = document.createElement("i");
    editIcon.classList.add("fa-solid", "fa-pen-to-square");

    setting.append(deleteIcon, editIcon, completedButton);
    li.append(span, setting, serialNumber);

    list.appendChild(li);

    completedButton.addEventListener("click", () => {
      todo.completed = !todo.completed;
      createTodo();
    });

    deleteIcon.addEventListener("click", (e) => {
      let parenElem = e.target.closest(".list_item");
      let id = parenElem.getAttribute("data-id");
      let findIndex = api.findIndex((todo) => todo.id == id);
      if (findIndex !== -1) {
        api.splice(findIndex, 1);
      }

      createTodo();
    });
    editIcon.addEventListener("click", (e) => {
      let parenElem = e.target.closest(".list_item");
      let currentText = parenElem.querySelector(".task");
      let newText = prompt("Edit Todo", currentText.textContent);

      if (newText === null || newText === "") {
        alert("Please enter a todo");
        return;
      }

      let id = parenElem.getAttribute("data-id");
      let findTodo = api.find((todo) => todo.id == id);
      if (newText !== null && newText !== "") {
        findTodo.title = newText;
        createTodo();
      }
    });

    input.value = "";
  });
}
deleteAllBtn.addEventListener("click", () => {
  if (confirm("Bütün tapşırıqları silmək istədiyinizə əminsiniz?")) {
    api = [];
    createTodo();
  }
});
createTodo();
