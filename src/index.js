function displayLocation(response) {
  new Typewriter("#location", {
    strings: response.data.answer,
    autoStart: true,
    delay: 30,
    cursor: "",
  });
}

function generateLocation(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "03cc42tob37268fffbcb4b84ee3110a3";
  let prompt = `User instructions: Generate a description about ${instructionsInput.value}`;
  let context =
    "You are an expert in knowing the best sweets in different countries. Could you please generate a 4 line description in basic HTML. Make sure to follow the user instructions. Do not inculde a title to the poem. Sign the poem with `SheCodes AI` inside a <strong> element at the end of the poem ";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let locationElement = document.querySelector("#location");
  locationElement.classList.remove("hidden");
  locationElement.innerHTML = `<div class="blink">
  ⌛Generating a desription about ${instructionsInput.value} sweet</div>`;

  axios.get(apiURL).then(displayLocation);
}

let locationFormElement = document.querySelector("#location-generator-form");
locationFormElement.addEventListener("submit", generateLocation);
