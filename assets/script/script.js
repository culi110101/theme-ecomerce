$(document).ready(function() {
    $('.menu-item').click(function() 
    {
        console.log('menu clicked');
        nav=document.getElementById('nav-for-mobile');
        nav.classList.toggle('visible');
    });
})