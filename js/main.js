// Get the button
let mybutton = document.getElementById("sticky2");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Initialize slideshow only if slides exist
let slides = document.getElementsByClassName("mySlides");
if (slides.length > 0) {
  let slideIndex = 0;
  showSlides();

  function showSlides() {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }

    let dots = document.getElementsByClassName("dot");
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    if (dots.length > 0) {
      dots[slideIndex - 1].className += " active";
    }
    setTimeout(showSlides, 3000);
  }
}

//categories
let sc0 = document.getElementById("0");
let sc1 = document.getElementById("1");
let sc2 = document.getElementById("2");
let sc3 = document.getElementById("3");
let sc4 = document.getElementById("4");
let sc5 = document.getElementById("5");
let sc6 = document.getElementById("6");
let sc7 = document.getElementById("7");
let sc8 = document.getElementById("8");
let sc9 = document.getElementById("9");
let sc10 = document.getElementById("10");

let c1 = document.getElementById("c1");
let c2 = document.getElementById("c2");
let c3 = document.getElementById("c3");
let c4 = document.getElementById("c4");
let c5 = document.getElementById("c5");
let c6 = document.getElementById("c6");
let c7 = document.getElementById("c7");
let c8 = document.getElementById("c8");
let c9 = document.getElementById("c9");
let c10 = document.getElementById("c10");


function cs0() {
  sc0.className = "button-active";
  sc1.className = "";
  sc2.className = "";
  sc3.className = "";
  sc4.className = "";
  sc5.className = "";
  sc6.className = "";
  sc7.className = "";
  sc8.className = "";
  sc9.className = "";
  sc10.className = "";

  c1.style.display = "block";
  c2.style.display = "block";
  c3.style.display = "block";
  c4.style.display = "block";
  c5.style.display = "block";
  c6.style.display = "block";
  c7.style.display = "block";
  c8.style.display = "block";
  c9.style.display = "block";
  c10.style.display = "block";
}

function cs1() {
  sc0.className = "";
  sc1.className = "button-active";
  sc2.className = "";
  sc3.className = "";
  sc4.className = "";
  sc5.className = "";
  sc6.className = "";
  sc7.className = "";
  sc8.className = "";
  sc9.className = "";
  sc10.className = "";

  c1.style.display = "block";
  c2.style.display = "none";
  c3.style.display = "none";
  c4.style.display = "none";
  c5.style.display = "none";
  c6.style.display = "none";
  c7.style.display = "none";
  c8.style.display = "none";
  c9.style.display = "none";
  c10.style.display = "none";
}

function cs2() {
  sc0.className = "";
  sc1.className = "";
  sc2.className = "button-active";
  sc3.className = "";
  sc4.className = "";
  sc5.className = "";
  sc6.className = "";
  sc7.className = "";
  sc8.className = "";
  sc9.className = "";
  sc10.className = "";

  c1.style.display = "none";
  c2.style.display = "block";
  c3.style.display = "none";
  c4.style.display = "none";
  c5.style.display = "none";
  c6.style.display = "none";
  c7.style.display = "none";
  c8.style.display = "none";
  c9.style.display = "none";
  c10.style.display = "none";
}

function cs3() {
  sc0.className = "";
  sc1.className = "";
  sc2.className = "";
  sc3.className = "button-active";
  sc4.className = "";
  sc5.className = "";
  sc6.className = "";
  sc7.className = "";
  sc8.className = "";
  sc9.className = "";
  sc10.className = "";

  c1.style.display = "none";
  c2.style.display = "none";
  c3.style.display = "block";
  c4.style.display = "none";
  c5.style.display = "none";
  c6.style.display = "none";
  c7.style.display = "none";
  c8.style.display = "none";
  c9.style.display = "none";
  c10.style.display = "none";
}

function cs4() {
  sc0.className = "";
  sc1.className = "";
  sc2.className = "";
  sc3.className = "";
  sc4.className = "button-active";
  sc5.className = "";
  sc6.className = "";
  sc7.className = "";
  sc8.className = "";
  sc9.className = "";
  sc10.className = "";

  c1.style.display = "none";
  c2.style.display = "none";
  c3.style.display = "none";
  c4.style.display = "block";
  c5.style.display = "none";
  c6.style.display = "none";
  c7.style.display = "none";
  c8.style.display = "none";
  c9.style.display = "none";
  c10.style.display = "none";
}

function cs5() {
  sc0.className = "";
  sc1.className = "";
  sc2.className = "";
  sc3.className = "";
  sc4.className = "";
  sc5.className = "button-active";
  sc6.className = "";
  sc7.className = "";
  sc8.className = "";
  sc9.className = "";
  sc10.className = "";

  c1.style.display = "none";
  c2.style.display = "none";
  c3.style.display = "none";
  c4.style.display = "none";
  c5.style.display = "block";
  c6.style.display = "none";
  c7.style.display = "none";
  c8.style.display = "none";
  c9.style.display = "none";
  c10.style.display = "none";
}

function cs6() {
  sc0.className = "";
  sc1.className = "";
  sc2.className = "";
  sc3.className = "";
  sc4.className = "";
  sc5.className = "";
  sc6.className = "button-active";
  sc7.className = "";
  sc8.className = "";
  sc9.className = "";
  sc10.className = "";

  c1.style.display = "none";
  c2.style.display = "none";
  c3.style.display = "none";
  c4.style.display = "none";
  c5.style.display = "none";
  c6.style.display = "block";
  c7.style.display = "none";
  c8.style.display = "none";
  c9.style.display = "none";
  c10.style.display = "none";
}

function cs7() {
  sc0.className = "";
  sc1.className = "";
  sc2.className = "";
  sc3.className = "";
  sc4.className = "";
  sc5.className = "";
  sc6.className = "";
  sc7.className = "button-active";
  sc8.className = "";
  sc9.className = "";
  sc10.className = "";

  c1.style.display = "none";
  c2.style.display = "none";
  c3.style.display = "none";
  c4.style.display = "none";
  c5.style.display = "none";
  c6.style.display = "none";
  c7.style.display = "block";
  c8.style.display = "none";
  c9.style.display = "none";
  c10.style.display = "none";
}

function cs8() {
  sc0.className = "";
  sc1.className = "";
  sc2.className = "";
  sc3.className = "";
  sc4.className = "";
  sc5.className = "";
  sc6.className = "";
  sc7.className = "";
  sc8.className = "button-active";
  sc9.className = "";
  sc10.className = "";

  c1.style.display = "none";
  c2.style.display = "none";
  c3.style.display = "none";
  c4.style.display = "none";
  c5.style.display = "none";
  c6.style.display = "none";
  c7.style.display = "none";
  c8.style.display = "block";
  c9.style.display = "none";
  c10.style.display = "none";
}

function cs9() {
  sc0.className = "";
  sc1.className = "";
  sc2.className = "";
  sc3.className = "";
  sc4.className = "";
  sc5.className = "";
  sc6.className = "";
  sc7.className = "";
  sc8.className = "";
  sc9.className = "button-active";
  sc10.className = "";

  c1.style.display = "none";
  c2.style.display = "none";
  c3.style.display = "none";
  c4.style.display = "none";
  c5.style.display = "none";
  c6.style.display = "none";
  c7.style.display = "none";
  c8.style.display = "none";
  c9.style.display = "block";
  c10.style.display = "none";
}

function cs10() {
  sc0.className = "";
  sc1.className = "";
  sc2.className = "";
  sc3.className = "";
  sc4.className = "";
  sc5.className = "";
  sc6.className = "";
  sc7.className = "";
  sc8.className = "";
  sc9.className = "";
  sc10.className = "button-active";

  c1.style.display = "none";
  c2.style.display = "none";
  c3.style.display = "none";
  c4.style.display = "none";
  c5.style.display = "none";
  c6.style.display = "none";
  c7.style.display = "none";
  c8.style.display = "none";
  c9.style.display = "none";
  c10.style.display = "block";
}
