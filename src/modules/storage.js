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

  // const testItem = Task(
  //   "test title",
  //   "test description",
  //   "test duedate",
  //   "test priority",
  //   "default"
  // );
  // console.log(testItem);

  // taskStorage.push(testItem);
  
  // copy the current value of the variables to the local storage
  const updateLocal = () => {

    localStorage.setItem("taskStorage", JSON.stringify(taskStorage));
    localStorage.setItem("projectStorage", JSON.stringify(projectStorage));

  };

  console.log(taskStorage);

  return {
    projectStorage,
    taskStorage,
    updateLocal,
  };
})();

export default storage;
