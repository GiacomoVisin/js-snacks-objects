
// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.





const arrayBikes = [
    {
       name: "bikeOne",
       weight: ``   
    },

    {
       name: "bikeTwo",
       weight: ``   
    },

    {
       name: "bikeThree",
       weight: ``
    },

    {
       name: "bikeFour",
       weight: ``   
    }
]

for (let i = 0; i < arrayBikes.length; i++){
    let userWeightInput = Number(prompt(`${`inserisci il peso di`} ${ arrayBikes[i].name}`))
    arrayBikes[i].weight = userWeightInput
}



let lighterBike = arrayBikes[0]

for (let i=1; i < arrayBikes.length; i++){
    if(arrayBikes[i].weight < lighterBike.weight){
        lighterBike = arrayBikes[i]
    }
}

    console.log(`la bici piu leggera è ${lighterBike.name} con peso di ${lighterBike.weight}`)
    


// Snack2
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


const footballTeam = [
    {
        name: Juventus,
        score: 0,
        foul: 0
    },
    {
        name: Napoli,
        score: 0,
        foul: 0
    },
    {
        name: Milan,
        score: 0,
        foul: 0
    },
    {
        name: Inter,
        score: 0,
        foul: 0
    },
    {
        name: Roma,
        score: 0,
        foul: 0
    }
]


