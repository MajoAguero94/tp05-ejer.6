let minutos = prompt("Ingrese los minutos");
let segundos = prompt("ingrese los segundos");
 
 function temporizador() {
    
     tiempo = setInterval(function () {
       document.getElementById("reloj").innerHTML =
          minutos + " : " + segundos;
       segundos--;
       if (segundos == 00) {
          minutos--;
          segundos = 59;
          if (minutos = 0 & segundos == 0) {
            minutos = 0;
            segundos = 0
           alert("El tiempo se ha terminado");
          }
       }
    }, 1000);
 };

 function parar (){
    clearInterval(tiempo);
    document.querySelector(".inicio").addEventListener("click",temporizador);
 }

 function resetear (){
    clearInterval(tiempo);
    document.getElementById("reloj").innerHTML = `00:00`

    minutos = prompt("Ingrese los minutos")
    segundos = prompt("Ingrese los segundos")

    document.querySelector(".inicio").addEventListener("click",temporizador);
 }
