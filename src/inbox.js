const inbox = (projects, tasks) => {
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

  return inboxDiv.outerHTML;
};

export default inbox;
