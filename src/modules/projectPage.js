import { format } from "date-fns";
import display from "./display";
import "../styles/style.css";
import storage from "./storage";

const projectPage = (() => {
  const displayContent = (projectName, tasks) => {
    const projectDiv = document.createElement("div");
    projectDiv.setAttribute("id", "right-container");

    const projectHeading = document.createElement("h3");
    projectHeading.textContent = projectName;

    projectDiv.appendChild(projectHeading);

    if (tasks != null) {
      for (let i = 0; i < tasks.length; i++) {
        // compare date and check if dueDate is equal to today
        if (tasks[i].project == projectName) {
          const taskDiv = document.createElement("div");
          taskDiv.setAttribute("class", "task-div");

          const btn = document.createElement("button");
          btn.setAttribute("class", "circle-btn");
          btn.setAttribute("data-id", tasks[i].idNo);

          const taskDetails = document.createElement("p");
          taskDetails.textContent = tasks[i].title;

          const taskDueDate = document.createElement("p");
          taskDueDate.textContent = tasks[i].dueDate;

          taskDiv.appendChild(btn);
          taskDiv.appendChild(taskDetails);
          taskDiv.appendChild(taskDueDate);

          projectDiv.appendChild(taskDiv);
        }
      }
    }

    const addTaskDiv = document.createElement("div");
    addTaskDiv.setAttribute("id", "add-task-div");

    const addTaskH4 = document.createElement("h4");
    addTaskH4.textContent = "Add Task";
    addTaskH4.setAttribute("id", "add-task-h4");

    const addTaskInput = document.createElement("input");
    addTaskInput.setAttribute("type", "text");
    addTaskInput.setAttribute("id", "add-task-input");
    addTaskInput.setAttribute("placeholder", "Task name");

    const btnDiv = document.createElement("div");

    const addBtn = document.createElement("button");
    addBtn.setAttribute("id", "add-task-btn");
    addBtn.textContent = "Add";

    const cancelBtn = document.createElement("button");
    cancelBtn.setAttribute("id", "cancel-task-btn");
    cancelBtn.textContent = "Cancel";

    addTaskDiv.appendChild(addTaskInput);
    btnDiv.appendChild(addBtn);
    btnDiv.appendChild(cancelBtn);
    addTaskDiv.appendChild(btnDiv);

    projectDiv.appendChild(addTaskH4);
    projectDiv.appendChild(addTaskDiv);

    return projectDiv.outerHTML;
  };

  const setListeners = (project) => {
    const projectName = project;

    const buttons = document.querySelectorAll(".circle-btn");
    const addTaskH4 = document.querySelector("#add-task-h4");
    const addTaskDiv = document.querySelector("#add-task-div");
    const cancelTaskBtn = document.querySelector("#cancel-task-btn");
    const addTaskBtn = document.querySelector("#add-task-btn");
    const addTaskInput = document.querySelector("#add-task-input");

    buttons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const dataId = e.target.getAttribute("data-id");

        // call the delete task
        storage.deleteTask(dataId, projectName);
      });
    });

    // listener to toggle the display of add task elements
    addTaskH4.addEventListener("click", (e) => {
      addTaskH4.style.display = "none";
      addTaskDiv.style.display = "flex";
    });

    cancelTaskBtn.addEventListener("click", (e) => {
      addTaskH4.style.display = "inline-flex";
      addTaskDiv.style.display = "none";
    });

    addTaskBtn.addEventListener("click", (e) => {
      storage.addTask(addTaskInput.value, projectName);
      display.refreshContent(projectName);
    });
  };

  return { displayContent, setListeners };
})();

export default projectPage;
