//creo i div e il contenitore
let container = document.createElement("div");
container.id = "container";
document.body.append(container);

let box = document.createElement("div");
box.id = "box";
container.append(box);

//creazione bottoni
let buttonGo = document.createElement ("button");
buttonGo.type = buttonGo;
buttonGo.innerHTML = '▲';
buttonGo.className = "btnAvanti btnStyle";
box.append(buttonGo);

let buttonBeck = document.createElement ("button");
buttonBeck.type = buttonBeck;
buttonBeck.innerHTML = '▼';
buttonBeck.className = "btnIndietro btnStyle";
box.append(buttonBeck);


//creo le card
const immagini = [
    "img/01.webp",
    "img/02.webp",
    "img/03.webp",
    "img/04.webp",
    "img/05.webp",
]

const insiemeImmagini = document.getElementById("box");

for (let i = 0; i < immagini.length; i++) {
    const risultato = immagini[i];
    const img = document.createElement("img");
    img.src = risultato;
    
    if ( i === 0 ){
        img.classList.add("visibile");
    }
    box.append(img);
}


//raggruppo le card 
const imgContainer = document.querySelectorAll("#box > img");
let inizioCard = 0;

//bottone avanti
buttonGo.addEventListener("click", function(){
    imgContainer[inizioCard].classList.remove("visibile");
    inizioCard++;
    if ( inizioCard == imgContainer.length ){
        inizioCard= 0;
    }
    imgContainer[inizioCard].classList.add("visibile");
});

//bottone indietro
buttonBeck.addEventListener("click", function(){
    imgContainer[inizioCard].classList.remove("visibile");
    inizioCard--;
    if ( inizioCard < 0 ){
        inizioCard= imgContainer.length -1;
    }
    imgContainer[inizioCard].classList.add("visibile");
});
