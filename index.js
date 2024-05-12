const characterList = document.querySelector(".character_list")

function fetchUsers() {
    return fetch("https://rickandmortyapi.com/api/character").then(
        (response) => {
            return response.json();
        }
   )
}

const renderCharacters = (character) => {
    console.log(character.results)
    const marcup = character.results
        .map((character) => {
            const { name, image, gender } = character;
            return `
    <li class="cList">
    <div class="txt">
        <h2>name: ${name}</h2>
        <p>gender: ${gender}</p>
    </div>
        <img class="img" src="${image}" alt="${name}">
    </li>
    `;
        })
        .join("");
        console.log(characterList);
    characterList.innerHTML = marcup;
};

fetchUsers()
    .then((characters) => renderCharacters(characters))
    .catch((error) => console.log(error));
