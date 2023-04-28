/* eslint-disable no-alert */
/* eslint-disable import/no-cycle */
import storage from "./storage";
import inbox from "./inbox";
import today from "./today";
import thisWeek from "./thisWeek";
import projectPage from "./projectPage";

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
    projectsList.textContent = "";

    if (storage.projectStorage != null) {
      for (let i = 0; i < storage.projectStorage.length; i++) {
        const projectLi = document.createElement("li");
        projectLi.setAttribute("class", "project");

        const xBtn = document.createElement("p");
        xBtn.textContent = "X";
        xBtn.setAttribute("class", "x-project");
        xBtn.setAttribute("data-index", i);

        const projectName = document.createElement("p");
        projectName.textContent = storage.projectStorage[i];
        projectName.setAttribute("class", "project-name");
        projectName.setAttribute("data-index", i);

        projectLi.appendChild(projectName);
        // projectLi.textContent = storage.projectStorage[i];
        projectLi.appendChild(xBtn);
        projectsList.appendChild(projectLi);
      }
    }
  };

  const displayProjectPage = (currProject) => {
    rightContent.innerHTML = projectPage.displayContent(
      currProject,
      storage.taskStorage
    );
    projectPage.setListeners(currProject);
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
        displayProjectPage(project);
        break;
    }
  };

  // contains all the listeners for the homepage
  const setListeners = () => {
    const inboxLi = document.querySelector("#inbox");
    const todayLi = document.querySelector("#today");
    const thisWeekLi = document.querySelector("#this-week");
    const addProjectDiv = document.querySelector("#add-project-div");
    const addProjectInput = document.querySelector("#add-project-input");
    const addProject = document.querySelector("#add-project");
    const addProjectBtn = document.querySelector("#add-project-btn");
    const cancelProjectBtn = document.querySelector("#cancel-project-btn");
    const xProjectBtns = document.querySelectorAll(".x-project");
    const projectNames = document.querySelectorAll(".project-name");

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

    // toggles the display of add project div and the h3
    addProject.addEventListener("click", (e) => {
      addProjectDiv.style.display = "flex";
      addProject.style.display = "none";
    });

    cancelProjectBtn.addEventListener("click", (e) => {
      addProjectDiv.style.display = "none";
      addProject.style.display = "flex";
    });

    addProjectBtn.addEventListener("click", (e) => {
      storage.addProject(addProjectInput.value);
      displayProjects();
    });

    xProjectBtns.forEach((xProjectBtn) => {
      xProjectBtn.addEventListener("click", (e) => {
        const projectIndex = e.target.getAttribute("data-index");
        storage.deleteProject(projectIndex);
        displayProjects();
      });
    });

    projectNames.forEach((projectName) => {
      projectName.addEventListener("click", (e) => {
        const projectIndex = e.target.getAttribute("data-index");

        displayProjectPage(storage.projectStorage[projectIndex]);
      });
    });
  };

  // initialize
  const init = () => {
    displayInbox();
    displayProjects();
    setListeners();
  };

  return {
    init,
    refreshContent,
  };
})();

export default display;
