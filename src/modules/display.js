import storage from "./storage";
import inbox from "./inbox";

const display = (() => {
  const rightContent = document.querySelector("#right-content");

  const init = () => {
    rightContent.innerHTML = inbox(storage.projectStorage, storage.taskStorage);
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
