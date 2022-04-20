const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("search");

//Imprimirá "hola"
console.log(id)

const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    sendData(form)
})

async function sendData() {
    try {
        const formData = new FormData(form)
        const queryString = new URLSearchParams(formData).toString()

        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "POST",
            body: queryString,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        });
        if (!response.ok) {
            const message = `Error: ${response.status}`;
            throw new Error(message);
        }
        const data = await response.json();

        //Forma 1
        // const valores = data.title + " " + data.body

        //Forma 2
        //const valores = `${data.title} ${data.body}`

        const valores = `título: ${data.title} cuerpo: ${data.body}`;

        console.log(valores);

        // alert("Todo bien")
        // window.location.href = "index.html"

    } catch (error) {
        console.log(error)
    }
}
