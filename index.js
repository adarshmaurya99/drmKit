for(var i=0;i<document.querySelectorAll(".drum").length;i++){
document.querySelectorAll("button")[i].addEventListener("click",function() {//() ke bad lagte hai array subscript// funtion is annonymus func
    makeSound(this.textContent);
    buttonAnimation(this.textContent);
});
}
// adding event listner which listen to the key board strokes
document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){
    switch (key) {
        case "w":
            var Tom1=new Audio('sounds/tom-1.mp3');
            Tom1.play();
            break;
        case "a":
            var Tom2=new Audio('sounds/tom-2.mp3');
            Tom2.play();
            break;

        case "s":
            var Tom3=new Audio('sounds/tom-3.mp3');
            Tom3.play();
            break;
        case "d":
            var Tom4=new Audio('sounds/tom-4.mp3');
            Tom4.play();
            break;    

        case "j":
            var snare=new Audio('sounds/snare.mp3');
            snare.play();
            break;
    
        case "k":
            var crash=new Audio('sounds/crash.mp3');
            crash.play();
            break;       
        
        case "l":
            var kickbass=new Audio('sounds/kick-bass.mp3');
            kickbass.play();
            break;

        default:
            console.log(this.textContent);
            break;
    }
}

function buttonAnimation(currentKey){
    var activeButton=document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}
// console.log(this);  
// this.style.color="white";
//alert("i m clicked!");
//var audio=new Audio('sounds/tom-1.mp3');
//audio.play();