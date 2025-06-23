 //USE YOUR OWN API KEY FROM OPEN WEATHER API
const API_KEY = 'YOUR_API_KEY'

const cityName = document.querySelector('#cityInput')

const submitBtn = document.querySelector('#getWeatherBtn')
 
//HERE DATA HAS BEEN FETCHED USING PROMISES
const fetchWeatherApi = (city,API_KEY)=>{

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`; 

    return fetch(apiUrl).then((raw)=>{
        if(!raw.ok){
            return raw.json().then( err =>{
                throw new Error(err.message || 'API error...')
            })
        }

        return raw.json()
    })
}

//HERE DATA HAS BEEN SET IN HTML
const dataSetup = (weatherData)=>{
    // console.log(weatherData )
    // console.log(weatherData.weather[0].description )
    // console.log(weatherData.main.temp)
    // console.log(weatherData.main.humidity)

    let htmlData =  `
             <h2 id="cityName" class="text-2xl sm:text-3xl font-semibold text-gray-200 mb-4"></h2>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
               
                
                <div class="bg-gray-700 p-5 rounded-xl shadow-md flex flex-col items-center justify-center">
                    <p class="text-indigo-400 text-sm sm:text-base font-medium mb-1">Temperature</p>
                    <p id="temperature" class="text-3xl sm:text-4xl font-bold text-indigo-300 mb-2">${weatherData.main.temp}</p>
                    <p class="text-xs sm:text-sm text-gray-400">°C</p>
                </div>
          
                <div class="bg-gray-700 p-5 rounded-xl shadow-md flex flex-col items-center justify-center">
                    <p class="text-teal-400 text-sm sm:text-base font-medium mb-1">Humidity</p>
                    <p id="humidity" class="text-3xl sm:text-4xl font-bold text-teal-300 mb-2">${weatherData.main.humidity}</p>
                    <p class="text-xs sm:text-sm text-gray-400">%</p>
                </div>
              
                <div class="bg-gray-700 p-5 rounded-xl shadow-md flex flex-col items-center justify-center">
                    <p class="text-orange-400 text-sm sm:text-base font-medium mb-1">Forecast</p>
                    <p id="forecast" class="text-3xl sm:text-4xl font-bold text-orange-300 mb-2 capitalize">${weatherData.weather[0].description }</p>
                    <p class="text-xs sm:text-sm text-gray-400"></p>
                </div>
            </div>
        `

        
        const holder = document.querySelector('#weatherData');
        holder.innerHTML = htmlData;
        holder.classList.remove('hidden') 
        
}

//CALLING THE EVENTS
submitBtn.addEventListener('click',(e)=>{
    e.preventDefault()

    const city = cityName.value.trim()

    if( city!==""){
        // console.log(city)

        fetchWeatherApi(city,API_KEY).then((response)=>{
            // console.log(response)

            dataSetup(response)

        }).catch((err)=>{
             const errMssg = document.querySelector('#errorMessage');

             errMssg.textContent = err.message
             errMssg.classList.remove('hidden')
             document.querySelector('#weatherData').classList.add('hidden')

             setInterval(()=>{
                location.reload()
             },1500)

        })

    }else{
        alert('something got wrong!')
          location.reload()
    }
})


