// Declaracao e chamada de funcao (Function Hoisting)
// First-Class Objects (Objetos de primeira classe)
function helloWorld() {    
    console.log("Hello World!");
}

helloWorld();

// Function Expression
const user = function() {
    console.log("John Doe");
}

function executeFunction(fn) {
    console.log("Executando a funcao...");
    fn();
}

executeFunction(user);

// Arrow Function
const arrowFunction = () => {
    console.log("Arrow Function");
}
arrowFunction();

// Anonymous Function
setInterval(function() {
    console.log("Executando a funcao anonima...");
}, 3000);

// Dentro de um objeto V1
const obj1 = {
    falar: function() {
        console.log("Falando...");
    }
}
obj1.falar();

// Dentro de um objeto V2
const obj2 = {
    falar() {
        console.log("Falando novamente...");
    }
}
obj2.falar();