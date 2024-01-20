export { loadHome };
import foodImage from "../assets/images/food.jpg";

const main = document.querySelector("#main");

function loadHome() {
  main.innerHTML = "";
  homeContent();
}

function homeContent() {
  // creating/styling h1
  (function () {
    const headerOne = document.createElement("h1");
    headerOne.textContent = "Welcome to OUR RESTAURANT!";
    headerOne.style.margin = "0";
    main.appendChild(headerOne);
  })();

  //creating/styling image
  (function () {
    const img = document.createElement("img");
    img.src = foodImage;
    main.appendChild(img);
  })();
}
