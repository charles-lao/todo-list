/* eslint-disable no-alert */
/* eslint-disable import/no-cycle */
import storage from "./storage";
import inbox from "./inbox";

const display = (() => {
  const rightContent = document.querySelector("#right-content");

  const init = () => {
    rightContent.innerHTML = inbox.displayContent(
      storage.projectStorage,
      storage.taskStorage
    );
    inbox.setListeners();
  };

  const testDisplay = () => {
    alert("success");
  };

  const refreshContent = (project) => {
    rightContent.innerHTML = "";

    switch (project) {
      case "default":
        rightContent.innerHTML = inbox.displayContent(
          storage.projectStorage,
          storage.taskStorage
        );
        inbox.setListeners();
        break;
      default:
        rightContent.innerHTML = inbox.displayContent(
          storage.projectStorage,
          storage.taskStorage
        );
        inbox.setListeners();
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
