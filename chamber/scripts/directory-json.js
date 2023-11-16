const base = "https://ricardoismael.github.io/wdd230/";
const linea= "https://ricardoismael.github.io/wdd230/chamber/data/member.json";

const square= document.querySelector('.bx');

async function getlinks() {
    const response = await fetch(linea);
        const data = await response.json();
    displayMember(data.members);
}
getlinks();

const displayMember = (members)=>{
    members.forEach((member) => {
        console.log(member)
        
        let section = document.createElement('section')
        let name = document.createElement('h3')
        let imga = document.createElement('img')
        let address= document.createElement('p')
        let level = document.createElement('p')
        let a = document.createElement('a')

        name.textContent = `${member.name}`;
        imga.setAttribute('src', member.imageurl)
        imga.setAttribute('loading', 'lazy')
        imga.setAttribute('width', '120')
        imga.setAttribute('height', '100')
        address.textContent = `${member.address}`
        level.textContent = ` Membership Level: ${member.membershiplevel}`
        a.textContent= `${member.website}`
        a.href= `${member.website}`

        section.appendChild(name)
        section.appendChild(imga)
        section.appendChild(address)
        section.appendChild(level)
        section.appendChild(a)
        square.appendChild(section)

        
    });
}

/*Grid and List button=============================================*/
const  btngrid = document.querySelector('.gr')
const btnlist = document.querySelector('.li')
const display = document.querySelector('.abrir')

btngrid.addEventListener('click', () => {
    display.classList.toggle('list')
    display.classList.toggle('grid')
    
})
