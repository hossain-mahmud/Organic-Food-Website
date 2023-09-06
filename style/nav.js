const navBars = document.querySelector('.fa-bars');
const navItems = document.querySelector('.nav_item');

navBars.addEventListener('click', ()=>{
    navItems.classList.toggle("active");
})