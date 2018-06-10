document.addEventListener("DOMContentLoaded", function () {

//SLIDER


    var buttonNext = document.getElementById("forward")
    var buttonPrev = document.getElementById("previous")
    var images = document.getElementsByClassName("slider")[0].children;

    var img_index = 0;
    var arrOfImages = [];

    for (var img of images) {
        arrOfImages.push(img)
    }

    arrOfImages[0].classList.add("visible");

    buttonNext.addEventListener("click", function () {
        arrOfImages[img_index].classList.remove("visible")
        img_index++
        if (img_index > 1) {
            img_index = 0;
        }
        arrOfImages[img_index].classList.add("visible")
        arrOfImages[img_index].classList.add("visible")
    })


    buttonPrev.addEventListener("click", function () {
        arrOfImages[img_index].classList.remove("visible")
        img_index--
        if (img_index < 0) {
            img_index = 1;
        }
        arrOfImages[img_index].classList.add("visible")
    })





})