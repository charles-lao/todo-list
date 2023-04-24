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

  const testDisplay = () => {
    alert("success");
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

  const setListeners = () => {
    const inboxLi = document.querySelector("#inbox");
    const todayLi = document.querySelector("#today");
    const thisWeekLi = document.querySelector("#this-week");

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
  };

  // initialize
  const init = () => {
    displayInbox();
    setListeners();
  };

  return {
    init,
    testDisplay,
    refreshContent,
  };
})();

export default display;
