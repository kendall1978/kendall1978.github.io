const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".myNav-links");
const links = document.querySelectorAll(".myNav-links li");

hamburger.addEventListener( "click", () =>{
    navLinks.classList.toggle("open");
    links.forEach(link =>{
        link.classList.toggle("fade");
    })
})