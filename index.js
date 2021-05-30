// Detecting Button Press 
var vector = document.querySelectorAll("button");

for(var i = 0; i < vector.length; i++){
    vector[i].addEventListener("click", function (){
        var buttonInnerHTML = this.innerHTML;
            makeSound(buttonInnerHTML);
            buttonAnimation(buttonInnerHTML);
        }
    )};

//Detecting Keyboard Press
document.addEventListener("keydown", function(){
    var keyPressed = event.key;
        makeSound(keyPressed);
        buttonAnimation(keyPressed);
})

//Function to Make Drum Sounds
function makeSound(key){
    switch (key) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        
        case "a":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "s":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "d":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        
        case "j":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "k":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        default:
            console.log(key);
            break;
    }
}

function buttonAnimation(key){
    var pressedButton = document.querySelector("." + key);
        pressedButton.classList.add("pressed");

        setTimeout(function() {
            pressedButton.classList.remove("pressed");
        }, 100);

}