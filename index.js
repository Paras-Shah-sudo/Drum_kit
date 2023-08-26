var n=document.querySelectorAll(".drum").length;
for(var i=0; i<n; i++) {
    var w=document.querySelectorAll(".drum")[i];
    w.addEventListener("click", clk); 
}
document.addEventListener("keypress", function(event) {
    makeSound(event.key);
    anim(event.key);
    
} );

function clk()
{
    var h=this.innerHTML;
    makeSound(h);
    anim(h);
}

function makeSound(key) //sound
{
    switch(key) {
        case 'w':
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case 'a':
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case 's':
            var audio=new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case 'd':
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case 'j':
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case 'k':
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case 'l':
            var audio=new Audio("sounds/snare.mp3");
            audio.play();
            break;
        default:
            console.log(key);
    }
}

function anim(currentKey) //animation
{
    var c=document.querySelector("."+currentKey);
    c.classList.add("pressed");
    setTimeout(function() { c.classList.remove("pressed"); }, 100);
}