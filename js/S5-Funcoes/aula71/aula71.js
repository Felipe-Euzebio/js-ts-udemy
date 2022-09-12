// Escopo Léxico
const nome = 'Luiz';

function falaNome() {
    const nome = 'Otavio';
    console.log(nome);
}

function usaFalaNome() {
    falaNome();
}

usaFalaNome();