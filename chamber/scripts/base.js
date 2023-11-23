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
   displayVisit.textContent= numberVisits=1
}
numberVisits++;

localStorage.setItem('visits',numberVisits);


/*=========date.now() code ======================================== */
const last= document.querySelector('.lastvisit');
const report= document.querySelector('.minutesago');

let today= Date.now();
let fecha = new Date(today);
const option={year:"numeric", month:"2-digit", day:"2-digit"};
const fechaToday = fecha.toLocaleDateString(undefined, option)
let hour = new Date();
const hour1 = hour.toLocaleDateString(undefined, option);

document.querySelector('.today').innerHTML= fechaToday;

let lastVisit= localStorage.getItem("lastVisit");
if(lastVisit){
    last.innerHTML= `${new Date(Number(lastVisit)).toLocaleDateString(undefined, option)}`;
    let minutesago =Math.floor((today-lastVisit) / (1000));
    report.innerHTML= `You last visited to this page ${minutesago} second ago`;

}else{
    report.innerHTML = "Welcome. This is your first visit!";
}
localStorage.setItem("lastVisit", today);









/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++====== */