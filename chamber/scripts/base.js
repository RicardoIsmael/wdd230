/*Last Modified code ==========================*/

const modif = document.lastModified;
document.querySelector(".dat").textContent= `The last modified :${modif}`;

/*Hamburger Menu code ==========================*/
const opened= document.querySelector(".menu");
const clos= document.querySelector(".nave");

opened.addEventListener("click", () =>{
    clos.classList.toggle('open');
    opened.classList.toggle('open');
})

/*Dark mode code ================================*/
const darkbutton= document.querySelector(".change");
const main= document.querySelector("main");

darkbutton.addEventListener("click", ()=>{
    if(darkbutton.textContent.includes("☀")){
        main.style.background= "#000";
        main.style.color= "#fff";
        darkbutton.textContent= "🌙";
        darkbutton.style.color= "white"    
    }
    else{
        main.style.background= "#fff";
        main.style.color="#000";
        darkbutton.textContent="☀";
    }
})

/*dicover code  number of visits============================ */
const displayVisit = document.querySelector('.hoy')
let numberVisits = Number(window.localStorage.getItem('visits') || 0);
if(numberVisits !== 0){
    displayVisit.textContent= numberVisits;

}else{
    displayVisit.textContent = "Welcome. This is your first visit..!"
    
}
numberVisits++;

localStorage.setItem('visits',numberVisits);


/*date.now() code ======================================== */
const last= document.querySelector('.lastvisit');
const report= document.querySelector('.minutesago');

let today= Date.now();
document.querySelector('.today').innerHTML= `${today} = ${new Date(today)}`;

let lastVisit= localStorage.getItem("lastVisit");
if(lastVisit){
    last.innerHTML= `${lastVisit} = ${new Date(Number(lastVisit))}`;
    let minutesago =Math.floor((today-lastVisit) / (1000));
    report.innerHTML= `You last visited this page ${minutesago} second ago`;

}else{
    report.innerHTML = "Welcome. This is your first visit!";
}
localStorage.setItem("lastVisit", today);









/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++====== */