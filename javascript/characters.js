const form = document.getElementById("characterForm");
const characterDisplay = document.getElementById("characterDisplay");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); 

      const character = {
        name: document.getElementById("name").value,
        class: document.getElementById("class").value,
        race: document.getElementById("race").value,
        level: parseInt(document.getElementById("level").value)
      };
  
      localStorage.setItem("character", JSON.stringify(character));
  
      alert(`${document.getElementById("name").value} has been added.`);
  
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