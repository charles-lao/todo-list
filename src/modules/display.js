/* eslint-disable no-alert */
/* eslint-disable import/no-cycle */
import storage from "./storage";
import { displayInbox, setInboxListeners } from "./inbox";


const display = (() => {
  const rightContent = document.querySelector("#right-content");

  const init = () => {
    rightContent.innerHTML = displayInbox(storage.projectStorage, storage.taskStorage);
    setInboxListeners();
  };

  const testDisplay = () => {
    alert("success");
  };

  return {
    init,
    testDisplay,
  };
})();

export default display;
