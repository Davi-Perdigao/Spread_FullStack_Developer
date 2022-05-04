function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${
        this.idade + anos
    } anos de idade.`;
}

const someFriends = [
    {
        nome: "Lucas",
        idade: 22,
    },
    {
        nome: "Melyssa",
        idade: 21,
    },
];

const pessoa = {
    nome: "Fulana",
    idade: 37,
};

console.log(calculaIdade.call(someFriends[1], 3)); //sem []
console.log(calculaIdade.apply(pessoa, [8])); //[]