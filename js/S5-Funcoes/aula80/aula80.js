// Funções geradoras (lazy evaluation)

function* geradora1() {
    // Código qualquer ...
    yield 'Valor 1';
    // Código qualquer ...
    yield 'Valor 2';
    // Código qualquer ...
    yield 'Valor 3';
}

const g1 = geradora1();

for (let valor of g1) {
    console.log(valor);
}

function* geradora2() {
    let i = 0;

    while (true) {
        yield i;
        i++;
    }
}

const g2 = geradora2();

console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);

function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}

function* delegarGerador(){
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}

const dg = delegarGerador();

for (let valor of dg) {
    console.log(valor);
}

function* geradora4() {
    yield function() {
        console.log('Vim do y1');
    };

    yield function() {
        console.log('Vim do y2');
    };

    return function() {
        console.log('Vim do return');
    }
}

const g4 = geradora4();

const func1 = g4.next().value;
const func2 = g4.next().value;
const func3 = g4.next().value;

func1();
func2();
func3();

