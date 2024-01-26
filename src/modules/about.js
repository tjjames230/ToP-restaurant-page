export { loadAbout };
import foodImage from "../assets/images/food.jpg";

const main = document.querySelector("#main");

function loadAbout() {
  main.innerHTML = "";
  aboutContent();
}

function aboutContent() {
  // create & style img
  (function () {
    const img = document.createElement("img");
    img.src = foodImage;
    img.style.width = "100%";
    img.style.maxWidth = "800px";
    main.appendChild(img);
  })();

  // create & style text
  (function () {
    const text = document.createElement("p");
    text.textContent =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima adipisci impedit illum, voluptatem tempora nisi placeat alias a nihil quod beatae voluptatibus repudiandae odio temporibus. Totam odit laboriosam officiis hic quidem quis doloremque pariatur esse fugiat delectus nostrum voluptatibus natus aut, eos excepturi maxime. Quam quas fuga maxime tempora!";
    text.style.maxWidth = "800px";
    text.style.lineHeight = "2";
    main.appendChild(text);
  })();
}
