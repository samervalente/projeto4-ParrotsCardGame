let quantidade = prompt("Qual a quantidade de cartas?")
let array = [];

while(quantidade < 4 || quantidade > 14 || quantidade% 2 != 0  ){
    quantidade = prompt("Qual a quantidade de cartas?")
   
}

function adicionaCartas(){
    array.length = quantidade;
    let card = `<div onclick="virarcarta(this)" class="card">  <img class="imgcard" src="images/front.png" alt=""> </div>`
    let container = document.querySelector(".container")

    for(let i = 0; i < array.length; i++){
        let cartas = container.innerHTML += card
       console.log(cartas)
    }
}
 
adicionaCartas()


   
