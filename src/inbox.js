const inbox = (projects, tasks) => {
  const inboxDiv = document.createElement("div");

  const inboxHeading = document.createElement("h3");
  inboxHeading.textContent = "Inbox";

  const inboxTask = document.createElement("p");
  inboxTask.textContent = "Test";

  inboxDiv.appendChild(inboxHeading);
  inboxDiv.appendChild(inboxTask);

  return inboxDiv.outerHTML;
};

export default inbox;
