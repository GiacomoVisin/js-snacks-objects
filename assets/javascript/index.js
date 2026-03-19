
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




    

    


