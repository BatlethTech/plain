const selectBox = document.querySelector("#choose-option");
const placeHolder = document.querySelector("#pre-value");

selectBox.addEventListener("change", () => {
    const val = selectBox.val;
    updateDisplay(val);
});

function updateDisplay(val) {
    let url = "";
    switch (val) {
        case "1":
            url = "assets/one.txt";
            break;
        case "2":
            url = "assets/two.txt";
            break;
        default:
            break;
    }

    if (url == "") {
        placeHolder.textContent = "Empty";
        return;
    }

    fetch(url)
    .then((response) => {
        if (!response.ok) {
            console.log("Fetch error", response.status);
        }

        return response.text();
    })
    .then((value) => {
        console.log(value);
        placeHolder.textContent = value;
    })
    .catch((reason) => {
        placeHolder.textContent = "Error";
        console.log(reason);
    });
}