function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 30,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "03cc42tob37268fffbcb4b84ee3110a3";
  let prompt = `User instructions: Generate a Spanish poem about ${instructionsInput.value}`;
  let context =
    "You are a romanting poem expert and love to write short poems. Please generate a 4 line poem in basic HTML. Make sure to follow the user instructions. Do not inculde a title to the poem. Sign the poem with `SheCodes AI` inside a <strong> element at the end of the poem ";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="blink">
  ⌛Generating a Spanish poem about ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
