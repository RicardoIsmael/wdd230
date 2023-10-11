const inpu= document.querySelector('.fachap');
const buto= document.querySelector('button');
const lista= document.querySelector('ul');

buto.addEventListener('click', ()=> {
    if(inpu.value == ''){
       const item = inpu.value= "Please, enter a chapter."
    }
     item= inpu.value
    inpu.value= "";

    const listItem= document.createElement('li');
    const txtspan= document.createElement('span');
    const butoremove= document.createElement('button');

    listItem.append(txtspan, item);
    lista.appendChild(listItem);
    butoremove.textContent="Click to delete";
    listItem.append("        ",butoremove)
    lista.appendChild(listItem);

    butoremove.addEventListener("click", () => {
        lista.removeChild(listItem);

    })

})