const button = document.querySelector ('button');
const especieDoPersonagem1 = document.querySelector ('#especie-personagem-1');
const especieDoPersonagem2 = document.querySelector ('#especie-personagem-2');
const especieDoPersonagem3 = document.querySelector ('#especie-personagem-3');
const especieDoPersonagem4 = document.querySelector ('#especie-personagem-4');
const imagemDoPersonagem1 = document.querySelector ('#img-personagem-1');
const imagemDoPersonagem2 = document.querySelector ('#img-personagem-2');
const imagemDoPersonagem3 = document.querySelector ('#img-personagem-3');
const imagemDoPersonagem4 = document.querySelector ('#img-personagem-4');
const nomeDoPersonagem1 = document.querySelector ('#nome-personagem-1');
const nomeDoPersonagem2 = document.querySelector ('#nome-personagem-2');
const nomeDoPersonagem3 = document.querySelector ('#nome-personagem-3');
const nomeDoPersonagem4 = document.querySelector ('#nome-personagem-4');
const statusDoPersonagem1 = document.querySelector ('#status-personagem-1');
const statusDoPersonagem2 = document.querySelector ('#status-personagem-2');
const statusDoPersonagem3 = document.querySelector ('#status-personagem-3');
const statusDoPersonagem4 = document.querySelector ('#status-personagem-4');



generateRandomNumber = () => {
    return Math.floor(Math.random() * 671);
}

getCharacter1 = () => {
    const id = generateRandomNumber();

    return fetch(`https://rickandmortyapi.com/api/character/${id}`, {
        method: 'GET',
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json'
        }
    })
    .then((response) => response.json()).then((data) => {
        especieDoPersonagem1.innerHTML = '<strong>Espécie: </strong><br>' + data.species;
        imagemDoPersonagem1.alt = 'Imagem do personagem: ' + data.name;
        imagemDoPersonagem1.src = data.image;
        nomeDoPersonagem1.innerHTML = '<strong>Nome: </strong><br>' + data.name;
        statusDoPersonagem1.innerHTML = '<strong>Status: </strong><br>' + data.status;
    })
}

getCharacter1 ();

getCharacter2 = () => {
    const id = generateRandomNumber();

    return fetch(`https://rickandmortyapi.com/api/character/${id}`, {
        method: 'GET',
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json'
        }
    })
    .then((response) => response.json()).then((data) => {
        especieDoPersonagem2.innerHTML = '<strong>Espécie: </strong><br>' + data.species;
        imagemDoPersonagem2.alt = 'Imagem do personagem: ' + data.name;
        imagemDoPersonagem2.src = data.image;
        nomeDoPersonagem2.innerHTML = '<strong>Nome: </strong><br>' + data.name;
        statusDoPersonagem2.innerHTML = '<strong>Status: </strong><br>' + data.status;
    })
}

getCharacter2 ();

getCharacter3 = () => {
    const id = generateRandomNumber();

    return fetch(`https://rickandmortyapi.com/api/character/${id}`, {
        method: 'GET',
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json'
        }
    })
    .then((response) => response.json()).then((data) => {
        especieDoPersonagem3.innerHTML = '<strong>Espécie: </strong><br>' + data.species;
        imagemDoPersonagem3.alt = 'Imagem do personagem: ' + data.name;
        imagemDoPersonagem3.src = data.image;
        nomeDoPersonagem3.innerHTML = '<strong>Nome: </strong><br>' + data.name;
        statusDoPersonagem3.innerHTML = '<strong>Status: </strong><br>' + data.status;
    })
}

getCharacter3 ();

getCharacter4 = () => {
    const id = generateRandomNumber();

    return fetch(`https://rickandmortyapi.com/api/character/${id}`, {
        method: 'GET',
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json'
        }
    })
    .then((response) => response.json()).then((data) => {
        especieDoPersonagem4.innerHTML = '<strong>Espécie: </strong><br>' + data.species;
        imagemDoPersonagem4.alt = 'Imagem do personagem: ' + data.name;
        imagemDoPersonagem4.src = data.image;
        nomeDoPersonagem4.innerHTML = '<strong>Nome: </strong><br>' + data.name;
        statusDoPersonagem4.innerHTML = '<strong>Status: </strong><br>' + data.status;
    })
}

getCharacter4 ();

button.onclick = () => {
    getCharacter1 ();
    getCharacter2 ();
    getCharacter3 ();
    getCharacter4 ();
}