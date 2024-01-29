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
    parentDiv.style.display = "flex";
    parentDiv.style.maxWidth = "500px";
    parentDiv.style.gap = "25px";
    parentDiv.style.flexDirection = "column";

    function createChildDiv(fullName, phone, blurb) {
      // Create and style each contact card
      const childDiv = document.createElement("div");
      childDiv.style.display = "flex";
      childDiv.style.flexDirection = "column";
      childDiv.style.background = "hsla(0, 0%, 100%, 80%)";
      childDiv.style.borderRadius = "10px";
      childDiv.style.textAlign = "center";
      childDiv.style.padding = "20px";
      childDiv.style.gap = "15px";
      childDiv.style.lineHeight = "1";

      const nameCtn = document.createElement("div");
      nameCtn.style.display = "flex";
      nameCtn.style.width = "100%";
      nameCtn.style.justifyContent = "space-around";
      childDiv.appendChild(nameCtn);

      //Add Name
      (function () {
        const p = document.createElement("p");
        p.textContent = fullName;
        p.style.fontWeight = "700";
        p.style.margin = "0";
        nameCtn.appendChild(p);
      })(fullName);

      //Add Phone
      (function () {
        const p = document.createElement("p");
        p.textContent = phone;
        p.style.margin = "0";
        nameCtn.appendChild(p);
      })(phone);

      //Add blurb
      (function () {
        const p = document.createElement("p");
        p.textContent = blurb;
        p.style.fontSize = "14px";
        p.style.margin = "0";
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
