var isGreen = false;
var isFirstClick = true;

document.getElementById("btn").onclick = function () {

    if (isFirstClick) {
        document.body.style.backgroundColor = "green";
        isFirstClick = false;
        isGreen = true;
    }
    else if (isGreen) {
        document.body.style.backgroundColor = "red";
        isGreen = false;
    }
    else {
        document.body.style.backgroundColor = "green";
        isGreen = true;
    }

};
