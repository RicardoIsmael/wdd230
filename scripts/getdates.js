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


/*========Weather==Home-Page====================*/

const currentTemp = document.querySelector('.current-temp');
const weatherIcon = document.querySelector('.weather-icon');
const dataName = document.querySelector('.data-name')
const captionDesc = document.querySelector('figcaption');

const url = "https://api.openweathermap.org/data/2.5/weather?lat=-34.56&lon=-59.12&units=metric&appid=d0d692d58f21e02e6201f521d129c741";

async function apiFetch () {
    try{
        const response = await fetch(url);
        if(response.ok){
            const data = await response.json();
           // console.log(data.name)
           displayResults(data);
    
        }else{
            throw Error(await response.text());
        }
    }
        catch (error){
            console.log(error)
        }
    }

    apiFetch()

const displayResults = (data) => {
    let integer = Math.round(data.main.temp)
    currentTemp.textContent = `${integer} C`;
    let icon = data.weather[0].icon;

    weatherIcon.src = `https://openweathermap.org/img/w/${icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute("width", "200");
    weatherIcon.setAttribute("height", "150");
    dataName.textContent= `${data.name}`
    function convert(string){
        let split = string.split(" ");
        let result = ""; 
        if(split.length > 0){
            for (var i = 0; i < split.length; i++) {
                result +=  split[i][0].toUpperCase() +  split[i].slice(1).toLowerCase()+    " ";
            }
        }else{
            result = string.toUpperCase() + string.slice(1).toLowerCase();
        }
        return result;
    }
    
    captionDesc.textContent = convert(desc);
}

