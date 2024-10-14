//RESUELVE TUS EJERCICIOS AQUI

//1
/* Declara una funcion getAllBreeds
que devuelva un array de strings con todas las razas de perro. */

function getAllBreeds(){
    let breeds = fetch('https://dog.ceo/api/breeds/list/all')
    .then(res=> res.json())
    .then(data=> Object.keys(data.message))
    .catch(err => console.log("Error: "+ err.message));
    return breeds;
}

//2
/* Declara una función getRandomDog
que obtenga una imagen random de una raza. */

function getRandomDog(){
    let imagen = fetch(`https://dog.ceo/api/breeds/image/random`)
    .then(res => res.json())
    .then(data => data.message)
    .catch(err => console.log("Error: "+ err.message));

    return imagen;
}

//3
/* Declara una función getAllImagesByBreed
que obtenga todas las imágenes de la raza komondor. */

function getAllImagesByBreed(){
    let imagenRaza = fetch(`https://dog.ceo/api/breed/komondor/images`)
    .then(res=> res.json())
    .then(data=> data.message)
    .catch(err => console.log("Error: "+ err.message));

    return imagenRaza;
}

//4
/* Declara una funcion getAllImagesByBreed2(breed)
que devuelva las imágenes de la raza pasada por el argumento */

function getAllImagesByBreed2(breed){
    let imagenRaza = fetch(`https://dog.ceo/api/breed/${breed}/images`)
    .then(res => res.json())
    .then(data => data.message)
    .catch(err => console.log("Error: "+ err.message));

    return imagenRaza;
}

//5

/*
 Declarara una función getGitHubUserProfile(username)
 que obtenga el perfil de usuario de github
 a partir de su nombre de usuario. (https://api.github.com/users/{username}). */

function getGitHubUserProfile(username){
    let perfil = fetch(`https://api.github.com/users/${username}`)
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.log("Error: "+ err.message));

    return perfil;
}

// 6
/* Declara una función printGithubUserProfile(username)
que reciba como argumento el nombre de un usuario (username),
retorne {img, name} y pinte la foto y el nombre en el DOM. */

function printGithubUserProfile(username) {
    const result = getGitHubUserProfile(username)
        .then(data => {
            let name = data.name;
            let img = data.avatar_url
            // Pintar en el DOM
            let imgDOM = document.createElement('img');
            imgDOM.setAttribute('src', data.avatar_url);
            imgDOM.setAttribute('alt', data.name);

            let p = document.createElement('p');
            p.textContent = data.name;

            document.body.appendChild(imgDOM);
            document.body.appendChild(p);
            // Devolver lo que nos pide
            return { img, name };
        })
        .catch(err => console.log("MENSAJE DE ERROR: " + err.message));
    return result
}
// 7 

/* Crea una función getAndPrintGitHubUserProfile(username)
que contenga una petición a la API para obtener información
de ese usuario y devuelva un string que represente una tarjeta HTML
como en el ejemplo, la estructura debe ser exactamente la misma:

<section>
    <img src="url de imagen" alt="imagen de usuario">
    <h1>Nombre de usuario</h1>
    <p>Public repos: (número de repos)</p>
</section> */

function getAndPrintGitHubUserProfile(username) {
    let perfil = fetch(`https://api.github.com/users/${username}`)
        .then(res => res.json())
        .then(data => {
            let section = document.createElement('section');
            let img = document.createElement('img');
            img.setAttribute('src', data.avatar_url);
            img.setAttribute('alt', "imagen de usuario");
            let h1 = document.createElement('h1');
            h1.textContent = data.name;
            let p = document.createElement('p');
            p.textContent = `Public repos: (${data.public_repos})`
            document.body.appendChild(section);
            section.appendChild(img);
            section.appendChild(h1);
            section.appendChild(p);
            return `
                <section>
                    <img src="${data.avatar_url}" alt="${data.name}">
                    <h1>${data.name}</h1>
                    <p>Public repos: ${data.public_repos}</p>
                </section>
            `
        })
    return perfil;
}

//8

/* Manipulación del DOM: Crea un input de tipo texto,
y un botón buscar. El usuario escribirá en el input el nombre de usuario
de GitHub que quiera buscar. Después llamaremos
a la función getAndPrintGitHubUserProfile(username)
que se ejecute cuando se pulse el botón buscar.(Esto no se testea). */

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

//9

/* Dada una lista de usuarios de github guardada en una array,
crea una funcion fetchGithubUsers(userNames) que utilice 'https://api.github.com/users/${name}' para obtener el nombre de cada usuario.
Objetivo: Usar Promise.all()
Recordatorio: Una llamada a fetch() devuelve un objeto promesa.
Pregunta. ¿cuántas promesas tendremos?
Hasta que no se resuelvan todas las promesas desencadenadas por cada fetch(), no se cargarán los datos.

Pasos:

Mapear el array y hacer un fetch() para cada usuario.
Esto nos de vuelve un array lleno de promesas.
Con Promise.all() harás que se tenga que resolver
todo el proceso de peticiones a GitHub a la vez.
Cuando Promise.all() haya terminado: Consigue que se imprima
por consola la url del repositorio de cada usuario.
Consigue que se imprima por consola el nombre de cada usuario. */

function fetchGithubUsers(userNames) {
    Promise.all(
        userNames.map(nombre => fetch(`https://api.github.com/users/${nombre}`).then(res => res.json()))
    ).then(data => {
        for (let i = 0; i < data.length; i++) {
            console.log(data[i].name)
        }
    })
}

    fetchGithubUsers(['octocat', 'alenriquez96', 'alejandroereyesb']).then(users => console.log(user))