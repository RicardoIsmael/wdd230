const modif = document.lastModified;
document.querySelector(".dat").textContent= `The last modified :${modif}`;


const opened= document.querySelector(".menu");
const clos= document.querySelector(".nave");

opened.addEventListener("click", () =>{
    clos.classList.toggle('open');
    opened.classList.toggle('open');
})
