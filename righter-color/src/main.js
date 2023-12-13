var hero = document.getElementById("hero");

// Array of images which you want to show: Use path you want.
var images = new Array(
    'public/assets/images/16d1b9_exquisite_turquoise.jpg',
    'public/assets/images/761279_pure_purple.jpg',
    'public/assets/images/11b516_pikkoro_green.jpg',
    'public/assets/images/49655c_vert_pierre.jpg'
);
var nextimage = 0;
function doSlideshow() {
    if (nextimage >= images.length) {
        nextimage = 0;
    }
    hero.style.backgroundImage = 'url("' + images[nextimage++] + '")';
    setTimeout(doSlideshow, 5000); // Change image every 5 seconds
}
function plusSlides(n) {
    nextimage += n;
    if (nextimage >= images.length) {
        nextimage = 0;
    } else if (nextimage < 0) {
        nextimage = images.length - 1;
    }
    hero.style.backgroundImage = 'url("' + images[nextimage] + '")';
}

//Provided by Bing AI