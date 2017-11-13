$(document).ready(function(){

	let i = 0;
	
	$(".header__nav_mobile").click(function(){

		if(i == 0){
			$(".header__nav").animate({'right':'0px'},500, "swing");
			i = 1;
		}else{
			$(".header__nav").animate({'right':'-1000px'},500);
			i = 0;
		}

	});

	if($(document).width() > 992){

		let h1Array = $(".header__title h1");

	    let i = 0;

	    function go() {

	        $(h1Array[i]).addClass("h1_inside");


	    };

	    let timer = setInterval(function(){

	        go();

	        if(i < h1Array.length){
	            i++;
	        }else if(i == h1Array.length){
	        	$(".header__text").animate({opacity: 1}, 2000);
	        	i++;
	    	}else{
	            clearInterval(timer);
	        }
	        }, 800);

	    let scrollTopHow = $("#details").offset().top + $("#details").height();
	    let scrollTopAbout = $("#about").offset().top;

	    $(document).scroll(function(){

	    	//console.log($(window).scrollTop() + $(window).height());

	    	if($(window).scrollTop() + $(window).height() - 50 > scrollTopHow){
	    		$("#how-work").addClass("how-work_visible");
	    		//$("#how-work").animate({top: 0}, 1000);
	    		//$("#how-work").css({"top": "0", "opacity": "1"})
	    	}

	    	if($(window).scrollTop() + $(window).height() + 200 > scrollTopAbout){
	    		$(".about__content_wrap").animate({right: 0}, 1500);
	    	}

	    })
	}

	$('header a[href^="#"], header *[data-href^="#"], .pushy a[href^="#"], .pushy *[data-href^="#"]').on('click', function (e) {

        e.preventDefault();

        let t = 1000;
        var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
        $('html,body').stop().animate({scrollTop: $(d).offset().top}, t);
    });


});