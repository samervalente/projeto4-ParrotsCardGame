
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
let acertos = 0;
let jogadas = 0;
let tempo = 0;
let minuto = 0; 


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

document.querySelector(".tempo").innerHTML = `Tempo: ${parseInt(minuto)} min : ${tempo++} seg`

function adicionaCartas(){
    container.innerHTML = cartas.join('')
}

getCartas()
adicionaCartas()

let carta;

function virarcarta(carta)
{

 if(carta.classList.contains("clicado") == false)
 {
    
    giraCarta(carta)
    pares.push(carta)
 }
 if(pares.length != 2)
 {
    
 }
 else if(pares.length == 2){
   

     if(pares[0].innerHTML === pares[1].innerHTML){ 
         pares = []
         acertos ++
         jogadas ++
         document.querySelector(".jogadas").innerHTML = `Jogadas: ${jogadas}`
         if(acertos == quantidade/2){
            console.log("GANHOUU!")
        }
     }
     
     else if(pares[0] !== pares[1]){
        jogadas ++
        document.querySelector(".jogadas").innerHTML = `Jogadas: ${jogadas}`
        pares[0].classList.remove("clicado")
        pares[1].classList.remove("clicado")
         let carta1B = pares[0].querySelector(".back-face")
         let carta2B = pares[1].querySelector(".back-face")

         let carta1F = pares[0].querySelector(".front-face")
         let carta2F = pares[1].querySelector(".front-face")
         pares = []  

        function mostra(){
            carta1B.classList.remove("rotacionavoltaback")
            carta1B.classList.add("rotaciona180")
            carta1F.classList.remove("rotacionafront")
            carta1F.classList.add("rotacionavoltaback")

            carta2B.classList.remove("rotacionavoltaback")
            carta2B.classList.add("rotaciona180")
            carta2F.classList.remove("rotacionafront")
            carta2F.classList.add("rotacionavoltaback")
        }
       setTimeout(mostra, 1000)   
     }  
    }  
}

function giraCarta(carta){
    carta.querySelector(".front-face").classList.add("rotacionafront")
    carta.querySelector(".back-face").classList.add("rotacionavoltaback")
    carta.querySelector(".front-face").classList.remove("rotacionavoltaback")
    carta.querySelector(".back-face").classList.remove("rotaciona180")
   
}

//tempo = 0
setInterval(function (){
  
    if(acertos != quantidade/2){
        if(tempo == 60){
            minuto ++
            tempo = 0 
        }
        document.querySelector(".tempo").innerHTML = `Tempo: ${parseInt(minuto)} min : ${tempo++} s`
    }
  
}, 1000)


