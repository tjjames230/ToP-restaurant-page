export { loadHome };

const main = document.querySelector("#main");

function loadHome() {
  homeContent();
}

function homeContent() {
  const headerOne = document.createElement("h1");
  headerOne.textContent = "Welcome to OUR RESTAURANT!";
  main.appendChild(headerOne);
}
