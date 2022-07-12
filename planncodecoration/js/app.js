

$(document).ready(function(){
	// console.log('hay');
	//Start Header

		//Start nav

		$(".navbuttons").click(function(){
			$(".navbuttons").toggleClass("crossxs");
			//new classမရှိသေးရင် ထည့်ပေးတယ် ရှိရင်ဖြုတ်ပေးတယ်
		});

		//End nav

		//for nav

		$(window).scroll(function(){
			// windowမှာscrollတဲ့အရေအတွက်ကိုယူချင်ရင် scrollTop()ကိုသုံးပေးရမယ်

			let getscrolltop = $(this).scrollTop();
			// console.log(getscrolltop);

			if(getscrolltop >= 200){
				$(".navbar").addClass("navmenus");
			}else{
				$(".navbar").removeClass("navmenus");
			}
		});

		//end nav

	//End Header

	//Start Properties

	$(".propertylists").click(function(){

		//for active item

		// $(this).addClass("activeitems");
		// $(this).siblings().removeClass("activeitems");

		$(this).addClass("activeitems").siblings().removeClass("activeitems");


		//for filter

		let getattvalue = $(this).attr("data-filter");
		//console.log(getattvalue);

		if(getattvalue === "all"){
			$(".filters").show("slide",500);

		}else{

			$(".filters").hide();
			// အပေါ်ကallမဟုတ်ရင် အားလုံးဖျောက်မယ် ပြီးမှဆက်လုပ်

			// conditionတစ်ခုချင်းစီ စစ်စရာမလိုဘဲ not().,filter()စစ်ရုံနဲ့ရတယ်
			$(".filters").not("."+getattvalue).hide("slide",500);
			//"."+getattvalue=>ဘာလိုလဲဆိုတော့ ဟိုဘက်က၀◌င်လာရင် classနဲ့၀◌င်လာတယ်ဆိုတော့"."လို့ပါတဘ်

			$(".filters").filter("."+getattvalue).show("slide",500);
			// filter()က value()ကိုစစ်ပေးတယ်
		}

	});

	//For image overlay (or) lightbox2
	lightbox.option({
		showImageNumberLabel:false
	});

	//End Properties

	//Start Adv Section

	$(window).scroll(function(){

		let getscrolltop = $(this).scrollTop();

		// console.log(getscrolltop);

		if(getscrolltop >= 900){
			$(".advimages").addClass("fromlefts");
			$(".advtexts").addClass("fromrights");
		}else{
			$(".advimages").removeClass("fromlefts");
			$(".advtexts").removeClass("fromrights");
		}
	});



	//E

});