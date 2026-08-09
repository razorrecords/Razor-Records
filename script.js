document.querySelectorAll('[data-year]').forEach(e=>e.textContent=new Date().getFullYear());
const menu=document.querySelector('.menu-btn'); const nav=document.querySelector('.nav-links');
if(menu&&nav) menu.addEventListener('click',()=>{nav.style.display=nav.style.display==='flex'?'none':'flex';nav.style.flexDirection='column';nav.style.position='absolute';nav.style.top='68px';nav.style.right='4%';nav.style.background='#090909';nav.style.padding='16px';nav.style.border='1px solid #3a1517'});
