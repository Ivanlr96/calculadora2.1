/* Autor: Iván Lorenzo RUiz 
Enlace de GIt hub **/


const audio0 = new Audio();
audio0.src = "assets/uah.mp3"

const audio1 = new Audio();
audio1.src = "assets/uno.mp3"

const audio2 = new Audio();
audio2.src = "assets/dos.mp3"

const audio3 = new Audio();
audio3.src = "assets/tres.mp3"

const audio4 = new Audio();
audio4.src = "assets/cuatro.mp3"

const audio5 = new Audio();
audio5.src = "assets/cinco.mp3"

const audio6 = new Audio();
audio6.src = "assets/seis.mp3"

const audio7 = new Audio();
audio7.src = "assets/siete.mp3"

const audio8 = new Audio();
audio8.src = "assets/ocho.mp3"

const audio9 = new Audio();
audio9.src = "assets/nueve.mp3"
const audion = new Audio();
audion.src = "assets/nada.mp3"
const audioel = new Audio();
audioel.src = "assets/el.mp3"
const audiod= new Audio();
audiod.src = "assets/del.mp3"


const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll(".btn");
let n1,n2;


buttons.forEach(button => {
    button.addEventListener("click", () => {
        const buttonA = button.textContent;
        if (button.id === "c") {
            screen.textContent = "0";
            return;
        }
        if (button.id === "del") {
            if (screen.textContent.length === 1) {
                screen.textContent = "0"
            } else {
                screen.textContent = screen.textContent.slice(0, -1)
            }
            return;
        }
        if (button.id === "ce") {

            return;

        }
        if (button.id === "div") {
            screen.textContent = 1 / screen.textContent;
            return;
        }
        if (button.id === "cuadrado") {
            screen.textContent = Math.pow(screen.textContent, 2);
            return;
        }
        if (button.id === "ce") {
            /*n1=screen.textContent;
            n2=screen.textContent;
            screen.textContent=Math.pow(n1,n2); */
            let base = 1; let exp = n2; 
            while (exp > 1) { 
                base *= n2;
                exp--; } 
                base *= exp;
            return;
        }
        if (button.id === "raiz") {
            screen.textContent = Math.sqrt(screen.textContent);
            return;
        }
        if (button.id === "calc") {
            screen.textContent = eval(screen.textContent);
            return;
        }


        if (screen.textContent === "0") {
            screen.textContent = buttonA;
        }
        else {
            screen.textContent += buttonA;
        
        }

    })
 


})