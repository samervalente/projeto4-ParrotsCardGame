
//Validação do input
let quantidade = prompt("Digite uma quantidade de cartas entre 4 e 14")

while(quantidade < 4 || quantidade > 14 || quantidade % 2 != 0  ){
    quantidade = prompt("Valor Inválido. Digite uma quantidade par de cartas entre 4 e 14 ") 
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
let container = document.querySelector(".container")
function getCartas(){
    cartas.length = quantidade
    imagebank.length = quantidade/2
    for(let i = 0; i < imagebank.length; i ++){
        card = `
        <div class="carta ${imagebank[i]}"  onclick="virarcarta(this)">
            <div class="face front-face"><img src="images/front.png"></div>
            <div class="face back-face"><img src="images/${imagebank[i]}"></div> 
        </div>`
        cartas[i] = card 
        cartas[i+imagebank.length] = card
    }
    cartas.sort(comparador)
}

function adicionaCartas(){
    container.innerHTML = cartas.join('')
}

getCartas()
adicionaCartas()

function virarcarta(carta)
{
 if(carta.classList.contains("clicado") == false)
 {
    carta.classList.add("clicado")
    giraCarta(carta)
    pares.push(carta)
 }
 if(pares.length != 2)
 {
 }
 else if(pares.length = 2){
     if(pares[0].innerHTML == pares[1].innerHTML){
         pares = []
         console.log("Iguais")
     }
     else if(pares[0] !== pares[1]){
        console.log(carta.querySelector(".clicado").querySelectorAll(".front-face"))
         pares = []  
       
         console.log(carta.querySelector(".back-face"))
     }
    }  
}

function giraCarta(carta){
    carta.querySelector(".front-face").classList.add("rotacionafront")
    carta.querySelector(".back-face").classList.add("rotacionavoltaback")
}







