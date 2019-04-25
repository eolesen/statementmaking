
var slideIndex = 1;
var slideIndex2 = 1;
var slideIndex3 = 1;


function plusSlides(n) {
    showSlides(slideIndex += n);
    activeThumbnail(thumbnailIndex +=n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
    activeThumbnail(thumbnailIndex = n)
}

function plusSlides2(n) {
    showSlides2(slideIndex2 += n);
    activeThumbnail2(thumbnailIndex2 +=n);
}
function currentSlide2(n) {
    showSlides2(slideIndex2 = n);
    activeThumbnail2(thumbnailIndex2 = n)
}

function plusSlides3(n) {
    showSlides3(slideIndex3 += n);
    activeThumbnail3(thumbnailIndex3 +=n);
}

function currentSlide3(n) {
    showSlides3(slideIndex3 = n);
    activeThumbnail3(thumbnailIndex3 = n)
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
var thumbnailIndex2 = 1;
var thumbnailIndex3 = 1;
activeThumbnail(thumbnailIndex);
activeThumbnail2(thumbnailIndex2);
activeThumbnail3(thumbnailIndex3);

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
    if (n > allThumbnails.length) {thumbnailIndex2 = 1}
    if (n < 1) {thumbnailIndex2 = allThumbnails.length}
    for (i = 0; i < allThumbnails.length; i++) {
        $(allThumbnails[i]).css("border", "none");
    }

    $(allThumbnails[thumbnailIndex2-1]).css("border", "solid #ed572d 3px");

}

function activeThumbnail3(n) {
    var i;
    var allThumbnails = document.getElementsByClassName("thumbnail3");
    if (n > allThumbnails.length) {thumbnailIndex3 = 1}
    if (n < 1) {thumbnailIndex3 = allThumbnails.length}
    for (i = 0; i < allThumbnails.length; i++) {
        $(allThumbnails[i]).css("border", "none");
    }

    $(allThumbnails[thumbnailIndex3-1]).css("border", "solid #ed572d 3px");

}

function onLoad() {
    $(".thumbnail").mouseover(function () {
        $(this).addClass("mouse");
    });

    $(".thumbnail").mouseleave(function () {
        $(this).removeClass("mouse");
    });

    $(".thumbnail2").mouseover(function () {
        $(this).addClass("mouse");
    });

    $(".thumbnail2").mouseleave(function () {
        $(this).removeClass("mouse");
    });

    $(".thumbnail3").mouseover(function () {
        $(this).addClass("mouse");
    });

    $(".thumbnail3").mouseleave(function () {
        $(this).removeClass("mouse");
    });

    slideIndex = num;

    showSlides(slideIndex);
}