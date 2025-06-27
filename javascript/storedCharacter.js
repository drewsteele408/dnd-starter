const form = document.getElementById("characterForm");
const characterDisplay = document.getElementById("characterDisplay");
const addLevelBtn = document.getElementById("addLevelBtn");
const deleteBtn = document.getElementById("deleteBtn");

function displayCharacter(character) {
  characterDisplay.innerHTML = `<p>Existing Character:</p>
    <div class="character">
      <p>${character.name}</p>
      <p>${character.race}, Level ${character.level} ${character.class}</p>
    </div>`;
}

const saved = localStorage.getItem("character");
if (saved) {
  const character = JSON.parse(saved);
  displayCharacter(character);
  console.log("Loaded character:", character);
}

addLevelBtn.addEventListener("click", () => {
  const saved = localStorage.getItem("character");
  let character;

  if (saved) {
    character = JSON.parse(saved);
    character.level += 1;
  } else {

    character = {
      name: document.getElementById("name").value,
      class: document.getElementById("class").value,
      race: document.getElementById("race").value,
      level: parseInt(document.getElementById("level").value)
    };
  }

  localStorage.setItem("character", JSON.stringify(character));
  displayCharacter(character);
  alert(`${character.name} is now level ${character.level}.`);
});

deleteBtn.addEventListener("click", () => {
  localStorage.removeItem("character");
  characterDisplay.innerHTML = "";
  alert("Character deleted.");
});
