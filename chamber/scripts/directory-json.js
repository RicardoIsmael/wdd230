const base = "https://ricardoismael.github.io/wdd230/";
const linea= "https://ricardoismael.github.io/wdd230/chamber/data/member.json";

const square= document.querySelector('.bx');

async function getlinks() {
    const response = await fetch(linea);
        const data = await response.json();
    console.log(data.members);
}
getlinks();