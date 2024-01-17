export { addContent };

const content = document.querySelector("#content");

function addContent() {
  const h1 = document.createElement("h1");
  const p = document.createElement("p");
  const img = document.createElement("img");

  h1.textContent = "The most exceptional restaurant";
  p.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores libero autem enim provident, quae sit quasi dignissimos nihil harum aliquid cupiditate, architecto quibusdam? Voluptas quaerat quis vero magnam distinctio ipsum expedita nemo quibusdam deleniti, assumenda dolorem laudantium placeat impedit minima ab error fuga, dolor blanditiis rerum? Mollitia tenetur, non unde reprehenderit nam impedit iusto amet aliquam, exercitationem commodi cumque assumenda laudantium deserunt. Itaque saepe explicabo nam soluta animi quae optio.";
  img.src = "https://placehold.co/600x400";

  content.appendChild(h1);
  content.appendChild(img);
  content.appendChild(p);
}
