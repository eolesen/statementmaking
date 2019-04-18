
var slideIndex = 1;


function plusSlides(n) {
    showSlides(slideIndex += n);
    activeThumbnail(thumbnailIndex +=n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
    activeThumbnail(thumbnailIndex = n)
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        $(slides[i]).css("display", "none");
    }

    $(slides[slideIndex-1]).css("display", "block");
    console.log(slideIndex);
   // Cookie.set("holdSpot" , slideIndex);
}


var thumbnailIndex = 1;
activeThumbnail(thumbnailIndex);

function activeThumbnail(n) {
    var i;
    var allThumbnails = document.getElementsByClassName("thumbnail");
    if (n > allThumbnails.length) {thumbnailIndex = 1}
    if (n < 1) {thumbnailIndex = allThumbnails.length}
    for (i = 0; i < allThumbnails.length; i++) {
        $(allThumbnails[i]).css("border", "none");
    }

    $(allThumbnails[thumbnailIndex-1]).css("border", "solid orangered 3px");

}


function onLoad() {
    $(".thumbnail").mouseover(function () {
        $(this).addClass("mouse");
    });

    $(".thumbnail").mouseleave(function () {
        $(this).removeClass("mouse");
    });

   // var num = Cookie.get("holdSpot");
    console.log(num);
    slideIndex = num;

    showSlides(slideIndex);
}