export { init };
import { loadHome } from "./home.js";
import { loadAbout } from "./about.js";
import { loadContact } from "./contact.js";

const main = document.querySelector("#main");
const aside = document.querySelector("#aside");

function init() {
  // styling body
  styleBody();

  // function to handle content creation and styling for aside
  createAside();

  // function to handle content creation and styling for main (home)
  createMain();

  // function from home.js to load home content
  loadHome();
}

function styleBody() {
  const body = document.querySelector("body");
  body.style.display = "flex";
  body.style.margin = "0";
  body.style.padding = "0";
  body.style.fontFamily = "Arial";
}

function createAside() {
  //IIFE for styling aside
  (function () {
    aside.style.display = "flex";
    aside.style.flexDirection = "column";
    aside.style.gap = "15px";
    aside.style.alignItems = "center";
    aside.style.width = "20%";
    aside.style.height = "100vh";
    aside.style.minWidth = "275px";
    aside.style.padding = "50px";
  })();

  // IIFE for adding content & event listener
  (function () {
    function btnEvent() {
      const btnText = this.textContent;
      if (btnText === "Home") {
        loadHome();
      } else if (btnText === "About") {
        loadAbout();
      } else if (btnText === "Contact") {
        loadContact();
      }
    }

    function createBtn(text) {
      const btn = document.createElement("button");
      btn.textContent = text;
      btn.addEventListener("click", btnEvent);
      btnStyle(btn);
      aside.appendChild(btn);
    }

    createBtn("Home");
    createBtn("About");
    createBtn("Contact");
  })();

  // IIFE for adding styling, which is called during creation
  function btnStyle(btn) {
    btn.style.padding = "15px 35px";
    btn.style.border = "none";
    btn.style.width = "100%";
  }
}

function createMain() {
  main.style.backgroundColor = "#cccccc";
  main.style.height = "100vh";
  main.style.width = "80%";
  main.style.padding = "50px";
  main.style.display = "flex";
  main.style.flexDirection = "column";
  main.style.gap = "15px";
  main.style.alignItems = "center";
}
