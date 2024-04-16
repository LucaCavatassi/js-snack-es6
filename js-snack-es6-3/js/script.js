// Itero ogni elemento con foreach
// Se alimentazione === benzina allora pusho in array vuoto benzina
// altrimenti alimentazione === diesel allora pusho in array vuoto diesel
// altrimenti alimentazione === elettrico pusho elettrico


const automobili = [
    { marca: "Toyota", modello: "Yaris", alimentazione: "ibrida" },
    { marca: "Volkswagen", modello: "Golf", alimentazione: "benzina" },
    { marca: "BMW", modello: "i3", alimentazione: "elettrico" },
    { marca: "Fiat", modello: "Panda", alimentazione: "metano" },
    { marca: "Renault", modello: "Clio", alimentazione: "diesel" },
    { marca: "Tesla", modello: "Model S", alimentazione: "elettrico" },
    { marca: "Ford", modello: "Focus", alimentazione: "benzina" },
    { marca: "Audi", modello: "A3", alimentazione: "diesel" },
    { marca: "Mercedes-Benz", modello: "EQC", alimentazione: "elettrico" },
    { marca: "Opel", modello: "Corsa", alimentazione: "gpl" }
];

let benzina = [];
let diesel = [];
let others = [];

automobili.forEach((item) => {
    if (item.alimentazione === "benzina"){
        benzina.push(item)
    } else if (item.alimentazione === "diesel"){
        diesel.push(item)
    } else {
        others.push(item)
    }
});

console.log(benzina, diesel, others);