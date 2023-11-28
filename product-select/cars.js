const bmwButton = document.getElementById("btn-bmw");
const benzButton = document.getElementById("btn-benz");
const ferraButton = document.getElementById("btn-ferra");
const lamboButton = document.getElementById("btn-lambo");
const showImage = document.getElementById("image");
const buttonOne = document.getElementById("btn-1");
const buttonTwo = document.getElementById("btn-2");
const buttonThree = document.getElementById("btn-3");
const buttonFour = document.getElementById("btn-4");
const serieOne = buttonOne.innerHTML;
const serieTwo = buttonTwo.innerHTML;
const serieThree = buttonThree.innerHTML;
const serieFour = buttonFour.innerHTML;
const buttons = [buttonOne, buttonTwo, buttonThree, buttonFour];
const brands = [bmwButton, benzButton, ferraButton, lamboButton];
const series = [serieOne, serieTwo, serieThree, serieFour];

function handleBrands(brand) {
    switch(brand) {
        case bmwButton: {
            var brandSeries = ["X1", "X3", "X5", "X7"];
            showImage.setAttribute("src", "./images/bmw_x1.jpg");
            break;
        }
        case benzButton: {
            var brandSeries = ["GLC", "C200", "AMG", "S500"];
            showImage.setAttribute("src", "./images/benz_glc.jpg");
            break;
        }
        case ferraButton: {
            var brandSeries = ["LaFerrari", "458", "Roma", "F8"];
            showImage.setAttribute("src", "./images/ferrari_laferrari.jpg");
            break;
        }
        case lamboButton: {
            var brandSeries = ["Aventador", "Huracan", "Urus", "Gallardo"];
            showImage.setAttribute("src", "./images/lamborghini_aventador.jpg");
            break;
        }
    }
    for(let i in buttons) {
        series[i] = brandSeries[i];
        buttons[i].innerHTML = series[i];
    }
}

function handleSeries(num, serie) {
    switch(num) {
        case buttonOne: {
            switch(serie) {
                case "X1": showImage.setAttribute("src", `./images/bmw_${series[0].toLowerCase()}.jpg`); break;
                case "GLC": showImage.setAttribute("src", `./images/benz_${series[0].toLowerCase()}.jpg`); break;
                case "LaFerrari": showImage.setAttribute("src", `./images/ferrari_${series[0].toLowerCase()}.jpg`); break;
                case "Aventador": showImage.setAttribute("src", `./images/lamborghini_${series[0].toLowerCase()}.jpg`); break;
            }
            break;
        }
        case buttonTwo: {
            switch(serie) {
                case "X3": showImage.setAttribute("src", `./images/bmw_${series[1].toLowerCase()}.jpg`); break;
                case "C200": showImage.setAttribute("src", `./images/benz_${series[1].toLowerCase()}.jpg`); break;
                case "458": showImage.setAttribute("src", `./images/ferrari_${series[1].toLowerCase()}.jpg`); break;
                case "Huracan": showImage.setAttribute("src", `./images/lamborghini_${series[1].toLowerCase()}.jpg`); break;
            }
            break;
        }
        case buttonThree: {
            switch(serie) {
                case "X5": showImage.setAttribute("src", `./images/bmw_${series[2].toLowerCase()}.jpg`); break;
                case "AMG": showImage.setAttribute("src", `./images/benz_${series[2].toLowerCase()}.jpg`); break;
                case "Roma": showImage.setAttribute("src", `./images/ferrari_${series[2].toLowerCase()}.jpg`); break;
                case "Urus": showImage.setAttribute("src", `./images/lamborghini_${series[2].toLowerCase()}.jpg`); break;
            }
            break;
        }
        case buttonFour: {
            switch(serie) {
                case "X7": showImage.setAttribute("src", `./images/bmw_${series[3].toLowerCase()}.jpg`); break;
                case "S500": showImage.setAttribute("src", `./images/benz_${series[3].toLowerCase()}.jpg`); break;
                case "F8": showImage.setAttribute("src", `./images/ferrari_${series[3].toLowerCase()}.jpg`); break;
                case "Gallardo": showImage.setAttribute("src", `./images/lamborghini_${series[3].toLowerCase()}.jpg`); break;
            }
            break;
        }
    }
}

for(let i in brands) {
    brands[i].addEventListener("click", () => {
        handleBrands(brands[i]);
    })
}

for(let i in buttons) {
    buttons[i].addEventListener("click", () => {
        handleSeries(buttons[i], series[i]);
    })
}