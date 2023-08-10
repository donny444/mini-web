const jsButton = document.getElementById("btn-js");
const phpButton = document.getElementById("btn-php");
const showImage = document.getElementById("image");
const buttonOne = document.getElementById("btn-1");
const buttonTwo = document.getElementById("btn-2");
const buttonThree = document.getElementById("btn-3");
const buttonFour = document.getElementById("btn-4");

jsButton.addEventListener("click", () => {
    showImage.setAttribute("src", "./images/js_orange.jpg");
    buttonOne.innerHTML = "Orange";
    buttonTwo.innerHTML = "Purple";
    buttonThree.innerHTML = "Red";
    buttonFour.innerHTML = "Grey";
});

phpButton.addEventListener("click", () => {
    showImage.setAttribute("src", "./images/php_green.jpg");
    buttonOne.innerHTML = "Green";
    buttonTwo.innerHTML = "Brown";
    buttonThree.innerHTML = "Pink";
    buttonFour.innerHTML = "Blue";
});

buttonOne.addEventListener("click", () => {
    if(buttonOne.innerHTML == "Orange") {
        showImage.setAttribute("src", "./images/js_orange.jpg");
    } else {
        showImage.setAttribute("src", "./images/php_green.jpg");
    }
});

buttonTwo.addEventListener("click", () => {
    if(buttonTwo.innerHTML == "Purple") {
        showImage.setAttribute("src", "./images/js_purple.jpg");
    } else {
        showImage.setAttribute("src", "./images/php_brown.jpg");
    }
});

buttonThree.addEventListener("click", () => {
    if(buttonThree.innerHTML == "Red") {
        showImage.setAttribute("src", "./images/js_red.jpg");
    } else {
        showImage.setAttribute("src", "./images/php_pink.jpg");
    }
});

buttonFour.addEventListener("click", () => {
    if(buttonFour.innerHTML == "Grey") {
        showImage.setAttribute("src", "./images/js_grey.jpg");
    } else {
        showImage.setAttribute("src", "./images/php_blue.jpg");
    }
});