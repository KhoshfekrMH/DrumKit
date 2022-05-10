function handleClick(){
    alert("Hello");
}

let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(let i = 0; i < numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click" , function (){
      let buttonInnerHtml = this.innerHTML;
      makeSound(buttonInnerHtml);
      clickButtonAnimation(buttonInnerHtml);
    });
}

document.addEventListener("keydown" , function(event){
    makeSound(event.key);
    clickButtonAnimation(event.key);
});

function makeSound(key){

    switch (key) {

        case "l" :
            let kick = new Audio("sounds/kick-bass.mp3");
            kick.play().then(r => 0);
            break;

        case "k" :
            let crash = new Audio("sounds/crash.mp3");
            crash.play().then(r => 0);
            break;

        case "j" :
            let snare = new Audio("sounds/snare.mp3");
            snare.play().then(r => 0);
            break;

        case "d" :
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play().then(r => 0);
            break;

        case "s" :
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play().then(r => 0);
            break;


        case "a" :
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play().then(r => 0);
            break;

        case "w":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play().then(r => 0);
            break;

        default: console.log();

    }

}

function clickButtonAnimation(currentKey){
    let buttonClicked = document.querySelector("." + currentKey);

    buttonClicked.classList.add("pressed");

    setTimeout(function(){
        buttonClicked.classList.remove("pressed")
    } , 100);
}

