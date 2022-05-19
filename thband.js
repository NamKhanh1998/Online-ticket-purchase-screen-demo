
//Show slide auto

let slideIndex = 0;
showSlide();

function showSlide () {

    const slides = document.querySelectorAll('.slider-show')

    for(let value of slides) {
        value.style.display = "none"
    }

    slideIndex++
    if(slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block"
    setTimeout(showSlide, 4000)

}