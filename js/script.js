
// Hamburger toggle
// button transform 
const hamburger = document.getElementById('hamburger-menu');
const navList = document.getElementById('nav-list');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle("active");
});

// humberger active side 
hamburger.addEventListener('click', function () {
    navList.classList.toggle("nav-side");
});

// remove window by other toggle-hamburger 
window.onclick = function (e) {
    if (e.target != navList && e.target != hamburger) {
        navList.classList.remove("nav-side");
        hamburger.classList.remove("active");
    }
};

// window scroll
window.onscroll = (function () {
    const header = document.querySelector("header");

    if (window.pageYOffset > 0) {
        header.classList.add("nav-header");
    } else {
        header.classList.remove("nav-header");
    };
});

//  About
const freelance = document.getElementById("freelance");
const traveloka = document.getElementById("traveloka");
const tokped = document.getElementById("tokopedia");

const btnTraveloka = document.getElementById("btn-traveloka");
const btnFreelance = document.getElementById("btn-freelance");
const btnTokopedia = document.getElementById("btn-tokopedia");

    // click to information 
    
btnTraveloka.addEventListener('click', function () {
    freelance.style.display = "none";
    traveloka.style.display = "block";
    tokped.style.display = "none";
});

btnFreelance.addEventListener('click', function () {
    freelance.style.display = "block";
    traveloka.style.display = "none";
    tokped.style.display = "none";
})

btnTokopedia.addEventListener('click', function () {
    freelance.style.display = "none";
    traveloka.style.display = "none";
    tokped.style.display = "block";
});

const BtnExpenrience = document.getElementById("btn-experience");
const experience = document.getElementById("experience");

