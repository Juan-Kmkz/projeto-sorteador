const actionButton = document.getElementById("draw")

function pressed() {
    const min = Math.ceil(document.getElementById("number-one").value)
    const max = Math.floor(document.getElementById("number-two").value)
    const displayResult = document.getElementById("random-result")

    if (min >= max) {
        alert("O primeiro número deve ser MENOR que o segundo!")
    }
    else {
        const result = Math.floor(Math.random() * (max - min + 1) + min);
        displayResult.innerText = result
    }
}
actionButton.addEventListener("click", pressed)

