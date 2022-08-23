var getacctitles = document.getElementsByClassName("acctitle");
// console.log(getacctitles);//HTML Collection=>forloopပတ်လို့မရ
var getacccontents = document.querySelectorAll(".acccontent");
// console.log(getacccontents);//NodeList

for(var x= 0; x < getacctitles.length;x++){

	getacctitles[x].addEventListener('click',function(e){
		// console.log(e.target);
		// console.log(this);


		this.classList.toggle("active");
		var getcontent = this.nextElementSibling;//နောက်ထပ် idတွေကို ယူချင်လို့ အလွယ်ယူဆုံးနည်းလမ်း
		// console.log(getcontent);

		if(getcontent.style.height){
			getcontent.style.height=null; //beware can;t set 0
		}else{
			getcontent.style.height=getcontent.scrollHeight + "px";
		}

	});

	// ဒါလေးစစ်တော့ activeဖြစ်နေတဲ့ ကောင်က steelblueလဲဖြစ်မယ် တစ်ခါတည်းဖြည့်နေမယ်
	if(getacctitles[x].classList.contains("active")){
		getacccontents[x].style.height = getacccontents[x].scrollHeight + "px";
	};

	// getacccontents[0].style.height= getacccontents.scrollHeight + "px";//for only one
}