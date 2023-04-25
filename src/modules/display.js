/* eslint-disable no-alert */
/* eslint-disable import/no-cycle */
import storage from "./storage";
import inbox from "./inbox";
import today from "./today";
import thisWeek from "./thisWeek";

const display = (() => {
  const rightContent = document.querySelector("#right-content");

  const displayInbox = () => {
    rightContent.innerHTML = inbox.displayContent(
      storage.projectStorage,
      storage.taskStorage
    );
    inbox.setListeners();
  };

  const displayToday = () => {
    rightContent.innerHTML = today.displayContent(
      storage.projectStorage,
      storage.taskStorage
    );
    today.setListeners();
  };

  const displayThisWeek = () => {
    rightContent.innerHTML = thisWeek.displayContent(
      storage.projectStorage,
      storage.taskStorage
    );
    today.setListeners();
  };

  const displayProjects = () => {

    const projectsList = document.querySelector("#projects-list");
    projectsList.textContent = '';

    if (storage.projectStorage != null) {
      for (let i = 0; i < storage.projectStorage.length; i++) {
        
        const projectLi = document.createElement("li");
        projectLi.setAttribute("class", "project");

        const xBtn = document.createElement("p");
        xBtn.textContent = "X";
        xBtn.setAttribute("class", "x-project");

        const projectName = document.createElement("p");
        projectName.textContent = storage.projectStorage[i];

        projectLi.appendChild(projectName);
        // projectLi.textContent = storage.projectStorage[i];
        projectLi.appendChild(xBtn);
        projectsList.appendChild(projectLi);
      }
    }
  };

  // redisplays the current content
  const refreshContent = (project) => {
    switch (project) {
      case "default":
        displayInbox();
        break;

      case "today":
        displayToday();
        break;

      case "this-week":
        displayThisWeek();
        break;

      default:
        displayInbox();
        break;
    }
  };

  // contains all the listeners for the homepage
  const setListeners = () => {
    const inboxLi = document.querySelector("#inbox");
    const todayLi = document.querySelector("#today");
    const thisWeekLi = document.querySelector("#this-week");
    const addProjectInput = document.querySelector("#add-project-input");
    const addProject = document.querySelector("#add-project");
    const addProjectBtn = document.querySelector("#add-project-btn");
    const cancelProjectBtn = document.querySelector("#cancel-project-btn");

    inboxLi.addEventListener("click", () => {
      displayInbox();
    });

    // display today when clicked
    todayLi.addEventListener("click", () => {
      displayToday();
    });

    thisWeekLi.addEventListener("click", () => {
      displayThisWeek();
    });

    addProject.addEventListener("click", (e) => {
      // add function for displaying the text input for new projects
    });

    addProjectBtn.addEventListener("click", (e) => {
      storage.addProject(addProjectInput.value);
      displayProjects();
    });
  };

  // initialize
  const init = () => {
    displayInbox();
    setListeners();
    displayProjects();
  };

  return {
    init,
    refreshContent,
  };
})();

export default display;
