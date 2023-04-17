import Task from "./todoItem";
import "./styles/style.css";
import inbox from "./inbox";

const storageController = (() => {
  // copy contents of local storage to the variables if they exist
  let projectStorage = [];
  let taskStorage = [];

  if (localStorage.getItem("projectStorage") !== null) {
    projectStorage = JSON.parse(localStorage.getItem("projectStorage"));
  }

  if (localStorage.getItem("taskStorage") !== null) {
    taskStorage = JSON.parse(localStorage.getItem("taskStorage"));
  }

  const testItem = Task(
    "test title",
    "test description",
    "test duedate",
    "test priority",
    "default"
  );
  // console.log(testItem);

  taskStorage.push(testItem);
  localStorage.setItem("taskStorage", JSON.stringify(taskStorage));

  console.log(taskStorage);

  return {
    projectStorage,
    taskStorage,
  };
})();

const displayController = (() => {
  const rightContent = document.querySelector("#right-content");

  const init = () => {
    rightContent.innerHTML = inbox(
      storageController.projectStorage,
      storageController.taskStorage
    );
  };

  return {
    init,
  };
})();

displayController.init();
