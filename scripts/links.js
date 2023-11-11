const baseURL= "https://ricardoismael.github.io/wdd230/";
const linksURL= "https://ricardoismael.github.io/wdd230/data/links.json";
const weeks= document.querySelector(".weeks");


async function getLinks(){
    const response= await fetch(linksURL);
    const data= await response.json();
    
    displayLinks(data.lessons)
}
getLinks()



const displayLinks = (lessons)=>{
    lessons.forEach(lesson => {
    let arr= lesson.links;
    for(let i= 0; arr.length; i++){
        console.log(arr[i])
    }
            


        })
 }

          
    

