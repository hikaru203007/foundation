var getmodal = document.getElementById('signupmodal');
var getbtnsignup = document.getElementById('btn-singup');

var getbtnclose= document.querySelector(".btn-close");
var getbtnfullscreen = document.getElementById("btn-fullscreen");
var getbtnclosescreen = document.getElementById("btn-closescreen");


// console.log('hi');

getbtnsignup.addEventListener('click',function(){
	// getmodal.style.display = "block";
	// console.log('hi');
});

getbtnclose.addEventListener('click',function(){
	// getmodal.style.display = "none";
});

window.onclick = function(e){
	// console.log(e.target);

	if(e.target === getmodal){
		getmodal.style.display = "none";
	}
}

var getde = document.documentElement;

getbtnfullscreen.addEventListener('click',function(){

	if(getde.requestFullscreen){
		getde.requestFullscreen();
	}else if(getde.msRequestFullscreen){
		getde.msRequestFullscreen();
	}else if(getde.webkitRequestFullscreen){
		getde.webkitRequestFullscreen();
	}

	getbtnfullscreen.style.display = "inline-block";
});


getbtnclosescreen.addEventListener('click',function(){

	if(document.exitFullscreen){
		document.exitFullscreen();
	}else if(document.msExitFullscreen){
		document.msExitFullscreen();
	}else if(document.webkitExitFullscreen){
		document.webkitExitFullscreen();
	}

	getbtnclosescreen.style.display = "none";
});

