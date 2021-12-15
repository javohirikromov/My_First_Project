const menuIcon = document.getElementById("menu-icon");
const slideoutMenu = document.getElementById("slideout-menu");
const searchIcon = document.getElementById("search");
const searchBox = document.getElementById("searchbox");
const nav = document.querySelector("nav");
const container = document.querySelector(".container");

searchIcon.addEventListener('click', function () {
    if(searchBox.style.top == '72px'){
        searchBox.style.top = '24px';
        searchBox.style.pointerEvents = 'none';
    }
    else{
        searchBox.style.top = '72px';
        searchBox.style.pointerEvents = 'auto';
    }
}); 
container.addEventListener("click", () =>{
    container.classList.toggle("active");
    container.style.opacity = '1';
    container.style.pointerEvents = 'auto';
    if(slideoutMenu.style.opacity == "1"){
        slideoutMenu.style.opacity = '0';
        slideoutMenu.style.pointerEvents = 'none';
    } else{
        slideoutMenu.style.opacity = '1';
        slideoutMenu.style.pointerEvents = 'auto';
    }
});


window.addEventListener('scroll', function(){
    nav.classList.toggle('sticky', window.scrollY > 400);
});


const currentlocation = location.href;
const menuItem = document.querySelectorAll('a');
const menuLength = menuItem.length
for(let i = 0; i<menuLength; i++){
    if(menuItem[i].href === currentlocation){
        menuItem[i].className = "color"
    }
};


const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () =>{
    if(window.pageYOffset > 100){
        toTop.classList.add("plus");
    } else{
        toTop.classList.remove("plus");
    }
});