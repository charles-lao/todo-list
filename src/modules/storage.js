import { format } from "date-fns";
import Task from "./task";
import display from "./display";

const storage = (() => {
  // copy contents of local storage to the variables if they exist
  let projectStorage = [];
  let taskStorage = [];

  if (localStorage.getItem("projectStorage") !== null) {
    projectStorage = JSON.parse(localStorage.getItem("projectStorage"));
  }

  if (localStorage.getItem("taskStorage") !== null) {
    taskStorage = JSON.parse(localStorage.getItem("taskStorage"));
  }

  // copy the current value of the variables to the local storage
  const updateLocalStorage = () => {
    localStorage.setItem("taskStorage", JSON.stringify(taskStorage));
    localStorage.setItem("projectStorage", JSON.stringify(projectStorage));
  };

  const deleteTask = (taskIdNo, project) => {
    for (let i = 0; i < taskStorage.length; i++) {
      if (taskStorage[i].idNo == taskIdNo) {
        taskStorage.splice(i, 1);
        updateLocalStorage();
        display.refreshContent(project);
      }
    }
  };

  const addTask = (title, project) => {
    const newTask = Task(
      Date.now(), // unique id
      title,
      "description",
      format(new Date(), "MM/dd/yyyy"),
      "low",
      project
    );

    taskStorage.push(newTask);
    updateLocalStorage();
  };

  const editTask = (taskIdNo, newTitle, project) => {
    for (let i = 0; i < taskStorage.length; i++) {
      if (taskStorage[i].idNo == taskIdNo) {
        taskStorage[i].title = newTitle;
        updateLocalStorage();
        display.refreshContent(project);
      }
    }
  };

  const addProject = (name) => {
    projectStorage.push(name);
    updateLocalStorage();
  };

  const deleteProject = (index) => {
    projectStorage.splice(index, 1);
    updateLocalStorage();
  };

  // const testItem = Task(
  //   Date.now(),
  //   "4 test title",
  //   "4 test description",
  //   format(new Date(), "MM/dd/yyyy"),
  //   "4 test priority",
  //   "default"
  // );
  // console.log(testItem);

  // taskStorage.push(testItem);
  // updateLocalStorage();

  return {
    projectStorage,
    taskStorage,
    updateLocalStorage,
    deleteTask,
    addTask,
    addProject,
    deleteProject,
    editTask,
  };
})();

export default storage;
