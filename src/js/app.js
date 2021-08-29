const cityInfo = document.querySelector('.city-info');
const weatherImage = document.querySelector('.weather-image');
const tempInfo = document.querySelector('.temp-info');
const weatherDescription = document.querySelector('.weather-description');
const inputCity = document.querySelector('#city');
const buttonCity = document.querySelector('.choose-city');

let input = inputCity.textContent;

buttonCity.addEventListener('click',function(){
    console.log(input)
});

