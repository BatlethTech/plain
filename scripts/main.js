
const topHeading = document.querySelector("h1");
topHeading.textContent = "Salam";


const carImage = document.querySelector("img");
carImage.onclick = () => {
  const mySrc = carImage.getAttribute("src");
  if (mySrc === "images/car.png") {
    carImage.setAttribute("src", "images/car-front.jpg");
  } else {
    carImage.setAttribute("src", "images/car.png");
  }
};

function setUserName() {
    let userName = prompt("Please enter your name.");

    if (userName.trim() == "") {
        userName = "*Prefer not to disclose*";
    }

    localStorage.setItem("name", userName);
    topHeading.textContent = `Sunny is cool, ${userName}`;
}

let toggleButton = document.querySelector("button");
toggleButton.onclick = () => {
    setUserName();
};

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    topHeading.textContent = `Sunny is cool, ${storedName}`;
}
  