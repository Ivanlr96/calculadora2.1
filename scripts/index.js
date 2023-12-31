

const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll(".btn");



buttons.forEach(button => {
    button.addEventListener("click", () => {
        const buttonA = button.textContent;
        if (button.id === "c") {
            screen.textContent = "0";
            return;
        }
        if (button.id==="del") {
            if (screen.textContent.length===1) {
                screen.textContent="0"
            } else {
            screen.textContent=screen.textContent.slice(0,-1)
            }
            return; 
        }
        if (button.id==="square") {
           screen.textContent=math.pow(screen.textContent,2)
            return;
        }
        if (button.id==="calc") {
            screen.textContent=eval(screen.textContent);
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
