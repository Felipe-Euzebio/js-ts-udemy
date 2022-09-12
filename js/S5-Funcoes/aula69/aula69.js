// arguments - sustenta todos os argumentos passados para a função
function myFunction() {
    console.log(arguments);
}
myFunction('teste1', 'teste2', 'teste3');

function soma(){
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log('Resultado: ' + total);
}
soma(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Argumentos e parametros
function subtracao(a, b) {
    console.log('Resultado: ' + (a - b));
}
subtracao(10, 5);

// Desestruturacao de objetos
function userInfoObj({name, surname, age}) {
    console.log(name, surname, age);
}
objUserInfo1 = {name: 'John', surname: 'Doe', age: 30}
userInfoObj(objUserInfo1);

// Desestruturacao de arrays
function userInfoArr([name, surname, age]) {
    console.log(name, surname, age);
}
objUserInfo2 = ['John', 'Doe', 30]
userInfoArr(objUserInfo2);

// Rest Operator
function conta(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '*') acumulador *= numero;
        if (operador === '/') acumulador /= numero;
    }
    console.log(acumulador);
}
conta('+', 10, 20, 30, 40, 50);