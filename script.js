// Smooth scroll for navbar links

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({
behavior:"smooth"
});

});

});


// Navbar background change on scroll

window.addEventListener("scroll", function(){

let navbar = document.querySelector(".navbar");

if(window.scrollY > 50){

navbar.style.background = "#000";

}

else{

navbar.style.background = "#111";

}

});


// Simple welcome message

window.onload = function(){

console.log("Website Loaded Successfully");

};



// Contact button animation

const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {

btn.addEventListener("mouseover", () => {

btn.style.transform = "scale(1.05)";

});

btn.addEventListener("mouseout", () => {

btn.style.transform = "scale(1)";

});

});