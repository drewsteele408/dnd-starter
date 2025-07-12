import { initNav } from "./nav.js";  

function displayCharacter(character) {
  characterDisplay.innerHTML = `<p>Existing Character:</p>
    <div class="character">
      <p>Name: ${character.name}</p>
      <p>Race: ${character.race}</p>
      <p>Level: ${character.level}</p>
      <p>Class: ${character.class}</p>
      <p>Note: You may only have one character saved at a time</p>
    </div>`;
}

const saved = localStorage.getItem("character");
if (saved) {
  const character = JSON.parse(saved);
  displayCharacter(character);
  console.log("Loaded character:", character);
}

document.addEventListener("DOMContentLoaded", () => {
    initNav();
});