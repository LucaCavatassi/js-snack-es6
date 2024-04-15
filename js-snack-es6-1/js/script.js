const bikes = [ 
    {
        name: "Scott Gravel 50",
        weight: 10,
    },
    {
        name: "Specialized S-Works Tarmac SL8",
        weight: 6.4,
    },
    {
        name: "Cannondale Topstone 2",
        weight: 9.7,
    },
    {
        name: "Orbea Terra H30",
        weight: 8.5,
    },
    {
        name: "Triban Gravel 120",
        weight: 12,
    },
    {
        name: "Specialized Diverge E5",
        weight: 11,
    }
]

const weightArray = bikes.map(weightFunction)
console.log(weightArray);


const minValue = Math.min(...weightArray)
console.log(minValue);

let name, weight;
bikes.forEach((bike) => {
    ({name, weight} = bike);
    if (minValue === weight){
        const bikeDomElem = document.querySelector(".lightest-bike");
        bikeDomElem.innerHTML = 
        `
        ${name} <br>
        Pesa solo ${weight} KG
        
        `
        console.log(name);
    }
});




