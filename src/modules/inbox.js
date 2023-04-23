import display from "./display";
import "../styles/style.css";
import storage from "./storage";

const inbox = (() => {
  const displayContent = (projects, tasks) => {
    const inboxDiv = document.createElement("div");
    inboxDiv.setAttribute("id", "right-container");

    const inboxHeading = document.createElement("h3");
    inboxHeading.textContent = "Inbox";

    inboxDiv.appendChild(inboxHeading);

    if (tasks != null) {
      for (let i = 0; i < tasks.length; i++) {
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

        inboxDiv.appendChild(taskDiv);
      }
    }

    const addTaskDiv = document.createElement("div");
    addTaskDiv.setAttribute("id", "add-task-div");

    const addTaskInput = document.createElement("input");
    addTaskInput.setAttribute("type", "text");

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

    inboxDiv.appendChild(addTaskDiv);

    // display.testDisplay();

    return inboxDiv.outerHTML;
  };

  const setListeners = () => {
    const buttons = document.querySelectorAll(".circle-btn");

    buttons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const dataId = e.target.getAttribute("data-id");

        // call the delete task
        storage.deleteTask(dataId, "default");
      });
    });
  };

  return { displayContent, setListeners };
})();

export default inbox;
