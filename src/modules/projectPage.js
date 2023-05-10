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
          taskDetails.setAttribute("class", "task-details");
          taskDetails.setAttribute("data-id", tasks[i].idNo);
          taskDetails.textContent = tasks[i].title;

          const taskDetailsInput = document.createElement("input");
          taskDetailsInput.setAttribute("value", tasks[i].title);
          taskDetailsInput.setAttribute("class", "task-details-input");
          taskDetailsInput.setAttribute("data-id", tasks[i].idNo);
          taskDetailsInput.type = "text";

          const taskDueDate = document.createElement("p");
          taskDueDate.textContent = tasks[i].dueDate;

          taskDiv.appendChild(btn);
          taskDiv.appendChild(taskDetails);
          taskDiv.appendChild(taskDetailsInput);
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
    const taskDetails = document.querySelectorAll(".task-details");
    const taskDetailsInputs = document.querySelectorAll(".task-details-input");

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

    // toggle the display for the task details input
    taskDetails.forEach((taskDetail) => {
      taskDetail.addEventListener("click", (e) => {
        const dataID = e.target.getAttribute("data-id");

        // reinitializes display for non selected taskDetail
        taskDetails.forEach((taskDeet) => {
          taskDeet.setAttribute("style", "display: flex;");
        });

        taskDetail.setAttribute("style", "display: none;");

        taskDetailsInputs.forEach((taskDetailsInput) => {
          if (taskDetailsInput.getAttribute("data-id") == dataID) {
            taskDetailsInput.setAttribute("style", "display: flex;");

            taskDetailsInput.addEventListener("keypress", (e) => {
              if (e.keyCode === 13) {
                storage.editTask(dataID, taskDetailsInput.value, projectName);
              }
            });
          } else {
            taskDetailsInput.setAttribute("style", "display: none;");
          }
        });
      });
    });
  };

  return { displayContent, setListeners };
})();

export default projectPage;
