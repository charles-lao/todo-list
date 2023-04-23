/* eslint-disable no-alert */
/* eslint-disable import/no-cycle */
import storage from "./storage";
import inbox from "./inbox";
import today from './today';

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
  }


  // initialize
  const init = () => {
    displayInbox();
  };

  const testDisplay = () => {
    alert("success");
  };

  const refreshContent = (project) => {

    switch (project) {
      case "default":
        displayInbox();
        break;

      case 'today':
        displayToday();
        break;

      default:
        displayInbox();
        break;
    }
  };

  

  

  return {
    init,
    testDisplay,
    refreshContent,
  };
})();

export default display;
