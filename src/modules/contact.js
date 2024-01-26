export { loadContact };

const main = document.querySelector("#main");

function loadContact() {
  main.innerHTML = "";
  contactContent();
}

function contactContent() {
  // creating/styling h1
  (function () {
    const headerOne = document.createElement("h1");
    headerOne.textContent = "Contact Us!";
    headerOne.style.margin = "0";
    main.appendChild(headerOne);
  })();

  // create contact text
  (function () {
    const parentDiv = document.createElement("div");
    parentDiv.style.backgroundColor = "red";
    parentDiv.style.display = "flex";
    parentDiv.style.maxWidth = "500px";
    parentDiv.style.gap = "25px";
    parentDiv.style.flexDirection = "column";

    function createChildDiv(fullName, phone, blurb) {
      const childDiv = document.createElement("div");
      childDiv.style.display = "flex";
      childDiv.style.flexDirection = "column";
      childDiv.style.backgroundColor = "gray";
      childDiv.style.textAlign = "center";
      childDiv.style.padding = "0 25px";
      childDiv.style.lineHeight = "1";

      //Add Name
      (function () {
        const p = document.createElement("p");
        p.textContent = fullName;
        childDiv.appendChild(p);
      })(fullName);

      //Add Phone
      (function () {
        const p = document.createElement("p");
        p.textContent = phone;
        childDiv.appendChild(p);
      })(phone);

      //Add blurb
      (function () {
        const p = document.createElement("p");
        p.textContent = blurb;
        childDiv.appendChild(p);
      })(blurb);

      parentDiv.appendChild(childDiv);
    }

    createChildDiv(
      "John Smith",
      "012-345-6789",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima adipisci impedit illum."
    );

    createChildDiv(
      "Jane Smith",
      "012-345-8967",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima adipisci impedit illum."
    );

    createChildDiv(
      "Joe Smith",
      "012-345-1234",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima adipisci impedit illum."
    );

    main.appendChild(parentDiv);
  })();

  //
}
