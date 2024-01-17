export { init };
import { loadHome } from "./home.js";

const main = document.querySelector("#main");
const aside = document.querySelector("#aside");

function init() {
  // function to handle element content for aside
  createAside();
}

function createAside() {
  // IIFE for adding content
  (function () {
    function createBtn(text) {
      const btn = document.createElement("button");
      btn.textContent = text;
      aside.appendChild(btn);
    }

    createBtn("Home");
    createBtn("About");
    createBtn("Contact");
  })();

  // IIFE for adding styling
  (function () {})();
}
