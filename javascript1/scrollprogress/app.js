var getprogressbar = document.getElementById("progress-bar");


// scrollဆွဲတဲ့ခါတိုင်း function invoke လုပ်မယ်

window.onscroll = function(){
	scrollpoint();
};


function scrollpoint(){
	console.log("I'm working");


//scrolltop
//project height
//current height

//project height - current height

//scrolltop *100 /(project height - current height)


var getscrolltop =document.documentElement.scrollTop;
console.log("getscrolltop =" + getscrolltop);
var getscrollheight =document.documentElement.scrollHeight;

var getclientheight = document.documentElement.clientHeight;
// console.log("getclientheight =" + getclientheight);

var calcheight = getscrollheight - getclientheight;

var getfinal = Math.round((getscrolltop * 100) / calcheight);

//another ways
// var getfinal= Math.round((getscrolltop/calcheight) * 100);

getprogressbar.style.width = `${getfinal}%`;

};


function printme(){
	window.print();
}

