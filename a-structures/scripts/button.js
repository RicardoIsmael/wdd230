/*================== dark mode ===================*/

const chabutton = document.querySelector('.dark');
const main = document.querySelector("main");

chabutton.addEventListener("click", ()=>{
    if(chabutton.textContent.includes('🌞')){
        main.style.background= '#000';
        main.style.color= '#ffff';
        chabutton.textContent= "🌙";
        main.style.color= 'white'
    }else{
        main.style.background = "#ffff";
        main.style.color = '#000';
        chabutton.textContent= '🌞';
    }
})

/*============== hamburgeer menu =============*/
const open = document.querySelector(".menu");
const close = document.querySelector(".nave");

open.addEventListener("click", () =>{
    close.classList.toggle('open');
    open.classList.toggle('open');
})


/*========== Grid and List ====================*/
const buttonOpen = document.querySelector('.card');
const buttonClose = document.querySelector('.grid');
const display = document.querySelector('.open')

buttonOpen.addEventListener("click", ()=>{
    display.classList.toggle('list');
    display.classList.toggle('free')
})
