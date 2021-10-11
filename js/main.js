/*===== MENU SHOW Y HIDDEN =====*/ 
const navMenu = document.getElementById('nav-menu'),
     toggleMenu = document.getElementById('nav-toggle'),
      closeMenu = document.getElementById('nav-close')

/*SHOW*/ 
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show');
})

 /*HIDDEN*/
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show');
})
/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Remove menu mobile*/
 navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));


  var counter = 1;
  setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 3){
      counter = 1;
    }
  }, 6000);