//Validação do input
let quantidade = prompt("Qual a quantidade de cartas?")

while(quantidade < 4 || quantidade > 14 || quantidade% 2 != 0  ){
    quantidade = prompt("Qual a quantidade de cartas?") 
}
//Cartas
let arrayCartas = [];
img1 = `<img class="img1" src="images/bobrossparrot.gif">`
img2 = `<img class="img2" src="images/explodyparrot.gif">`
img3 = `<img class="img3" src="images/fiestaparrot.gif">`
img4 = `<img class="img4" src="images/metalparrot.gif">`
img5 = `<img class="img4" src="images/revertitparrot.gif">`
img6 = `<img class="img4" src="images/tripletsparrot.gif">`
img7 = `<img class="img4" src="images/unicornparrot.gif">`

let imagebank = [img1,img1,img2,img2,img3,img3,img4,img4,img5,img5,img6,img6,img7,img7]
function adicionaCartas(){
    arrayCartas.length = quantidade;
    let card;        
    let container = document.querySelector(".container")
    for(let i = 0; i < arrayCartas.length; i++){
         card = `<div class="cartao" onclick="virarcarta(this)">
        <div class="face front-face"><img src="images/front.png"></div>
        <div class="face back-face">${imagebank[i]}</div> 
    </div>`
        arrayCartas[i] = card;
        container.innerHTML += arrayCartas[i]  
        console.log(arrayCartas[i]) 
    }
}

adicionaCartas()
console.log(arrayCartas)

arrayCartas.sort(comparador)
console.log(arrayCartas)
function comparador() { 
return Math.random() - 0.5; 
}

function virarcarta(carta){
    carta.querySelector(".front-face").classList.add("rotacionafront")
    carta.querySelector(".back-face").classList.add("rotacionavoltaback")
}


   
