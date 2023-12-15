const navbarParent1 = document.getElementById('navbarParent1');
const navbarParent2 = document.getElementById('navbarParent2');
const navbarChild1 = document.getElementById('navbarChild1');
const navbarChild2 = document.getElementById('navbarChild2');
const navbarP1 = document.getElementById('navbarP1');
const navbarP2 = document.getElementById('navbarP2');

let comb = ['none', 'block'];
 

navbarParent1.addEventListener('click', () =>{
    navbarChild1.style.display= comb[1] ;
    navbarP1.style.borderBottom = '3px solid black';
  });
  navbarParent1.addEventListener('mouseleave', () =>{
    navbarChild1.style.display= comb[0] ;
    navbarP1.style.borderBottom = '0px';
  });
  navbarParent2.addEventListener('click', () =>{
    navbarChild2.style.display= comb[1] 
    navbarP2.style.borderBottom = '3px solid black';
  });
  navbarParent2.addEventListener('mouseleave', () =>{
    navbarChild2.style.display= comb[0] 
    navbarP2.style.borderBottom = '0px';
  });
  