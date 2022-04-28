async function requestAlbumsWithUsers() {
    try {
        const responseUsers = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!responseUsers.ok) {
            const message = `Error: ${response.status}`;
            throw new Error(message);
        }

        const users = await responseUsers.json();


        const responseAlbums = await fetch('https://jsonplaceholder.typicode.com/albums');
        if (!responseAlbums.ok) {
            const message = `Error: ${response.status}`;
            throw new Error(message);
        }
        const albums = await responseAlbums.json();

        showData(albums, users)
    } catch (error) {
        console.log(error)
    }
}

requestAlbumsWithUsers()

function showData(albums, users) {
    albums.sort(() => Math.random() - 0.5);
    const lista = document.getElementById("lista")
    for (const album of albums) {

        const user = users.find(newUser => newUser.id == album.userId);

        const title = document.createElement("h2")
        const userName = document.createElement("p")

        title.textContent = album.title
        userName.textContent = user.name

        lista.appendChild(title)
        lista.appendChild(userName)
    }
}