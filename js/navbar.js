
const ul = document.querySelector('#navbar_list');

const ulChildren = ul.children;

//on clicking an item of navbar, it scroll to it's section
const li = document.querySelectorAll('#navbar_list li');
li.forEach(element => {
  element.addEventListener('click', function () {
    const section = document.getElementById(element.textContent);
    section.scrollIntoView({behavior: 'smooth', block: 'start'});

    //add the active class to the nav item of the viewport section
    for(let i=0; i<ulChildren.length; i++) {
      //remove active class form the other items
      ulChildren[i].classList.remove('active_section');
      element.classList.add('active_section');
      
    }
  });
});

//Hide navbar when not scrolling
const navbar = document.querySelector('#navbar_menu');
const svg = document.querySelector('svg');

const maindiv = document.querySelector('.main-box');

let scrollTimeout = null;
const scrollendDelay = 1000; // ms

window.addEventListener('scroll', function() {

    if ( scrollTimeout === null ) {
      scrollbeginHandler();

    } else {
      clearTimeout( scrollTimeout );
      navbar.style.background = '#4A44F2';
    }
    scrollTimeout = setTimeout( scrollendHandler, scrollendDelay );   
    
});

function scrollbeginHandler() {
    // this code executes when scroll begins
    navbar.style.marginTop = '0';
    svg.style.marginTop = '0';
}


let mouse = false;

function scrollendHandler() {
    // this code executes when scroll ends
    if(mouse || window.scrollY < 195) {
      navbar.style.marginTop = '0';
      svg.style.marginTop = '0';

      if(window.innerWidth < 400) {
        navbar.style.background = '#4A44F2';
      } else {
        navbar.style.background = 'none';
      }

    } else {
      navbar.style.marginTop = '-100px';
      svg.style.marginTop = '-200px';

      scrollTimeout = null;
    }
}

//Show navbar when mouse is over it
navbar.addEventListener('mousemove', () => {
  mouse = true;
});

//Hide navbar when mouse leaves
navbar.addEventListener('mouseleave', function() {
  if(window.scrollY > 195) {
    navbar.style.marginTop = '-100px';
    svg.style.marginTop = '-200px';
  }
  mouse = false;

});

//to top button code
const toTop = document.querySelector('.toTop');

window.addEventListener('scroll', () => {
  if(window.pageYOffset > 400) {
    toTop.style.display = 'block';
  } else {
    toTop.style.display = 'none';
  }
});

toTop.addEventListener('click', () => {
  window.scrollTo(0, 0);
});