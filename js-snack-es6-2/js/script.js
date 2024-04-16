const teams = [ 
    {
        name: "Juventus",
        points: Math.floor(Math.random() * 115),
        receivedFouls: Math.floor(Math.random() * 151),
    },
    {
        name: "Inter",
        points: Math.floor(Math.random() * 115),
        receivedFouls: Math.floor(Math.random() * 151),
    },
    {
        name: "Milan",
        points: Math.floor(Math.random() * 115),
        receivedFouls: Math.floor(Math.random() * 151),
    },
    {
        name: "Roma",
        points: Math.floor(Math.random() * 115),
        receivedFouls: Math.floor(Math.random() * 151),
    },
    {
        name: "Napoli",
        points: Math.floor(Math.random() * 115),
        receivedFouls: Math.floor(Math.random() * 151),
    },
    {
        name: "Lazio",
        points: Math.floor(Math.random() * 115),
        receivedFouls: Math.floor(Math.random() * 151),
    }
]
console.log(teams);

const teams2 = []
teams.forEach((item) => {
    const {name, receivedFouls} = item 
    // console.log(name, receivedFouls);
    
    const newTeam = {};
    newTeam.name = name;
    newTeam.receivedFouls = receivedFouls
    // console.log(newTeam);
    teams2.push(newTeam)
})
console.log(teams2);