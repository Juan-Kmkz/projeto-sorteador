const actionButton = document.getElementById("draw")


function pressed (){
    const min = document.getElementById("number-one").value
    const max = document.getElementById("number-two").value
    const displayResult = document.getElementById("random-result")
    
    const result = Math.floor(Math.random() * (max - min + 1) + min); 

    displayResult.innerText = result
}


actionButton.addEventListener("click",pressed)