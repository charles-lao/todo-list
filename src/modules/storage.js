import Task from './task';

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

  };


  // const testItem = Task(
  //   Date.now(),
  //   "4 test title",
  //   "4 test description",
  //   "4 test duedate",
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
  };
})();

export default storage;
