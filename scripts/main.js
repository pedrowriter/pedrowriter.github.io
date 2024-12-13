const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "imagens/6-7.jpg") {
    myImage.setAttribute("src", "imagens/303894.jpg");
  } else {
    myImage.setAttribute("src", "imagens/6-7.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Por favor, digite o seu nome");
  localStorage.setItem("name", myName);
  myHeading.textContent = `Mozilla é legal, ${myName}`;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla é legal, ${storedName}`;
}

myButton.onclick = () => {
  setUserName();
};
