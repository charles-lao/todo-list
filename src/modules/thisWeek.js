import { format, isThisWeek, parse } from "date-fns";
import display from "./display";
import "../styles/style.css";
import storage from "./storage";

const thisWeek = (() => {
  const displayContent = (projects, tasks) => {
    const inboxDiv = document.createElement("div");
    inboxDiv.setAttribute("id", "right-container");

    const inboxHeading = document.createElement("h3");
    inboxHeading.textContent = "Inbox";

    inboxDiv.appendChild(inboxHeading);

    if (tasks != null) {
      for (let i = 0; i < tasks.length; i++) {
        // parse the date string back to ISO
        const dateNow = parse(tasks[i].dueDate, "MM/dd/yyyy", new Date());

        if (isThisWeek(dateNow)) {
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
          taskDiv.appendChild(taskDueDate);

          inboxDiv.appendChild(taskDiv);
        }
      }
    }

    return inboxDiv.outerHTML;
  };

  const setListeners = () => {
    const buttons = document.querySelectorAll(".circle-btn");
    const taskDetails = document.querySelectorAll(".task-details");
    const taskDetailsInputs = document.querySelectorAll(".task-details-input");

    buttons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const dataId = e.target.getAttribute("data-id");

        // call the delete task
        storage.deleteTask(dataId, "this-week");
      });
    });

    // toggle the display for the task details input
    taskDetails.forEach((taskDetail) => {
      taskDetail.addEventListener("click", (e) => {
        const dataID = e.target.getAttribute("data-id");
        alert(dataID);
        // reinitializes display for non selected taskDetail
        taskDetails.forEach((taskDeet) => {
          taskDeet.setAttribute("style", "display: flex;");
        });

        // taskDetail.setAttribute("style", "display: none;");

        taskDetailsInputs.forEach((taskDetailsInput) => {
          if (taskDetailsInput.getAttribute("data-id") == dataID) {
            taskDetailsInput.setAttribute("style", "display: flex;");

            taskDetailsInput.addEventListener("keypress", (e) => {
              if (e.keyCode === 13) {
                storage.editTask(dataID, taskDetailsInput.value, "default");
              }
            });
          } else {
            // taskDetailsInput.setAttribute("style", "display: none;");
          }
        });
      });
    });
  };

  return { displayContent, setListeners };
})();

export default thisWeek;
