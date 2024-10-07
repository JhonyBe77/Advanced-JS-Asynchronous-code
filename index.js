//RESUELVE TUS EJERCICIOS AQUI

//1

function getAllBreeds(){
    let message = fetch('https://dog.ceo/api/breeds/list/all')
    .then(res=> res.json())
    .then(data=> Object.keys(data.message))
    .catch(err => console.log("Error: "+ err.message));
    return message;
}
getAllBreeds()

//2

function getRandomDog(){
    let imagen = fetch(`https://dog.ceo/api/breeds/image/random`)
    .then(res => res.json())
    .then(data => data.message)
    .catch(err => console.log("Error: "+ err.message));

    return imagen;
}
getRandomDog();

//3

function getAllImagesByBreed(){
    let imagenRaza = fetch(`https://dog.ceo/api/breed/komondor/images`)
    .then(res=> res.json())
    .then(data=> data.message)
    .catch(err => console.log("Error: "+ err.message));

    return imagenRaza;
}
getAllImagesByBreed()

//4

function getAllImagesByBreed2(breed){
    let imagenRaza = fetch(`https://dog.ceo/api/breed/${breed}/images`)
    .then(res => res.json())
    .then(data => data.message)
    .catch(err => console.log("Error: "+ err.message));

    return imagenRaza;
}
getAllImagesByBreed2('hound')

//5

function getGitHubUserProfile(username){
    let perfil = fetch(`https://api.github.com/users/${username}`)
    .then(res => res.json())
    .then(data => data.name)
    .catch(err => console.log("Error: "+ err.message));


    return perfil;
}
console.log(getGitHubUserProfile('alenriquez96'))

// 6

function printGithubUserProfile(username){
    let perfil = fetch(`https://api.github.com/users/${username}`)
    .then(res => res.json())
    .then(data => {
        let name = data.name;
        let img = document.createElement('img');
        img.setAttribute('src', data.avatar_url);
        img.setAttribute('alt', data.name);
        let p = document.createElement('p');
        p.textContent = data.name;
        document.body.appendChild(img);
        document.body.appendChild(p);
        return {img,name};
        })
    return perfil;
}
printGitHubUserProfile('alenriquez96')

// 7 

function getAndPrintGithubUserProfile(username){
    let perfil = fetch(`https://api.github.com/users/${username}`)
    .then(res => res.json())
    .then(data => {
        let section = document.createElement('section');
        let imagen = document.createElement('img');
        img.setAttribute('src', data.avatar_url);
        img.setAttribute('alt', 'imagen de usuario');
        let h1 = document.createElement('h1');
        h1.textContent = data.name;
        let p = document.createElement('p');
        p.textContent = 'Public repos: ($(data.public_repos)'
        document.body.appendChild(section);
        section.appendChild(img);
        section.appendChild(h1);
        section.appendChild(p);

        return `<section>
                    <img src="${data.avatar_url}" alt="${data.name}">
                    <h1>${data.name}</h1>
                    <p>Public repos: ${data.public_repos}</p>
                </section>`
        })
    return perfil;
}

//8
// Cargar el DOM antes para hacer el último ejercicio
document.addEventListener('DOMContentLoaded', function () {
let btnBuscar = document.querySelector("#buscar");
    btnBuscar.addEventListener('click', function () {
        const username = document.querySelector("#username").value;

        if (username) {
            getAndPrintGitHubUserProfile(username);
        } else {
            alert("Ingresa un nombre de usuario, por favor");
        }
    })

});
