const generatBtn = document.getElementById("generateBtn");
const encounterDisplay = document.getElementById("encounterDisplay");

async function getRandomMonster() {
    try {
        // get the total number of monsters
        const response = await fetch("https://api.open5e.com/monsters/");
        const data = await response.json();
        const totalCount = data.count;

        // get results of how many pages are available 
        const pageSize = data.results.length;

        // pick a random monster page 
        const totalPages = Math.ceil(totalCount / pageSize);
        const randomPage = Math.floor(Math.random() * totalPages) + 1;
        const pageResponse = await fetch(`https://api.open5e.com/monsters/?page=${randomPage}`);
        const pageData = await pageResponse.json();

        // pick a random monster from the page 
        const monsters = pageData.results;
        const randomMonster = monsters[Math.floor(Math.random() *monsters.length)];

        // display monster info 
        displayMonster(randomMonster);
    } catch(error){
        console.error("Error fetching monster", error);
        encounterDisplay.innerHTML = `<p>Oops! Could not fetch an ecnounter. Try again.</p>`;
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

    generatBtn.addEventListener("click", getRandomMonster);