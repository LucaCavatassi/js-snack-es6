//  Creo un array di persone, foreach persona se persona.età > 18 allora può guidare.

const persons = [
    {
        nome: "pippo",
        cognome: "rossi",
        età: 18,
    },
    {
        nome: "pluto",
        cognome: "bianchi",
        età: 13
    },
    {
        nome: "pietro",
        cognome: "verdi",
        età: 32
    }
]
console.log(persons);

const resultArray = [];
persons.forEach((item) => {
    if (item.età >= 18) {
        resultArray.push(`${item.nome} ${item.cognome} può guidare perchè ha ${item.età} anni.`)
    } else {
        resultArray.push(`${item.nome} ${item.cognome} non può guidare perché ha ${item.età} anni, meno di 18 anni.`)
    }
});

console.log(resultArray);