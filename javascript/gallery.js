
var slideIndex = 1;


function plusSlides(n) {
    showSlides(slideIndex += n);
    activeThumbnail(thumbnailIndex +=n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
    activeThumbnail(thumbnailIndex = n)
}

function plusSlides2(n) {
    showSlides(slideIndex += n);
    activeThumbnail(thumbnailIndex +=n);
}
function currentSlide2(n) {
    showSlides(slideIndex = n);
    activeThumbnail(thumbnailIndex = n)
}

function plusSlides3(n) {
    showSlides(slideIndex += n);
    activeThumbnail(thumbnailIndex +=n);
}

function currentSlide3(n) {
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
}

function showSlides2(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides2");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        $(slides[i]).css("display", "none");
    }

    $(slides[slideIndex-1]).css("display", "block");
    console.log(slideIndex);
}

function showSlides3(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides3");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        $(slides[i]).css("display", "none");
    }

    $(slides[slideIndex-1]).css("display", "block");
    console.log(slideIndex);
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

    $(allThumbnails[thumbnailIndex-1]).css("border", "solid #ed572d 3px");

}

function activeThumbnail2(n) {
    var i;
    var allThumbnails = document.getElementsByClassName("thumbnail2");
    if (n > allThumbnails.length) {thumbnailIndex = 1}
    if (n < 1) {thumbnailIndex = allThumbnails.length}
    for (i = 0; i < allThumbnails.length; i++) {
        $(allThumbnails[i]).css("border", "none");
    }

    $(allThumbnails[thumbnailIndex-1]).css("border", "solid #ed572d 3px");

}

function activeThumbnail3(n) {
    var i;
    var allThumbnails = document.getElementsByClassName("thumbnail3");
    if (n > allThumbnails.length) {thumbnailIndex = 1}
    if (n < 1) {thumbnailIndex = allThumbnails.length}
    for (i = 0; i < allThumbnails.length; i++) {
        $(allThumbnails[i]).css("border", "none");
    }

    $(allThumbnails[thumbnailIndex-1]).css("border", "solid #ed572d 3px");

}

function onLoad() {
    $(".thumbnail").mouseover(function () {
        $(this).addClass("mouse");
    });

    $(".thumbnail").mouseleave(function () {
        $(this).removeClass("mouse");
    });

    slideIndex = num;

    showSlides(slideIndex);
}