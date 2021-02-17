// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();
// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linkCntrier = document.querySelector(".links-container");
const links = document.querySelector(".links");
navToggle.addEventListener("click", function(){
    const cntrierHeight = linkCntrier.getBoundingClientRect().height;
    const linkHeight = links.getBoundingClientRect().height;
    if(cntrierHeight == 0){
        linkCntrier.style.height = `${linkHeight}px`;
    }
    else{
        linkCntrier.style.height=0;
    }
})
// ********** fixed navbar ************
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");
window.addEventListener("scroll", function(){
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if(scrollHeight > navHeight){
    navbar.classList.add("fixed-nav");
    } 
    else{
        navbar.classList.remove("fixed-nav");
    }
    if(scrollHeight > 500){
        topLink.classList.add("show-links");
    }
    else{
        topLink.classList.remove("show-links");
    }
});
// ********** smooth scroll ************
// select links
const scrollink = document.querySelectorAll(".scroll-link");

scrollink.forEach(function(link){
link.addEventListener("click", function(e){
e.preventDefault();

const id = e.currentTarget.getAttribute("href").slice(1);
const element = document.getElementById(id); 

const navHeight = navbar.getBoundingClientRect().height;
const cntierHeight = linkCntrier.getBoundingClientRect().height;
const fixnav = navbar.classList.contains("fixed-nav")
let position = element.offsetTop - navHeight;
if(!fixnav){
    position = position - navHeight
}
if(navHeight > 82){
    position = position + cntierHeight
}
window.scrollTo({
    left: 0,
    top: position,
});
linkCntrier.style.height = 0; 
});
});