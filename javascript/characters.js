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
      characterDisplay.innerHTML = `<p>Existing Characters:</p>
      <div class="character"><p>${character.name}</p>
      <p>${character.race}, Level ${character.level} ${character.class}</p>
      </div>`;
      console.log("Loaded character:", character);
  }