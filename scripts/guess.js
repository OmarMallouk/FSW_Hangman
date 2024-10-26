
var wordsList = ["Car", "Run", "Swim", "Sleeping","Cat","fork","tool"];
var guessLeft = 6;
var wrongGuess = [];
var hiddenWord = [];
var hiddenWordText = document.getElementById("answer-section");
var chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)];


const wrongGuessedImages = [
    "../assets/head.svg",
    "../assets/body.svg",
    "../assets/left-hand.svg",
    "../assets/left-leg.svg",
    "../assets/right-hand.svg",
    "../assets/right-leg.svg",
]

const wrongGuessClasses = [
    "head",
    "body",
    "left-hand",
    "left-leg",
    "right-hand",
    "right-leg",
    
];


for (var i = 0; i < chosenWord.length; i++) {
    hiddenWord.push("_");
}

hiddenWordText.textContent = hiddenWord.join(" ");

console.log("Chosen word:", chosenWord);

var guessed = document.querySelector(".letters");

guessed.addEventListener("click", function(event){
    if (event.target.classList.contains("letter")){
        const userGuess = event.target.textContent.toUpperCase();
        console.log(userGuess)
        myFunction(userGuess);
    }
});

console.log(guessed)



function myFunction(userGuess){
    console.log("Guessed letter:", userGuess);
    let lowerCaseChosenWord = chosenWord.toLowerCase();
    let lowerCaseUserGuess = userGuess.toLowerCase();
    
    if (lowerCaseChosenWord.indexOf(lowerCaseUserGuess) >= 0){
        console.log("Correct guess");
        for (var i = 0; i < chosenWord.length; i++){
            if (lowerCaseChosenWord[i] === lowerCaseUserGuess){
                hiddenWord[i] = chosenWord[i]; // Keep original casing of the word
            }
        }
        hiddenWordText.textContent = hiddenWord.join(" ");
    }else{
        console.log("Incorrect guess");
        wrongGuess.push(userGuess);
        guessLeft--;
        console.log(guessLeft)

        const newImage = document.createElement("img");
        newImage.src = wrongGuessedImages[wrongGuess.length -1];
        newImage.classList.add(wrongGuessClasses[wrongGuess.length - 1]);
        console.log("New image source path:", newImage.src);

        const hangContainer = document.getElementById("hang");
        hangContainer.appendChild(newImage);
        if (guessLeft == 0) {
            alert("you lost")
            setTimeout(() => {
                location.reload();
            }, 600); 
            
        }
    }
}