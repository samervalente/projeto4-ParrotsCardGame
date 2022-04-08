
//Validação do input
let quantidade = prompt("Qual a quantidade de cartas?")

while(quantidade < 4 || quantidade > 14 || quantidade % 2 != 0  ){
    quantidade = prompt("Qual a quantidade de cartas?") 
}

//Banco de imagens
let imagebank = ["bobrossparrot.gif","explodyparrot.gif","fiestaparrot.gif","metalparrot.gif","revertitparrot.gif","tripletsparrot.gif","unicornparrot.gif"]

let card;
let cartas = [];
let pares = []

function comparador() { 
    return Math.random() - 0.5; 
}

imagebank.sort(comparador)

function getCartas(){
    cartas.length = quantidade
    imagebank.length = quantidade/2
    for(let i = 0; i < imagebank.length; i ++){
        card = `
        <div class="cartao" onclick="virarcarta(this)">
            <div class="face front-face"><img src="images/front.png"></div>
            <div class="face back-face"><img src="images/${imagebank[i]}"></div> 
        </div>`
        cartas[i] = card 
        cartas[i+imagebank.length] = card
    }
    cartas.sort(comparador)
}

function adicionaCartas(){
    let container = document.querySelector(".container")
   
    container.innerHTML = cartas
}

getCartas()
adicionaCartas()
console.log(pares)
console.log(cartas)

function virarcarta(carta){
    carta.querySelector(".front-face").classList.add("rotacionafront")
    carta.querySelector(".back-face").classList.add("rotacionavoltaback")
}


   
