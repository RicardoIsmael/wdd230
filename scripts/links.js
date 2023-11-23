const baseURL= "https://ricardoismael.github.io/wdd230/";
const linksURL= "../data/links.json";
const woks= document.querySelector(".weeks");


async function getLinks(){
    const response= await fetch(linksURL);
    const data= await response.json();
    
    displayLinks(data.lessons)
}
getLinks()



const displayLinks = (weeks)=>{
    weeks.forEach(week => {
    let arr= week.links;
    for(let i= 0; i < arr.length; i++){
        console.log(arr)
        let li= document.createElement('li')
        let a = document.createElement('a');
       // li.textContent = `week: ${arr[i].title}`;
        a.href= a;
        a.textContent =`Week ${i}: ${arr[i].url}`;
        a.style.textDecoration= "none";
        a.target= "_blank"
        li.appendChild(a);
        li.appendChild(a);
        woks.appendChild(li);
        
    }
            


        })
 }


          
    

