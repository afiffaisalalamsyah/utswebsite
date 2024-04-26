function myMenuFunction(){
  var menuBtn = document.getElementById("myNavMenu");

  if(menuBtn.className === "nav-menu"){
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

window.onscroll = function() {headerShadow()};

function headerShadow() {
  const navHeader =document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";

  } else {

    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";

  }
}

var typingEffect = new Typed(".typedText",{
  strings : ["junior Web developer","UI & UX","mobile developer"],
  loop : true,
  typeSpeed : 100, 
  backSpeed : 80,
  backDelay : 2000
})

const sr = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: true     
})


sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.featured-image',{delay: 300})


sr.reveal('.project-box',{interval: 200})

sr.reveal('.top-header',{})

const srLeft = ScrollReveal({
origin: 'left',
distance: '80px',
duration: 2000,
reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

const srRight = ScrollReveal({
origin: 'right',
distance: '80px',
duration: 2000,
reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})


const sections = document.querySelectorAll('section[id]')

function scrollActive() {
const scrollY = window.scrollY;

sections.forEach(current =>{
  const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
    sectionId = current.getAttribute('id')

  if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

  }  else {

    document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

  }
})
}
$('.page').each(function(i,e){
  $(this).click(function(event){
    var x = event.pageX;
    var y = event.pageY;
    
    var nextItem = i + 1;
    if (nextItem >= $('.page').length){
      nextItem = 0;
    }
    
    $('.page:eq('+ nextItem +')').css('z-index', parseInt($(this).css('z-index')) + 1);
    $('.page:eq('+ nextItem +')').css('clip-path', 'circle(0% at '+ x +'px '+ y +'px)');
    
    anime({
      targets: $('.page')[nextItem],
      update: function(anim) {
        $('.page:eq('+ nextItem +')').css('clip-path', 'circle('+ (anim.progress*2) +'% at '+ x +'px '+ y +'px)');
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const menuItems = document.querySelectorAll('.nav_list');
  menuItems.forEach(item => {
      item.addEventListener('click', () => {
          const circle = item.querySelector('.circle');
          const rect = item.getBoundingClientRect();
          circle.style.top = `${rect.top}px`;
          circle.style.left = `${rect.left}px`;
          circle.classList.add('active');
          setTimeout(() => {
              circle.classList.remove('active');
          }, 400);
      });
  });
});



