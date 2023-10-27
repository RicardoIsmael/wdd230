const modif = document.lastModified;
document.querySelector(".dat").textContent= `The last modified :${modif}`;

const hamburButton= document.querySelector("#menu");
const navegation= document.querySelector(".nave");

hamburButton.addEventListener("click", ()=> {
    navegation.classList.toggle('open');
    hamburButton.classList.toggle('open');
})

/*code of Number of Visits++++++++++++++++++++++++ */

const displayVisit = document.querySelector('.nVisit')
let numberVisits = Number(window.localStorage.getItem('visits') || 0);
if(numberVisits !== 0){
    displayVisit.textContent= numberVisits;

}else{
    displayVisit.textContent = "Welcome. This is your first visit..!"
    
}
numberVisits++;

localStorage.setItem('visits',numberVisits );