const jsButton = document.getElementById("btn-js");
const phpButton = document.getElementById("btn-php");
const showImage = document.getElementById("image");
const buttonOne = document.getElementById("btn-1");
const buttonTwo = document.getElementById("btn-2");
const buttonThree = document.getElementById("btn-3");
const buttonFour = document.getElementById("btn-4");
const buttons = [buttonOne, buttonTwo, buttonThree, buttonFour];
const languages = [jsButton, phpButton];

// Algorithm 1
/*
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
*/

// Algorithm 2
function handleLanguages(lang) {
    switch(lang) {
        case jsButton: {
            let colors = ["Orange", "Purple", "Red", "Grey"];
            showImage.setAttribute("src", "./images/js_orange.jpg");
            for (let i of colors) {
                buttons[i].innerHTML = colors[i];
            }
            break;
        }
        case phpButton: {
            let colors = ["Green", "Brown", "Pink", "Blue"];
            showImage.setAttribute("src", "./images/php_green.jpg");
            for (let i of colors) {
                buttons[i].innerHTML = colors[i];
            }
            break;
        }
    }
}

function handleColors(num, color) {
    switch(num) {
        case buttonOne: {
            switch(color) {
                case "Orange": showImage.setAttribute("src", "./images/js_orange.jpg"); break;
                case "Green": showImage.setAttribute("src", "./images/php_green.jpg"); break;
            }
            break;
        }
        case buttonTwo: {
            switch(color) {
                case "Purple": showImage.setAttribute("src", "./images/js_purple.jpg"); break;
                case "Brown": showImage.setAttribute("src", "./images/php_brown.jpg"); break;
            }
            break;
        }
        case buttonThree: {
            switch(color) {
                case "Red": showImage.setAttribute("src", "./images/js_red.jpg"); break;
                case "Pink": showImage.setAttribute("src", "./images/php_pink.jpg"); break;
            }
            break;
        }
        case buttonFour: {
            switch(color) {
                case "Grey": showImage.setAttribute("src", "./images/js_grey.jpg"); break;
                case "Blue": showImage.setAttribute("src", "./images/php_blue.jpg"); break;
            }
            break;
        }
    }
}

jsButton.addEventListener("click", () => {
    handleLanguages(jsButton);
})

phpButton.addEventListener("click", () => {
    handleLanguages(phpButton);
})

buttonOne.addEventListener("click", () => {
    handleColors(buttonOne, buttonOne.innerHTML);
})

buttonTwo.addEventListener("click", () => {
    handleColors(buttonTwo, buttonTwo.innerHTML);
})

buttonThree.addEventListener("click", () => {
    handleColors(buttonThree, buttonThree.innerHTML);
})

buttonFour.addEventListener("click", () => {
    handleColors(buttonFour, buttonFour.innerHTML);
})