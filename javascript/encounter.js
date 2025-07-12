const generateBtn = document.getElementById("generateBtn");
const encounterDisplay = document.getElementById("encounterDisplay");
const crFilter = document.getElementById("cr-filter");

function displayCharacter(character) {
  characterDisplay.innerHTML = `<p>Existing Character:</p>
    <div class="character">
      <p>Name: ${character.name}</p>
      <p>Race: ${character.race}</p>
      <p>Level: ${character.level}</p>
      <p>Class: ${character.class}</p>
    </div>`;
}


const saved = localStorage.getItem("character");
if (saved) {
  const character = JSON.parse(saved);
  displayCharacter(character);
  console.log("Loaded character:", character);
}

async function getRandomMonster() {
    try {
        encounterDisplay.innerHTML = `<div class="animated-square"></div><p>Loading your encounter...</p>`;
        // get the total number of monsters

            // read the filter 
        const crValue = crFilter.value;
        const baseUrl = new URL("https://api.open5e.com/monsters/");
        if(crValue) {
            baseUrl.searchParams.set("cr", crValue);
            
        }

        // fetch count and first page
        const initialRes = await fetch(baseUrl)
        const data = await initialRes.json();
        const totalCount = data.count;

        // get results of how many pages are available 
        const pageSize = data.results.length;

        // pick a random monster page 
        const totalPages = Math.ceil(totalCount / pageSize);
        const randomPage = Math.floor(Math.random() * totalPages) + 1;
        baseUrl.searchParams.set("page", randomPage);

        // fetch the random page with cr filter 
        const pageRes = await fetch(baseUrl);
        const pageData = await pageRes.json();

        // pick a random monster from the page 
        const monsters = pageData.results;
        const randomMonster = monsters[Math.floor(Math.random() *monsters.length)];

        // display monster info 
        displayMonster(randomMonster);
    } catch(error){
        console.error("Error fetching monster", error);
        encounterDisplay.innerHTML = `<p>Oops! Could not fetch an encounter. Try again.</p>`;
    }
}

    function displayMonster(monster){
        encounterDisplay.innerHTML = `
            <h2>${monster.name}</h2>
            <p><strong>Type:</strong> ${monster.type}</p>
            <p><strong>Challenge Rating:</strong> ${monster.challenge_rating}</p>
            <p><strong>Size:</strong> ${monster.size}</p>
            <p><strong>Hit Points:</strong> ${monster.hit_points}</p>
            <p><strong>Armor Class:</strong> ${monster.armor_class}</p>
            <p><strong>Actions:</strong> ${monster.actions?.map(a => `<br><strong>${a.name}</strong>: ${a.desc}`).join("") || "None listed"}</p>
        `;
    }

    generateBtn.addEventListener("click", getRandomMonster);