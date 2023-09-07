const option1 = document.querySelector('#QID1')
const arrayQuestions = [{
    id: "A1",
    question: "¿Qué es dispositivo?",
    oldAnswer: "Es un objeto fisico que realiza alguna interacción con algo tecnologíco",
    newAnswer: "Es un objeto fisico que realiza alguna interacción con algo tecnologíco y generalmente forma parte de algo más grande"
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
    newAnswer: "El conjunto de normas y rutinas que permiten que un Pc cumpla una función o una tarea"
},
{
    id: "A21",
    question: "¿Qué es sistema operativo?",
    newAnswer: "Es un conjunto de programas que permiten la ejecución de otros programas en una computadora"
},
{
    id: "A4",
    question: "¿Qué es aplicación?",
    oldAnswer: "Es un programa pequeño, con una función especifica",
    newAnswer: "Es un programa pequeño, con una función especifica"
},
{
    id: "A22",
    question: "¿Qué es estructura de archivos y carpetas?",
    newAnswer: "Es una estructura en forma de arbol, donde se organiza un sistema por medio de la jerárquia de algunas carpetas, (las carpetas padres contienen archivos o carpetas más pequeñas)"
},
{
    id: "A5",
    question: "¿Qué es interfaz gráfica?",
    oldAnswer: "Es la parte visual de los programas y con la que se interactua",
    newAnswer: "Es una representación grafica de información"
}, {
    id: "A6",
    question: "¿Qué es interfaz de línea de comandos?",
    oldAnswer: "Es la forma de manejar sistemas operativos o programas sin GUI",
    newAnswer: "Es una forma de interactuar por medio de texto con distintos softwares"
},
{
    id: "A11",
    question: "¿Qué es internet?",
    oldAnswer: "Es un alojamiento de información a la que todos tienen acceso",
    newAnswer: "Es una red informatica, que se usa para trasmitir información"
},
{
    id: "A12",
    question: "¿Qué es web?",
    oldAnswer: "Es el nombre que le damos a donde estan todas las paginas web",
    newAnswer: "Es el nombre que se le da a la información alogada en una dirección web determinada"
},
{
    id: "A15",
    question: "¿Qué es un navegador web?",
    oldAnswer: "Es un sitio que nos permite acceder a otras paginas web, navegar entre ellas",
    newAnswer: "Es un software que interpreta la información de diversas paginas web y permite al usuario visualizar las paginas"
},
{
    id: "A16",
    question: "¿Qué es una página web?",
    oldAnswer: "Es una pagina alojado en internet",
    newAnswer: "Es el nombre que se le da a la información alogada en una dirección web determinada"
},
{
    id: "A17",
    question: "¿Qué es una sitio web?",
    oldAnswer: "Es un sitio completo alojado en internet",
    newAnswer: "Es el nombre que se le da a la información alogada en un conjunto de direcciones web determinadas"
},
{
    id: "A18",
    question: "¿Qué es una aplicación web?",
    oldAnswer: "Es un sitio completo alojado en internet que tiene funciones complejas",
    newAnswer: "Es un sitio completo alojado en internet que tiene funciones complejas y especificas",
},
{
    id: "A19",
    question: "¿Qué es un buscador web?",
    oldAnswer: "Es lugar que nos permite buscar y acceder a diferentes sitios",
    newAnswer: "Es software que nos permite buscar y acceder a diferentes sitios alojados en la web",
},
{
    id: "A20",
    question: "¿Qué es desarrollo web?",
    oldAnswer: "Es el proceso por el cual se crean nuevas paginas web",
    newAnswer: "Es el proceso por el cual se crean nuevas paginas web"
},
{
    id: "A13",
    question: "¿Qué es modelo cliente - servidor?",
    oldAnswer: "Es el modelo comun de las paginas web, el cliente interactua con la web y el servidor manipula los datos según corresponda",
    newAnswer: "Es el modelo comun de las paginas web, el cliente interactua con la web y el servidor manipula los datos según corresponda"
},
{
    id: "A14",
    question: "¿Qué pasa cuando navego a: “https://bit.institute”?",
    oldAnswer: "Me redirige por medio de una petición http y se me abre la web",
    newAnswer: "Me redirige por medio de una petición http y se me abre la web"
},
{
    id: "A10",
    question: "¿Qué es editor de código?",
    oldAnswer: "Es donde se codifica el software",
    newAnswer: "Es donde se codifica el software"
},
{
    id: "A23",
    question: "¿Qué es sintaxis?",
    newAnswer: "Modo de escribir de forma correcta un codigo (Cada lenguaje tiene una sintaxis propia que se caracteriza por ser rígida)"
},
{
    id: "A24",
    question: "¿Qué es comentario?",
    newAnswer: "En programación un comentario es una forma de agregar notas a nuestro codigo (Es texto que va en los archivos pero que no se va a ejecutar)"
},
{
    id: "A26",
    question: "¿Qué es palabra clave?",
    newAnswer: "Son palabras predefinidas y reservadas que hacen parte del lenguaje de programación y que no podemos usar como nombres de variables, funciones, etc"
},
{
    id: "A25",
    question: "¿Qué es herencia?",
    newAnswer: "En programación la herencia es la capacidad que tiene una clase de heredar o de obtener los mismos atributos y metodos de su clase padre"
},
{
    id: "A27",
    question: "¿Qué es sobreescrítura?",
    newAnswer: "Es la capacidad de modificar los metodos que una clase hija heredo de la clase padre"
},
{
    id: "A28",
    question: "¿Qué son las convenciones?",
    newAnswer: "Son reglas invisibles que se decidieron en comunidad que se usan para dar orden y limpieza al codigo (Sirven para homogeneizar el codigo y que pueda ser leído por diferentes desarroladores)"
},
{
    id: "A29",
    question: "¿Qué son las buenas prácticas?",
    newAnswer: "Son las formas correctas de escribir codigo estas permiten tener un codigo más eficiente y sostenible "
},
{
    id: "A7",
    question: "¿Qué es sistema de control de versiones?",
    oldAnswer: "Es un software que permite llevar control de avances y cambios en un proyecto",
    newAnswer: "Es un software que permite llevar control de avances y cambios en un proyecto"
},
{
    id: "A8",
    question: "¿Qué es alojamiento de control de versiones?",
    oldAnswer: "Es el sitio web donde se guarda el historial de control de versiones y el codigo del proyecto",
    newAnswer: "Es un servidor donde se guarda el historial de control de versiones y el codigo del proyecto, permite ademas ver los cambios entre versión y version y volver a una versión de ser necesario"
},
{
    id: "A9",
    question: "¿Qué es repositorio?",
    oldAnswer: "Es donde se almacena tanto el historial de control de versiones, como el codigo",
    newAnswer: "Es el lugar donde se almacena un proyecto"
},
{
    id: "A30",
    question: "¿Qué es una rama?",
    newAnswer: "Son diferetnes divisiones del codigo, una rama es una bifurcación en las versiones del codigo "
},
{
    id: "A31",
    question: "¿Qué es MARKDOWN?",
    newAnswer: "Es un lenguaje de escritura que permite dar formato a texto, empleando caracteres de forma especial, es un lenguaje muy eficiente y sencillo de usar"
},
{
    id: "A32",
    question: "¿Qué es README.md?",
    newAnswer: "Es un archivo que conteine información de un proyecto alojado en un repositorio, esta escrito en lenguaje markdown"
},
{
    id: "A33",
    question: "¿Qué es HTML?",
    newAnswer: "Lenguaje de marcado de hipertexto, no es un lenguaje de programación, es un lenguaje de etiquetas que le da estructura a una pagina web"
},
{
    id: "A34",
    question: "¿Qué es etiqueta?",
    newAnswer: "Son cada una de las partes que dividen la estructura de un HTML, por ejemplo un div, o un ul"
},
{
    id: "A35",
    question: "¿Qué es metadata?",
    newAnswer: "Es la información de una pagina web que le sirve al navegador para entender cosas acerca de nuestra web, como su idioma y su codificación de caracteres"
},
{
    id: "A36",
    question: "¿Qué es jerarquía (HTML)?",
    newAnswer: "Es la estructura de etiquetas con la cual se contruye un HTML, al crear etiquetas dentro de otras se va creando un arbol jerarquico"
},
{
    id: "A37",
    question: "¿Qué es accesibilidad?",
    newAnswer: "Es la capacidad de una pagina de adaptarse a diferentes formas de ser consumida por las necesidades de los usuarios"
},
{
    id: "A38",
    question: "¿Qué es SEO?",
    newAnswer: "'SEARCH ENGINE OPTIMIZATION' es el proceso de optimizar una pagina para que los buscadores web posiciones de mejor forma la pagina y alcance una mayor cantidad de usuarios"
},
{
    id: "A39",
    question: "¿Qué es CSS?",
    newAnswer: "'CASCADE STYLE SHEET' es un lenguaje que sirve para dar estilos a una pagina web"
},
{
    id: "A40",
    question: "¿Qué es implementar?",
    newAnswer: "Es llamar un archivo en otro y conectarlos para que funcionen en conjunto"
},
{
    id: "A41",
    question: "¿Qué es regla?",
    newAnswer: "Es la forma en la declaramos estilos para una etiqueta en CSS, ponemos la llave (Ej. display) y su valor (Ej. flex)"
},
{
    id: "A42",
    question: "¿Qué es especificidad?",
    newAnswer: "Dentro de html las etiquetas tiene una estructura jerarquica y para poder seleccionarlas podemos usar clases, IDs y demás formas, algunas tienen prioridad sobre otras a eso se le conoce como especificidad"
},
{
    id: "A43",
    question: "¿Qué es selector?",
    newAnswer: "Para aplicar estilos a una etiqueta de HTML debemos tener formas de diferenciarlas para aplicar los estilos a la etiqueta que tenemos, estos son los selectores, los más comunes son clases y IDs"
},
{
    id: "A44",
    question: "¿Qué es agrupación de selectores?",
    newAnswer: "Cuando varias etiquetas compartes los mismos estilos se pueden agrupar los selectores para escribir los estilos solo una vez y que se le apliquen a todos los selectores del grupo de selectores"
},
{
    id: "A45",
    question: "¿Qué es modelo de caja?",
    newAnswer: "El modelo de caja se refiere a la forma en la que se modelan los elementos de HTML en la web, estos tiene un contenido, un padding, luego un borde y un margen "
},
{
    id: "A46",
    question: "¿Qué es unidad?",
    newAnswer: "Es la forma en la que podemos poner valores numericos a nuestros estilos, existen varios tipos como em, rem, px, % y vh o vw  "
},
{
    id: "A47",
    question: "¿Qué es pseudo elemento?",
    newAnswer: "En css los pseudo elementos son las partes que no tiene un nodo especifico en el DOM, por ejemplo el primer parrafo de un texto o algo que haya seleccionado el usuario"
},
{
    id: "A48",
    question: "¿Qué es pseudo clase?",
    newAnswer: "En css las pseudo clases son la forma de controlar los estados un elemento específico como cuando se hace hover a un boton, o un input esta en focus"
},
{
    id: "A49",
    question: "¿Qué es propiedad personalizada?",
    newAnswer: "Son claves definidas por un desarrollador, son variables en css, se usan para mantener el diseño en un codigo, por ejemplo siempre usando unos colores definidos"
},
{
    id: "A50",
    question: "¿Qué es layout?",
    newAnswer: "Es la disposición en pantalla de los elementos de una pagina web "
},
{
    id: "A51",
    question: "¿Qué es responsivo?",
    newAnswer: "Es la capacidad de una pagina web de adaptarse a todos los dispositivos"
},
{
    id: "A52",
    question: "¿Qué es adaptativo?",
    newAnswer: "Es una forma de programar una pagina web para que se vea bien en cualquier dispositivo"
},
{
    id: "A53",
    question: "¿Qué es primer enfoque?",
    newAnswer: "Se refiere a la preferencia que se tuvo a la hora de construir la pagina web en cuanto a diseño para computador, tablet o dispositivo movil"
},
{
    id: "A54",
    question: "¿Qué es interfaz de usuario?",
    newAnswer: "Es la parte visible de una pagina web la cual ve el usuario y con la que interactua"
},
{
    id: "A55",
    question: "¿Qué es experiencia de usuario?",
    newAnswer: "Se refiere a la forma en la que un usuario interactua con una pagina web, siempre se trata de que esta interacción sea sencilla y rapida para el usuario"
},
{
    id: "A56",
    question: "¿Qué es solución de problemas?",
    newAnswer: "Es la capacidad de solventar error o situaciones que no permitan avanzar en el desarrollo"
},
{
    id: "A57",
    question: "¿Qué es lógica?",
    newAnswer: "Es la forma de abordar un problema o una situación a resolver, es la estrucctura y forma de solventar ese problema"
},
{
    id: "A58",
    question: "¿Qué es algoritmo?",
    newAnswer: "Es una secuencia de ordenes o funciones que realizan alguna función especifica como solucionar un problema  "
},
{
    id: "A59",
    question: "¿Qué es metodología de desarrollo?",
    newAnswer: "Son las pautas elegidas por un equipo o un desarrolador para estructurar su proceso de desarollo"
},
{
    id: "A60",
    question: "¿Qué es lenguaje de programación?",
    newAnswer: "Es un lenguaje que permite a un desarrollador escribir codigo que luego sera traducido a codigo maquina para ser ejecutado (su función es permitir al desarrollador escribir codigo sin recurrir a escribirlo en codigo maquina)"
},
{
    id: "A61",
    question: "¿Qué es motor de JavaScript?",
    newAnswer: "El motor de JavaScript toma el codigo escrito por un desarrolador en el lenguaje JavaScript y lo traduce a código ejecutable por la maquina en la que se corra el codigo"
},
{
    id: "A62",
    question: "¿Qué es implementar JavaScript?",
    newAnswer: "Es contruir codigo en JavaScript para luego llamarlo en un HTML y de esta forma agregarle dinamismo a nuestra pagina web"
},
{
    id: "A63",
    question: "¿Qué es un script?",
    newAnswer: "Es un bloque de codigo escrito en lenguaje JavaScript que puede ser llamado para ejecutar una función"
},
{
    id: "A64",
    question: "¿Qué es etiqueta script?",
    newAnswer: "Es un bloque de JavaScript insertado dentro de un archivo HTML, este bloque se debe añadir con la etiqueta <script></script>"
},
{
    id: "A65",
    question: "¿Qué es etiqueta noscript?",
    newAnswer: "Es una etiqueta que mostrara su contenido si por algún motivo el navegador web no permite ejecutar codigo JavaScript"
},
{
    id: "A66",
    question: "¿Qué es el objeto window?",
    newAnswer: "El objeto window se refiere al Nodo padre del DOM de una pagina web, es el elemento que contiene todas las demas etiquetas"
},
{
    id: "A67",
    question: "¿Qué es interacción?",
    newAnswer: "Son las formas de un usuario de recibir o dar información a una web (Ejs. alert, prompt, etc)"
},
{
    id: "A68",
    question: "¿Qué es declaración?",
    newAnswer: "Son cada linea de codigo de un archivo JS"
},
{
    id: "A69",
    question: "¿Qué es variable?",
    newAnswer: "Son espacios de memoría ram que se toman para almacenar un dato, este valor puede ser variable, puede cambiar"
},
{
    id: "A70",
    question: "¿Qué es variable?",
    newAnswer: "Son espacios de memoría ram que se toman para almacenar un dato, este valor NO puede ser variable, NO puede cambiar"
},
{
    id: "A71",
    question: "¿Qué es ámbito de las variables?",
    newAnswer: "Es el espacio en el codigo en el que una variable y su declaración va a ser tomada en cuenta, por ejemplo al declara la variable i dentro de un for, solo existira dentro de ese for"
},
{
    id: "A72",
    question: "¿Qué es ámbito de las variables?",
    newAnswer: "Es el espacio en el codigo en el que una variable y su declaración va a ser tomada en cuenta, por ejemplo al declara la variable i dentro de un for, solo existira dentro de ese for"
},
{
    id: "A73",
    question: "¿Qué es modo estricto?",
    newAnswer: "Es obligar a tu codigo JS a usar el ES6 y ademas no permite usar variables no declaradas"
},
{
    id: "A74",
    question: "¿Qué es tipos de dato primitivos?",
    newAnswer: "Son los datos sin metodos y que no son objetos, String, Number, Boolean, Undefined, Null"
},
{
    id: "A75",
    question: "¿Qué es operador typeof?",
    newAnswer: "Es un metodo de JS que nos permite saber el tipo de un dato"
},
{
    id: "A76",
    question: "¿Qué es conversión de tipos?",
    newAnswer: "Es pasar un dato de un tipo a otro para poder hacer diferentes cosas, por ejemplo pasar un numero de string a number, para poder sumarlo"
},
{
    id: "A77",
    question: "¿Qué es operadores?",
    newAnswer: "Sirven para realizar comparaciones y/o formulas dentro de un código"
},
{
    id: "A78",
    question: "¿Qué es control de flujo?",
    newAnswer: "Es una forma por la cual se puede ramificar el funcionamiento de una web según los valores de los datos del algoritmo"
},
{
    id: "A79",
    question: "¿Qué es 'Truthy' y 'Falsy'?",
    newAnswer: "Truthy es cualquier valor que sea verdadero, no necesariamente un booleano y los mismo Falsy, es todo valor falso que no es siempre un booleano, como undefined, null o 0"
},
{
    id: "A80",
    question: "¿Qué es estructura de datos?",
    newAnswer: "Las estructuras de datos son las formar de representar infomación en un algoritmo y ademas son la forma de manejar los datos de forma interna"
},
{
    id: "A81",
    question: "¿Qué es arreglo?",
    newAnswer: "Es una lista que puede almacenar diferentes tipos de datos"
},
{
    id: "A82",
    question: "¿Qué es objeto?",
    newAnswer: "Es una lista estructurada que tiene clave y valor, para guardar los datos con un identificador"
},
{
    id: "A83",
    question: "¿Qué es operador instanceof?",
    newAnswer: "Es una función que nos permite saber si un objeto extiende o no una clase"
},
{
    id: "A84",
    question: "¿Qué es funcion?",
    newAnswer: "Es una bloque de código que se declara para poder ser llamado en otra parte de código y ademas varias, la idea es ahorrar código y no repetir codigo "
},
{
    id: "A85",
    question: "¿Qué es parámetro?",
    newAnswer: "Son los valores que se le pasan a una función para que realize algún calculo o ejecute un algoritmo, estos datos se pasan al invocar la función y son variables"
},
{
    id: "A86",
    question: "¿Qué es argumento?",
    newAnswer: "Son los valores que se le pasan a una metodo para que realize algún calculo o ejecute un algoritmo, estos datos se pasan al invocar la función y son variables"
},
{
    id: "A87",
    question: "¿Qué es retorno?",
    newAnswer: "Las funciones tienen la capacidad de ejecutar algoritmos y calculos, los resultados de estos deben ser retornados para poder ser utilizados por el desarrolador en otra parte del código"
},
{
    id: "A88",
    question: "¿Qué es hoisting?",
    newAnswer: "Es la capacidad de JavaScript de usar variables y funciones antes de ser declaradas"
},
{
    id: "A89",
    question: "¿Qué es 'This'?",
    newAnswer: "This se usa para referirse a la instancia actual de una clase y sirve para seleccionar sus atributos"
},
{
    id: "A90",
    question: "¿Qué es Scope?",
    newAnswer: "Es lo que determina donde una variable esta declarada o no, por ejemplo el Scope de 'var' es global y las variables 'var' se pueden usar en cualquier parte del código "
},
{
    id: "A91",
    question: "¿Qué es destructurar?",
    newAnswer: "Es la capacidad de extraer valores de un array o un objeto y asignarlo a variables "
},
{
    id: "A92",
    question: "¿Qué es rest argumentos?",
    newAnswer: "Nos permite representar un array de cantidad de argumentos indefinido (EJ. Sirve iterar un array, cuando no sabemos la longitud del array)"
},
{
    id: "A93",
    question: "¿Qué es operador Spread?",
    newAnswer: "El operador Spread (...) permite añadir elementos a un array"
},
{
    id: "A94",
    question: "¿Qué es sincrónico?",
    newAnswer: "Es un código que se ejecuta de forma lineal"
},
{
    id: "A95",
    question: "¿Qué es asíncrono?",
    newAnswer: "Es un código que se ejecuta de forma no lineal, haciendo espera a ejecuciones que pueden tomar tiempo en completarse"
},
{
    id: "A96",
    question: "¿Qué es promesa?",
    newAnswer: "Una promesa es la forma de ejecutar una función asíncrona, estas promesas esperan la resolución de la función y si la resolución fue exitosa o salio mal, permiten controlar ambos escenarios"
},
{
    id: "A97",
    question: "¿Qué es manejo de errores?",
    newAnswer: "Es la forma de controlar los posibles resultados de una ejecución, si esta sale mal, poder actuar para que la pagina no colapse o funcione mal"
},
{
    id: "A98",
    question: "¿Qué es API?",
    newAnswer: "Es una interfaz de aplicaciones que permite acceder o modificar información de una base de datos por medio de enpoints (URLs) y permite conectar el BackEnd con el FrontEnd de un proyecto"
},
{
    id: "A99",
    question: "¿Qué es web APIs?",
    newAnswer: "Es un API alojada en la web, permite la conexión entre un BackEnd y un FrontEnd para dar lúgar a una aplicación web"
},
{
    id: "A100",
    question: "¿Qué es evento?",
    newAnswer: "Son las formas en las que un usuario interactua con una pagina web, como dar un click o selecionar un elemento"
},
{
    id: "A100",
    question: "¿Qué es IIFE?",
    newAnswer: "Son funciones que se ejecutan tan pronto como se definen"
},
{
    id: "A101",
    question: "¿Qué es JSON?",
    newAnswer: "JavaScript Object Notation, se refiere a una forma de escribir Strings los cuales sirven para comunicar BackEnd con FrontEnd, los JSONs son una forma universal de comunicación entre lenguajes de programación"
},
{
    id: "A102",
    question: "¿Qué es serialización?",
    newAnswer: "Es tomar un String y darle el formato de objeto para poder ser utilizado en código"
},
{
    id: "A103",
    question: "¿Qué es deserialización?",
    newAnswer: "Es tomar un JSON y darle el formato de string para poder ser leído y almacenado de forma sencilla"
},
{
    id: "A104",
    question: "¿Qué es web storage API?",
    newAnswer: "Es la forma en la que en navegador guarda en cache datos importantes para el funcionamiento de la pagina web, estos datos los guarda en formato clave/valor"
},
{
    id: "A105",
    question: "¿Qué es modularización?",
    newAnswer: "Es la capacidad de compartimentalizar archivos y comunicarlos entre ellos para tener un código ordenado y sostenible"
},
]

const questionsZone = document.querySelector('.DivQ')
const innerQuestions = (question, index) => {
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
}
const answerZone = document.querySelector('.QAZone')
const innerAnswer = (question, id) => {
    if (question.id == id) {
        answerZone.innerHTML = `
        <div id="A1" class="QAZoneContainer">
                    <h2>Mi Respuesta:</h2>
                    <h3>${question.newAnswer}</h3>
                     ${question.oldAnswer ? `<div> <h2> Mi vieja respuesta:</h2 > <h5>${question.oldAnswer}</h5></div >` : ''}
        </div>`
    }
}

arrayQuestions.map((question, index) => {
    innerQuestions(question, index)
})

let arrayNewQuestions = JSON.parse(localStorage.getItem("newQuestions"))
if (arrayNewQuestions == null) {
    arrayNewQuestions = []
    localStorage.setItem("newQuestions", JSON.stringify(arrayNewQuestions))
} else {
    arrayNewQuestions.map((question, index) => {
        innerQuestions(question, index)
    })
}

questionsZone.innerHTML += `
<div class="DivChieldQ" id="newQuestion" onclick="answerQuestion('newQuestion')">
                                <div class="numberQ">
                                    +
                                </div>
                                <div class="questionQ">
                                    Agrega vocabulario al glosario
                                </div>
                            </div>
        `
function answerQuestion(id) {
    arrayQuestions.map((question, index) => {
        innerAnswer(question, id)
    })
    arrayNewQuestions.map((question, index) => {
        innerAnswer(question, id)
    })
    if (id == 'newQuestion') {
        answerZone.innerHTML = `
        <div id="newQuestion" class="QAZoneContainer">
                        <h1 style="margin:0">Agrega terminos</h1>
                        <h1 style="margin:0"> a tú glosario</h1>
                        <form id="form">
                            <div class="divInputs">
                                <h2>Pregunta:</h2>
                                <input type="text" id="answerForm">
                            </div>
                            <div class="divInputs">
                                <h2>Respuesta:</h2>
                                <input type="text" id="questionForm">
                            </div>
                            <button type="submit" class="submitButton">
                                <h2>Registrar termino</h2>
                            </button>
                        </form>
                    </div>`

        const form = document.getElementById("form");
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const answerForm = document.getElementById('answerForm')
            const questionForm = document.getElementById('questionForm')
            const newQuestion = {
                id: answerForm.value,
                question: answerForm.value,
                newAnswer: questionForm.value
            }
            arrayQuestions.push(newQuestion)
            arrayNewQuestions.push(newQuestion)
            localStorage.setItem("newQuestions", JSON.stringify(arrayNewQuestions))
            questionsZone.innerHTML += `
    <div class="DivChieldQ" id="${answerForm.value}" onclick="answerQuestion('${answerForm.value}')">
        <div class="numberQ">
                                -
                            </div>
                            <div class="questionQ">
                                ${answerForm.value}
                            </div >
                            </div >
            `
        });

    }


}



