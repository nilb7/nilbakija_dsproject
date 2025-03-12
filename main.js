var slideIndex = 1;


function showSlides(n){
    var slides = document.getElementsByClassName("slide")

    for(i=0; i<slides.length; i++){
        slides[i].style.display = "none";
    }

    if(n>slides.length){
        slidesIndex = 1;
    }
    if(n<1){
        slideIndex = slides.length;
    }

    slides[slideIndex-1].style.display = "block";
}

showSlides(1);

function changeSlide(n){
    slideIndex+=n;
    showSlides(slideIndex);
}
