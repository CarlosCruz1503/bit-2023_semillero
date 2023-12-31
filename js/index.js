const option1 = document.querySelector('#QID1')

const arrayQuestions = [{
    id: "A1",
    question: "¿Qué es dispositivo?",
    oldAnswer: "Es un objeto fisico que realiza alguna interacción con algo tecnologíco",
    newAnswer: "Es un objeto fisico que realiza alguna interacción con algo tecnologíco"
}, {
    id: "A2",
    question: "¿Qué es hardware?",
    oldAnswer: "Los dispositivos fisicos que intervienen en los procesos computacionales",
    newAnswer: "Los dispositivos fisicos que intervienen en los procesos computacionales"
},
{
    id: "A3",
    question: "¿Qué es software?",
    oldAnswer: "Los programas que intervienen en los procesos computacionales",
    newAnswer: "Los programas que intervienen en los procesos computacionales"
},
{
    id: "A4",
    question: "¿Qué es aplicación?",
    oldAnswer: "Es un programa pequeño, con una función especifica",
    newAnswer: "Es un programa pequeño, con una función especifica"
},
{
    id: "A5",
    question: "¿Qué es interfaz gráfica?",
    oldAnswer: "Es la parte visual de los programas y con la que se interactua",
    newAnswer: "Es un objeto fisico que realiza alguna interacción con algo tecnologíco"
}, {
    id: "A6",
    question: "¿Qué es interfaz de línea de comandos?",
    oldAnswer: "Es la forma de manejar sistemas operativos o programas sin GUI",
    newAnswer: "Los dispositivos fisicos que intervienen en los procesos computacionales"
},
{
    id: "A7",
    question: "¿Qué es sistema de control de versiones?",
    oldAnswer: "Es un software que permite llevar control de avances y cambios en un proyecto",
    newAnswer: "Los programas que intervienen en los procesos computacionales"
},
{
    id: "A8",
    question: "¿Qué es alojamiento de control de versiones?",
    oldAnswer: "Es el sitio web donde se guarda el historial de control de versiones y el codigo del proyecto",
    newAnswer: "Es un programa pequeño, con una función especifica"
},
{
    id: "A9",
    question: "¿Qué es repositorio?",
    oldAnswer: "Es donde se almacena tanto el historial de control de versiones, como el codigo",
    newAnswer: "Es un programa pequeño, con una función especifica"
},
{
    id: "A10",
    question: "¿Qué es editor de código?",
    oldAnswer: "Es donde se codifica el software",
    newAnswer: "Es un objeto fisico que realiza alguna interacción con algo tecnologíco"
}, {
    id: "A11",
    question: "¿Qué es internet?",
    oldAnswer: "Es un alojamiento de información a la que todos tienen acceso",
    newAnswer: "Los dispositivos fisicos que intervienen en los procesos computacionales"
},
{
    id: "A12",
    question: "¿Qué es web?",
    oldAnswer: "Es el nombre que le damos a donde estan todas las paginas web",
    newAnswer: "Los programas que intervienen en los procesos computacionales"
},
{
    id: "A13",
    question: "¿Qué es modelo cliente - servidor?",
    oldAnswer: "Es el modelo comun de las paginas web, el cliente interactua con la web y el servidor manipula los datos según corresponda",
    newAnswer: "Es un programa pequeño, con una función especifica"
},
{
    id: "A14",
    question: "¿Qué pasa cuando navego a: “https://bit.institute”?",
    oldAnswer: "Me redirige por medio de una petición http y se me abre la web",
    newAnswer: "Es un programa pequeño, con una función especifica"
},
{
    id: "A15",
    question: "¿Qué es un navegador web?",
    oldAnswer: "Es un sitio que nos permite acceder a otras paginas web, navegar entre ellas",
    newAnswer: "Es un programa pequeño, con una función especifica"
},
{
    id: "A16",
    question: "¿Qué es una página web?",
    oldAnswer: "Es una pagina alojado en internet",
    newAnswer: "Es un programa pequeño, con una función especifica"
},
{
    id: "A17",
    question: "¿Qué es una sitio web?",
    oldAnswer: "Es un sitio completo alojado en internet",
    newAnswer: "Es un programa pequeño, con una función especifica"
},
{
    id: "A18",
    question: "¿Qué es una aplicación web?",
    oldAnswer: "Es un sitio completo alojado en internet que tiene funciones complejas",
    newAnswer: "Es un programa pequeño, con una función especifica"
},
{
    id: "A19",
    question: "¿Qué es un buscador web?",
    oldAnswer: "Es lugar que nos permite buscar y acceder a diferentes sitios",
    newAnswer: "Es un programa pequeño, con una función especifica"
},
{
    id: "A20",
    question: "¿Qué es desarrollo web?",
    oldAnswer: "Es el proceso por el cual se crean nuevas paginas web",
    newAnswer: "Es un programa pequeño, con una función especifica"
},
]

const questionsZone = document.querySelector('.DivQ')
arrayQuestions.map((question, index) => {
    questionsZone.innerHTML += `
    <div class="DivChieldQ" id="${question.id}" onclick="answerQuestion('${question.id}')">
        <div class="numberQ">
                                ${index + 1}
                            </div>
                            <div class="questionQ">
                                ${question.question}
                            </div>
                            </div>
        `
})

function answerQuestion(id) {
    console.log("hola")
    const answerZone = document.querySelector('.QAZone')
    arrayQuestions.map((question, index) => {
        console.log(question.id)
        console.log(id)
        if (question.id == id) {
            answerZone.innerHTML = `
        <div id="A1" class="QAZoneContainer">
                    <div >
                        <h2>Mi vieja respuesta:</h2>
                        <h3><b>${question.oldAnswer}</b></h3>
                    </div>
                    <div>
                    <h2>Mi nueva respuesta:</h2>
                    <h3><b>${question.newAnswer}</b></h3>
            </div>
        </div>`
        }
    })

}



