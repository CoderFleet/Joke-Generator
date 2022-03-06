const Joke = document.querySelector(".JokeArea");
const getJokes = document.querySelector(".getJokes");

getJokes.addEventListener("click", () => {
  pushJokes();
});

async function pushJokes() {
  const res = await fetch("https://v2.jokeapi.dev/joke/Any?type=single");
  const data = await res.json();
  if (data.joke.length > 150) {
    pushJokes();
  } else {
    Joke.innerText = null;
    Joke.innerText = data.joke;
  }
}
