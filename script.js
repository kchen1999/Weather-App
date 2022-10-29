function getTemp() {
  console.log('');
}

function getFeelsLike() {
  onsole.log('');
}

function getState() {
  onsole.log('');
}

function getHumidity() {
  console.log('');
}

function getSpeed() {
  console.log('');

}


async function getWeatherData() {
  const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Sydney&appid=e3cb8bb29dabde56f22e99d73ee8d1be',{mode: 'cors'})
  const weatherData = response.json();
  console.log(weatherData);
  //const temp = weatherData['main'];
  //console.log(temp);
  //const feelsLike = 
  //const humidty = 
  //const wind = 
  //const state = 
}

getWeatherData();