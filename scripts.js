const btRequest = document.getElementById('btRequest')

btRequest.addEventListener('click', () => {
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

function showData(data) {
    const lista = document.getElementById("lista")

    for (const user of data) {
        //console.log(user.id + " - " + user.name)
        const li = document.createElement("li")

        li.textContent = user.name

        lista.appendChild(li)
    }
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