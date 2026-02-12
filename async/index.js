// const promise_1 = new Promise((resolve, reject) => {
//     resolve('I am a promise')
// })

// promise_1.then(data => console.log(data))

// async function foo(){
//     return Promise.resolve(101);
// }

// async function tacklePromise() {
//     const result = await foo()
//     console.log(result)
// }

// tacklePromise()

const API_KEY = "2cf8bb54a56fa129dbc99d83ce450952";

async function queryWeather(city) {
  try {
    showLoading();
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
    );

    if (!res.ok) {
      throw new Error("City not found");
    }

    const data = await res.json();
    displayWeather(data);
  } catch (error) {
    console.error(error);
  } finally {
    hideLoading();
  }
}

document.querySelector("#searchBtn").addEventListener("click", () => {
  const city = document.querySelector("#cityInput").value;
  if (city) {
    queryWeather(city);
  }
});

function showLoading() {
  document.querySelector("#loading").textContent = "Loading....";
}

function hideLoading() {
  document.querySelector("#loading").textContent = "";
}

function displayWeather(data) {
  const html = `
        <h2>${data.name}</h2>
        <p> Temp: ${data.main.temp}</p>
        <p> Condition: ${data.weather[0].description}</p>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather Icon">
    `;

  document.querySelector("#result").innerHTML = html;
}

const BULBASAUR_POKEMONS_URL = "https://pokeapi.co/api/v2/pokemon/bulbasaur";
const RATICATE_POKEMONS_URL = "https://pokeapi.co/api/v2/pokemon/raticate";
const KAKUNA_POKEMONS_URL = "https://pokeapi.co/api/v2/pokemon/kakuna";

async function resolvePokemons() {
  const responses = Promise.allSettled([
    fetch(BULBASAUR_POKEMONS_URL),
    fetch(RATICATE_POKEMONS_URL),
    fetch(KAKUNA_POKEMONS_URL),
  ]);

  const response = await responses;
  console.log(response);
}

resolvePokemons();

async function resolvePokemonsV2() {
  const responses = await Promise.allSettled([
    fetch(BULBASAUR_POKEMONS_URL).then(res => res.json()),
    fetch(RATICATE_POKEMONS_URL).then(res => res.json()),
    fetch(KAKUNA_POKEMONS_URL).then(res => res.json()),
  ]);

  console.log(responses[0])
}

resolvePokemonsV2();
