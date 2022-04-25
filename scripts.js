const btRequest = document.getElementById('btRequest')
let contador = 0

onRequestAsync()
btRequest.addEventListener('click', () => {
    contador++
    onRequestAsync()
})


function onRequest() {
    //Test git
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(data => {
            if (!data.ok) {
                const message1 = "Error: +" + data.status + " error";
                const message = `Error: ${data.status} error`;
                throw new Error(message);
            }
            return data.json()
        })
        .then(data => {
            //console.log(data)

            //Mostrar por consola ID - Nombre
            /*  console.log(data[0].id + " - " + data[0].name)
              console.log(data[1].id + " - " + data[1].name)*/

            for (const user of data) {
                console.log(user.id + " - " + user.name)
            }
        })
        .catch(error => {
            console.log(error)
        });
}

async function onRequestAsync() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            const message = `Error: ${response.status}`;
            throw new Error(message);
        }
        const users = await response.json();
        showData(users);
    } catch (error) {
        console.log(error)
    }
}

let usersTemporal = []
function showData(data) {
    const lista = document.getElementById("lista")
    console.log(contador)
    //Solucion 1. Borrar los datos de la lista para que no se repitan despues
    //lista.innerHTML = ""

    if (contador == 2) {
        data.push({
            id: 11, name: "Gepetto Equisdé", website: "url.com", address: {
                geo: {
                    lat: "-37.3159",
                }
            }
        });
    }

    for (const user of data) {
        //console.log(user.id + " - " + user.name)
        //Solucion 2. con find

        const newUser = usersTemporal.find(newUser => newUser.id == user.id);
        console.log(user.address.geo.lat)
        //Comparacion 1
        //if(newUser === undefinded){
        //Comparacion 2
        if (!newUser) {
            const div = document.createElement("div")
            const a = document.createElement("a")
            const img = document.createElement("img")
            const pNombre = document.createElement("p")
            const pCatch = document.createElement("p")

            div.classList.add("celda")
            img.classList.add("image")

            //Forma concatenar 1
            a.href = `http://${user.website}`

            //Forma concatenar 2
            a.href = "http://" + user.website

            a.textContent = user.website

            img.src = "https://picsum.photos/200"

            pNombre.textContent = user.name
            pCatch.textContent = user.company.catchPhrase

            div.appendChild(img)
            div.appendChild(pNombre)
            div.appendChild(pCatch)
            div.appendChild(a)

            lista.appendChild(div)
        }

    }

    usersTemporal = data
}


async function onRequest2() {
    try {
        const result = await fetch('https://jsonplaceholder.typicode.com/users')

        if (!result.ok) {
            const message1 = "Error: +" + result.status + " error";
            const message = `Error: ${result.status} error`;
            throw new Error(message);
        }
        const data = await result.json()

        for (const user of data) {
            console.log(user.id + " - " + user.name)
        }
    } catch (error) {
        //mostrat error al usuario en un modal, alert
        console.log(error)
    }
}