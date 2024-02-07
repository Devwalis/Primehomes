let show = true;
const menuContent = document.querySelector(".content");
const menuToggle = menuContent.querySelector(".menu-toggle");

menuToggle.addEventListener('click', ()=>{
    menuContent.classList.toggle('on', show);
    show = !show;
    
});

const menuPorque = document.querySelector(".porque-prime");
const menuTogglePorque = menuPorque.querySelector(".menu-toggle-porque1");

menuTogglePorque.addEventListener('click', ()=>{
    menuPorque.classList.toggle('on', show);
    show = !show;
    
});

const menuTogglePorque2 = menuPorque.querySelector(".menu-toggle-porque2");

menuTogglePorque2.addEventListener('click', ()=>{
    menuPorque.classList.toggle('onn', show);
    show = !show;
    
});

const menuPerguntas = document.querySelector(".perguntas");
const menuTogglePerguntas = menuPerguntas.querySelector(".perguntas-menu-toggle");

menuTogglePerguntas.addEventListener('click', ()=>{
    menuPerguntas.classList.toggle('on', show);
    show = !show;
    
});


