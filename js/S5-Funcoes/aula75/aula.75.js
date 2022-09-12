// Factory Functions
function criaPessoa(nome, sobrenome, idade, altura, peso) {
    return {

        nome,
        sobrenome,
        idade,

        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },
        
        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        fala: function(assunto) {
            return `${nome} ${sobrenome} está falando sobre ${assunto}.`;
        },

        altura,
        peso,

        imc: function() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        },

        get maiorDeIdade() {
            return this.idade >= 18 ? 'Sim!' : 'Não!';
        }

    };
}

const p1 = criaPessoa('Luiz', 'Otávio', 25, 1.8, 80);

console.log(p1);

console.log(`Nome: ${p1.nome}`);

console.log(`Nome Completo: ${p1.nomeCompleto}`);

console.log(p1.fala('Javascript'));

console.log(`O IMC de ${p1.nome} ${p1.sobrenome} é ${p1.imc()}`);

console.log(`A idade ${p1.nome} ${p1.sobrenome} é ${p1.idade} anos.`);

console.log(`${p1.nome} ${p1.sobrenome} é maior de idade? ${p1.maiorDeIdade}`);

p1.nomeCompleto = 'Luiz Otávio Miranda';

console.log(`Novo Nome Completo: ${p1.nomeCompleto}`);