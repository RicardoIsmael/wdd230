const links= "https://ricardoismael.github.io/wdd230/";
const info = "./data/directory.json";

const caja = document.querySelector('.box')

async function getinfo(){
    const response = await fetch(info);
    const data = await response.json();

    information(data.members)
}
getinfo()


const information = (members) =>{
    members.forEach(member => {
        let section = document.createElement('section');
        let imga = document.createElement('img');
        let name = document.createElement('h3');
        let position = document.createElement('p');
        let telephone = document.createElement('p');
        let email = document.createElement('p');

        imga.setAttribute('src', member.pictureUrl);
        imga.setAttribute("loading", "lazy");
        imga.setAttribute('width', '200');
        imga.setAttribute('height', '200');
        name.textContent= member.name;
        position.textContent = member.position;
        telephone.textContent = member.telephone;
        email.textContent = member.email;
        section.classList.add('photo');

        section.append(imga);
        section.append(name);
        section.append(position);
        section.append(telephone);
        section.append(email);
        caja.append(section);
        
    });

}