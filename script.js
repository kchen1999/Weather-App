function getCityData(cityName, weatherData) {
  const city = cityName; 
  const temp = Math.round(weatherData['main']['temp'] - 273.15);
  const feelsLike = Math.round(weatherData['main']['feels_like'] - 273.15);
  const humidity = weatherData['main']['humidity'];
  const wind = weatherData['wind']['speed'];
  return {city, temp, feelsLike, humidity, wind};
}

async function getWeatherData(city) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e3cb8bb29dabde56f22e99d73ee8d1be`,{mode: 'cors'})
    const weatherData= await response.json();
    const cityData = getCityData(city, weatherData);

    const main = document.querySelector('.main');
    if(main.children.length === 1) {
      displayWeatherData(cityData);
    }
    else {
      updateWeatherData(cityData);
    }
  } catch (err) {
    alert('Invalid city name!')
  }
}

function displayWeatherData(cityData) {
  const main = document.querySelector('.main');

  const weatherData = document.createElement('div');
  weatherData.classList.add('weather-data');

  const city = document.createElement('p');
  city.textContent = cityData.city; 
  city.classList.add('city');

  const temp = document.createElement('p');
  temp.textContent = `${cityData.temp} °C`;
  temp.classList.add('temp');

  const feelsLike = document.createElement('p');
  feelsLike.textContent = `Feels like: ${cityData.feelsLike} °C`;
  feelsLike.classList.add('feels-like');

  const humidity = document.createElement('p');
  humidity.textContent = `Humidity: ${cityData.humidity} %`;
  humidity.classList.add('humidity');

  const wind = document.createElement('p');
  wind.textContent = `Wind: ${cityData.wind} km/h`;
  wind.classList.add('wind');

  weatherData.append(city);
  weatherData.append(temp);
  weatherData.append(feelsLike);
  weatherData.append(humidity);
  weatherData.append(wind);

  main.append(weatherData);
}

function updateWeatherData(cityData) {  
  const city = document.querySelector('.city');
  city.textContent = cityData.city; 

  const temp = document.querySelector('.temp');
  temp.textContent = `${cityData.temp} °C`;

  const feelsLike = document.querySelector('.feels-like');
  feelsLike.textContent = `Feels like: ${cityData.feelsLike} °C`;

  const humidity = document.querySelector('.humidity');
  humidity.textContent = `Humidity: ${cityData.humidity} %`;

  const wind = document.querySelector('.wind');
  wind.textContent = `Wind: ${cityData.wind} km/h`;
}

function loadWeather() {
  const btn = document.querySelector('button');
  const cityInput = document.querySelector('#city');
  btn.addEventListener('click', () => {
    getWeatherData(cityInput.value);
    cityInput.value = ''; 
  });
}

loadWeather();