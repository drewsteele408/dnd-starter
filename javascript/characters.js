const form = document.getElementById("characterForm");
const characterDisplay = document.getElementById("characterDisplay");
  
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const existingCharacter = localStorage.getItem("character");

  if (existingCharacter) {
    const confirmOverwrite = confirm(
      "This action will overwrite an existing character. Continue?"
    );

    if (!confirmOverwrite) {
      return; // Stop if user cancels
    }
  }

  const character = {
    name: document.getElementById("name").value,
    class: document.getElementById("class").value,
    race: document.getElementById("race").value,
    level: parseInt(document.getElementById("level").value)
  };

  localStorage.setItem("character", JSON.stringify(character));

  alert(`${character.name} has been added.`);

  characterDisplay.innerHTML = `<p>Existing Character:</p>
    <div class="character">
      <p>Name: ${character.name}</p>
      <p>Race: ${character.race}</p>
      <p>Level: ${character.level}</p>
      <p>Class: ${character.class}</p>
      <p>Note: You may only have one character saved at a time</p>
    </div>`;

  console.log("Loaded character:", character);

  form.reset(); // Clear the form fields
});


    const saved = localStorage.getItem("character");
    if (saved) {
      const character = JSON.parse(saved);
      characterDisplay.innerHTML = `<p>Existing Character:</p>
    <div class="character">
      <p>Name: ${character.name}</p>
      <p>Race: ${character.race}</p>
      <p>Level: ${character.level}</p>
      <p>Class: ${character.class}</p>
      <p>Note: You may only have one character saved at a time</p>
    </div>`;
      console.log("Loaded character:", character);
  }