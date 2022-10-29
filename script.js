function getTemp(weatherData) {
  return weatherData['main']['temp'];
}

function getFeelsLike(weatherData) {
  return weatherData['main']['feels_like'];
}

function getState(weatherData) {
  return weatherData['weather'][0]['main'];
}

function getHumidity(weatherData) {
  return weatherData['main']['humidity'];
}

function getWind(weatherData) {
  return weatherData['wind']['speed'];

}


async function getWeatherData() {
  const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Sydney&appid=e3cb8bb29dabde56f22e99d73ee8d1be',{mode: 'cors'})
  const weatherData= await response.json();
  console.log(weatherData);
  const temp = console.log(getTemp(weatherData));
  const feelsLike = console.log(getFeelsLike(weatherData));
  const state = console.log(getState(weatherData));
  const humidity = console.log(getHumidity(weatherData));
  const wind = console.log(getWind(weatherData));
}

getWeatherData();