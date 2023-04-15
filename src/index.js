import Task from "./todoItem";
import "./styles/style.css";
import inbox from "./inbox";

// const testItem = Task('test title', 'test description', 'test duedate', 'test priority');

const storageController = (() => {
  const projectStorage = [];
  const taskStorage = [];

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
