const button = document.getElementById("share")

function rezeptTeilen(){
    alert("Rezept wird geteilt")
}
button.addEventListener("click",rezeptTeilen)

const rezepte = [
    {
        name:"Pizza",
        kochdauer:30,
        beschreibung:"Der einzige Unterschied zu den unzähligen Rezepten besteht eigentaten immer ",
        zutaten:[
            {name:"Tomate",stueckzahl:2},
            {name:"Kaese",stueckzahl:4},
            {name:"Salami",stueckzahl:5},
            {name:"Pilze",stueckzahl:2},
            {name:"Schinken",stueckzahl:3}
            
        ],
        author:"Max",
        bild:"src=jpg"
    }
]