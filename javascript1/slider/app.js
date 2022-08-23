var slides = document.getElementsByClassName("carousel-item");
// console.log(slides); //HTML collection 
var dots = document.querySelectorAll(".dot");
// console.log(dots); //NodeList

var currslide =1; //manual give

//previous btn
document.getElementById("prev").addEventListener('click',function(){
	carousel(currslide -= 1); //fn recall
});

//next btn
document.getElementById("next").addEventListener('click',function(){
	carousel(currslide += 1); //fn recall
});

// for dots
for (var q=0; q < dots.length; q++){
	// console.log(q);

	dots[q].addEventListener('click',function(){
		// console.log(this.getAttribute("data-bs-slide-to"));

		currslide = this.getAttribute("data-bs-slide-to"); //to add currslide 

		carousel(currslide); //fn recall
	});
}


carousel(currslide); //main function recall


function carousel(slidenum){

	var x,y;

	//hide all slides
	for(x=0; x < slides.length; x++){
		slides[x].style.display = "none"; //all slides hide
	}

	for(y=0; y < dots.length; y++){
		dots[y].classList.remove('active');
		// dots[y].className='dot';
		// dots[y].className = dots[y].className.replace('active','');
	}

	//res for currslide 1 to 3 & 3 to 1 (4 to 1) (0 to 4)
		//slides no. >  3
	if(slidenum > slides.length){
		currslide = 1;	//1
	}else if(slidenum < 1){ //slides no. < 1
		currslide = slides.length; //3
	}

	// console.log(currslide);

	slides[currslide-1].style.display = 'block'; //each slides show

	// dots[currslide-1].className = "dot active"; // for dots active 
	// dots[currslide-1].className += " active";  
	dots[currslide -1].classList.add('active');
}

// slides  		0 		1 		2
//currslides 1-1=0	2-1=1	3-1=2


// 15DT