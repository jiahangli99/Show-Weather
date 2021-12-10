const WeatherURL = 'https://api.openweathermap.org/data/2.5/weather?q=&appid=d1e26023f3db82cf0c5a7df101b62ce1';
const $form = $('form');
const $input = $('input[type="text"]');

$form.on('submit', handleGetData);

function handleGetData(evt) {
    evt.preventDefault()
    const userInput = $input.val()
    $input.val("");
    console.log(userInput);
    $.ajax('https://api.openweathermap.org/data/2.5/weather?q=' + userInput + '&appid=d1e26023f3db82cf0c5a7df101b62ce1').then(function (data) {
        render(data);
    })
}

function render(weatherData) {
    const user = $input.val()
    $('main').html(`
    <h3>Weather For: ${user.userInput}</h3>
    <h3>Temperature: ${weatherData.main.temp}</h3>
    <h3>Feels Like: ${weatherData.main.feels_like}</h3>
    <h3>Weather: ${weatherData.weather[0].main}</h3>
    `)
    console.log(weatherData)
};