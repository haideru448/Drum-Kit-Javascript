var noOfButtons=document.querySelectorAll("button").length;
for(var i=0;i<noOfButtons;i++)
{document.querySelectorAll("button")[i].addEventListener("click",function()
{
  playsounds(this.innerHTML);
  addClasss(this);
})}
document.addEventListener("keypress",function(events){playsounds(events.key)
  console.log(event);
keyPressClass(events.key)})
function playsounds(events)

{switch(events)
{case 'w':
var sound=new Audio("sounds/tom-1.mp3");
sound.play();
break;
case 'a':
var sound=new Audio("sounds/tom-2.mp3");
sound.play();
break;
case 's':
var sound=new Audio("sounds/tom-3.mp3");
sound.play();
break;
case 'd':
var sound=new Audio("sounds/tom-4.mp3");
sound.play();
break;
case 'j':
var sound=new Audio("sounds/snare.mp3");
sound.play();
break;
case 'k':
var sound=new Audio("sounds/kick-bass.mp3");
sound.play();
break;
case 'l':
var sound=new Audio("sounds/crash.mp3");
sound.play();
break;
default:
alert("Sorry this key is not associated with any drum");
break;
}}
function addClasss(event)
{event.classList.add("buttonispressed");
setTimeout(function(){ event.classList.remove("buttonispressed");}, 100);}
function keyPressClass(event)
{
  document.querySelector(event="."+event).classList.add("buttonispressed");
setTimeout(function(){ document.querySelector(event).classList.remove("buttonispressed");}, 100);
}
