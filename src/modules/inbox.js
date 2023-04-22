import display from "./display";
import "../styles/style.css";
import storage from './storage';


const displayInbox = (projects, tasks) => {
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
      btn.setAttribute('data-index', i);

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

  // display.testDisplay();

  return inboxDiv.outerHTML;
};


const setInboxListeners = () => {
  const buttons = document.querySelectorAll(".circle-btn");

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      alert(e);
    });
  });
};



export { displayInbox, setInboxListeners };
