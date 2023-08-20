const jsButton = document.getElementById("btn-js");
const phpButton = document.getElementById("btn-php");
const showImage = document.getElementById("image");
const buttonOne = document.getElementById("btn-1");
const buttonTwo = document.getElementById("btn-2");
const buttonThree = document.getElementById("btn-3");
const buttonFour = document.getElementById("btn-4");
const colorOne = buttonOne.innerHTML;
const colorTwo = buttonTwo.innerHTML;
const colorThree = buttonThree.innerHTML;
const colorFour = buttonFour.innerHTML;
const buttons = [buttonOne, buttonTwo, buttonThree, buttonFour];
const languages = [jsButton, phpButton];
const colors = [colorOne, colorTwo, colorThree, colorFour];

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
            var langColors = ["Orange", "Purple", "Red", "Grey"];
            showImage.setAttribute("src", "./images/js_orange.jpg");
            break;
        }
        case phpButton: {
            var langColors = ["Green", "Brown", "Pink", "Blue"];
            showImage.setAttribute("src", "./images/php_green.jpg");
            break;
        }
    }
    for(let i in buttons) {
        colors[i] = langColors[i];
        buttons[i].innerHTML = colors[i];
    }
}

function handleColors(num, color) {
    switch(num) {
        case buttonOne: {
            switch(color) {
                case "Orange": showImage.setAttribute("src", `./images/js_${colors[0].toLowerCase()}.jpg`); break;
                case "Green": showImage.setAttribute("src", `./images/php_${colors[0].toLowerCase()}.jpg`); break;
            }
            break;
        }
        case buttonTwo: {
            switch(color) {
                case "Purple": showImage.setAttribute("src", `./images/js_${colors[1].toLowerCase()}.jpg`); break;
                case "Brown": showImage.setAttribute("src", `./images/php_${colors[1].toLowerCase()}.jpg`); break;
            }
            break;
        }
        case buttonThree: {
            switch(color) {
                case "Red": showImage.setAttribute("src", `./images/js_${colors[2].toLowerCase()}.jpg`); break;
                case "Pink": showImage.setAttribute("src", `./images/php_${colors[2].toLowerCase()}.jpg`); break;
            }
            break;
        }
        case buttonFour: {
            switch(color) {
                case "Grey": showImage.setAttribute("src", `./images/js_${colors[3].toLowerCase()}.jpg`); break;
                case "Blue": showImage.setAttribute("src", `./images/php_${colors[3].toLowerCase()}.jpg`); break;
            }
            break;
        }
    }
}

for(let i in languages) {
    languages[i].addEventListener("click", () => {
        handleLanguages(languages[i]);
    })
}

for(let i in buttons) {
    buttons[i].addEventListener("click", () => {
        handleColors(buttons[i], colors[i]);
    })
}