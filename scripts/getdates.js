const modif = document.lastModified;
document.querySelector(".dat").textContent= `The last modified :${modif}`;

const hamburButton= document.querySelector("#menu");
const navegation= document.querySelector(".nave");

hamburButton.addEventListener("click", ()=> {
    navegation.classList.toggle('open');
    hamburButton.classList.toggle('open');
})