/* code in javascript of weather with openweathermap============  */

window.addEventListener('load', () =>{
    let lat;
    let lon;

    let temp= document.querySelector('.tempvalue')
    let description= document.querySelector('.des-temp')
    let location= document.querySelector('.ubication')
    let icon= document.querySelector('.icon')
    let velocity = document.querySelector('.velocity')
    let vient = document.querySelector('.wch')

    
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            lat = position.coords.latitude
            lon = position.coords.longitude
           const url= `https://api.openweathermap.org/data/2.5/weather?q=Lujan&units=Imperial&appid=d0d692d58f21e02e6201f521d129c741`
        

            fetch(url)
            .then(response =>{ return response.json() })
            .then(data =>{
                console.log(data)
               let te = Math.round(data.main.temp)
                temp.textContent= `${te} F`
                let desc = data.weather[0].description
                 description.textContent= desc.toUpperCase()
                let loc = data.name
                location.textContent= loc;
                let ico= data.weather[0].icon
                const icoUrl= `https://openweathermap.org/img/wn/${ico}.png`
                icon.src= icoUrl
               let vel = data.wind.speed
              /* velocity.textContent= vel;*/

               
              /* Calculated the windchill   ======================================================== */      
               
               
            let windch =  35.74+(0.6215 * te)-35.75*Math.pow(vel, 0.16)-0.4275*te*Math.round(vel,0.16);
            let windchi = Math.round(windch)
            if (te >=50 || vel < 3){
                vient.textContent=  " Wind Chill: N/A"
            }
            else{
                vient.textContent= `Wind Chill : ${windchi}`
            }

        


            })
            .catch(error =>{
                console.log(error)
            })
        })
    }
})

/*=======forecast-code===============================================================*/
const one = document.querySelector('.dia1');


const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=-34.56&lon=-59.12&units=metric&appid=d0d692d58f21e02e6201f521d129c741`

async function apiFetch () {
    try{
        const response = await fetch(forecastUrl);
        const data = await response.json();
        if(response.ok){
          console.log(data)

           let one1 = data.list[3].dt_txt.slice(8,11);
           let one2 = data.list[3].weather[0].description;
            let dayone = document.createElement('p');
            let daytwo = document.createElement('p');
            dayone.textContent= `November ${one1} `;
            daytwo.textContent= one2;
            one.appendChild(dayone);
            one.appendChild(daytwo);

            let one3 = data.list[11].dt_txt.slice(8,11);
            let one4 = data.list[11].weather[0].description;
             let daythree = document.createElement('p');
             let dayfour = document.createElement('p');
             daythree.textContent= `November ${one3} `
             dayfour.textContent= one4;
             one.appendChild(daythree);
             one.appendChild(dayfour);

             let one5 = data.list[19].dt_txt.slice(8,11);
             let one6 = data.list[19].weather[0].description;
              let dayfive = document.createElement('p');
              let daysix = document.createElement('p');
              dayfive.textContent= `November ${one5} `
              daysix.textContent= one6;
              one.appendChild(dayfive);
              one.appendChild(daysix);
        
        
    
        }else{
            throw Error(await response.text());
        }
    }
        catch (error){
            console.log(error)
        }
    }


apiFetch()

/*=============banner-code=================*/

const baner = document.querySelector('.show-banner');
let day = new Date().getDay()

    if(day < 1 || day > 3){
        baner.style.display= 'none';
        console.log(day)
    }else{
        baner.style.display= 'block';
    }

/*=============button of banner for to close============*/
const cl = document.querySelector('.close-banner');

cl.addEventListener("click", () =>{
    baner.style.display= "none";
})


