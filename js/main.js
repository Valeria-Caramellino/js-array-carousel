//creo i div e il contenitore
let container = document.createElement("div");
container.id = "container";
document.body.append(container);

let box = document.createElement("div");
box.id = "box";
container.append(box);


//creo le card
let card0= document.createElement("img");
card0.className = "card";
card0.src= "img/01.webp";
box.append(card0);

let card1= document.createElement("img");
card1.className = "card hidden";
card1.src="img/02.webp";
box.append(card1);

let card2= document.createElement("img");
card2.className = "card hidden";
card2.src="img/03.webp";
box.append(card2);

let card3= document.createElement("img");
card3.className = "card hidden";
card3.src="img/04.webp";
box.append(card3);

let card4= document.createElement("img");
card4.className = "card hidden";
card4.src="img/05.webp";
box.append(card4);

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

//raggruppo le card 
let cardElements = document.getElementsByClassName("card");
let inizioCard = 0;

//bottone avanti
buttonGo.addEventListener("click", function(){
    if(inizioCard < 4) {
        for (let c = 0; c < cardElements.length; c++) {
            const carte = cardElements[c];

            if(c == inizioCard+1 ) {
                carte.classList.remove("hidden");
            } else {
                carte.classList.add("hidden");  
            }
        }
        inizioCard++;
    } else {
        console.log("non c'è una slide successiva");
    }
});

//bottone indietro
buttonBeck.addEventListener("click", function(){

    if(inizioCard>0) {
        for (let c = 0; c < cardElements.length; c++) {
                const carte = cardElements[c];

            if(c == inizioCard-1 ) {
                carte.classList.remove("hidden");
            } else {
                carte.classList.add("hidden");
            }
        }
        
        inizioCard--;
    } else {
        console.log("non c'è una slide precedente");
    }

});