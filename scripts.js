var contenedor = document.getElementById("contenedor");
var slideWidth = document.getElementById("slider").offsetWidth; //ancho del contenedor que es igual al ancho de las fotos
var currentSlide = 0; //slide que se está viendo
var slides = document.getElementsByClassName("foto"); //me indica cuántas fotos hay con clase foto

function nextSlide(){
    currentSlide++;
    moverContenedor();
}

function prevSlide(){
    currentSlide--;
    moverContenedor();
}

function goToSlide(cualSlide){
    currentSlide = cualSlide;
    moverContenedor();
}

function moverContenedor(){
    contenedor.style.marginLeft = - (slideWidth * currentSlide) + "px";
    updateArrows();
    updateNav();

}

function updateArrows(){
    var leftArrow = document.getElementById("bLeft");
    var rightArrow = document.getElementById("bRight");

    if (currentSlide === 0){
        leftArrow.style.visibility = "hidden";
    }else{
        leftArrow.style.visibility = "visible";
    }

    if (currentSlide === slides.length - 1){
        rightArrow.style.visibility = "hidden";
    }else{
        rightArrow.style.visibility = "visible";
    }
}

function updateNav(){
    var navItems = document.getElementsByClassName("slider-nav-item");
    for (var i=0; i<navItems.length; i++){
        navItems[i].classList.remove("active");
    }

    //colocamos la clase active al currentslide
    navItems[currentSlide].classList.add("active");
}

updateArrows();