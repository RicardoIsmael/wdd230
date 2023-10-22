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
                location.textContent= loc
                let ico= data.weather[0].icon
                const icoUrl= `https://openweathermap.org/img/wn/${ico}.png`
                icon.src= icoUrl
               let vel = data.wind.speed
               velocity.textContent= vel

               
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


