var newElement = document.createElement("div");

var guessesDiv = document.querySelector("#guesses")

guessesDiv.appendChild(newElement);

for (var i = 0; i < 6; i += 1) {
    var guessDiv = document.createElement("div")
    guessDiv.classList.add("guess")
    guessesDiv.appendChild("guessDiv")
}

for (var i = 0; i < 5; i += 1) {
    var letterDiv = document.createElement("div")
    letterDiv.classList.add("letter")
    guessDiv.appendChild("guessesDiv")
}


