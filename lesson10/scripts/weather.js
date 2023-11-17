const currentTemp = document.querySelector('.current-temp');
const weatherIcon = document.querySelector('.weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=d0d692d58f21e02e6201f521d129c741";

async function apiFetch () {
    try{
        const response = await fetch(url);
        if(response.ok){
            const data = await response.json();
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
    currentTemp.textContent = `${integer} F`;
    let icon = data.weather[0].icon;

    weatherIcon.src = `https://openweathermap.org/img/w/${icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute("width", "200");
    weatherIcon.setAttribute("height", "150");
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
