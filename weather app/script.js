const inputbox = document.querySelector('.input-box')
const weatherimage = document.querySelector('.wether-image')
const temperature = document.querySelector('.temperature')
const description = document.querySelector('.description')
const searchbtn = document.getElementById('btn')
const humidity = document.getElementById('humidity')
const windspeed = document.getElementById('wind-speed')
const lnf = document.querySelector('.location-not-found')
const wb = document.querySelector('.weather-body')

async function checkweather(city){
    const api_key = "c97c2b82f741ec0767645a62cac23543";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
    const weather_data = await fetch(`${url}`).then(response => response.json());

    if (weather_data.cod === '404') {
        lnf.style.display = "flex"
        wb.style.display = "none"
        console.log("error")
        return;
    }

    wb.style.display = "flex"
    lnf.style.display = "none"
    temperature.innerHTML = `${Math.round(weather_data.main.temp-273.15)}°C`
    description.innerHTML = `${weather_data.weather[0].description}`
    humidity.innerHTML = `${weather_data.main.humidity}%`
    windspeed.innerHTML = `${weather_data.wind.speed}Km/h`
    switch (weather_data.weather[0].main) {
        case 'Clouds':
            weatherimage.src= "/images/clouds.png"
            break;
        case 'Clear':
            weatherimage.src= "/images/clear.png"
            break;
        case 'Mist':
            weatherimage.src= "/images/mist.png"
            break;
        case 'Rain':
            weatherimage.src= "/images/rain.png"
            break;
        case 'Snow':
            weatherimage.src= "/images/snow.png"
            break;
    }
}

searchbtn.addEventListener('click',()=>(
    checkweather(inputbox.value)
));