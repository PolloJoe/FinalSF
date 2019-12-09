var a= document.getElementById("nacho")
var b= document.getElementById("e")
var c= document.getElementById("mask")
var d= document.getElementById("skeleton")
var e= document.getElementById("iammusic")


function changePicture(){
	a.classList.add ("nachopic")
}

function changePictures(){
	b.classList.add ("esqueletopic")
}

function resetAll(elem){
	a.classList.remove ("nachopic")
	b.classList.remove ("esqueletopic")
}
// The function will play the music when it is clicked on 
function playIam() {
	e.play();
	console.log("joe is a meanie");
}

