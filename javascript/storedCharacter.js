const form = document.getElementById("characterForm");
const characterDisplay = document.getElementById("characterDisplay");
const addLevelBtn = document.getElementById("addLevelBtn");
const deleteBtn = document.getElementById("deleteBtn");

if (localStorage.getItem("character") === null){
  characterDisplay.innerHTML = "<p>No character data found</p>"
}

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

addLevelBtn.addEventListener("click", () => {
  if (localStorage.getItem("character") != null){
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
    }
  else{
    alert("No character found. Please add a character before updating or deleting.");
  }
});

deleteBtn.addEventListener("click", () => {
  if (localStorage.getItem("character") != null){
    localStorage.removeItem("character");
    characterDisplay.innerHTML = "<p>No character data found</p>"
    alert("Character deleted.");
  }
  else{
    alert("No character found. Please add a character before updating or deleting.");
  }
});
