$(document).ready(function(){

	let i = 0;

	let mobileHeight = $("#header").height();

	$(".nav_mobile-wrap").height(mobileHeight);

	$(".nav-btn").click(function(){

		if(i == 0){
			$(".nav-btn").addClass("nav-btn-active");
			$(".nav_mobile-wrap").addClass("nav_mobile-active");
			i = 1;
		}else{
			$(".nav-btn").removeClass("nav-btn-active");
			$(".nav_mobile-wrap").removeClass("nav_mobile-active");
			i = 0;
		}

	});

	$(window).resize(function(){

		let i = 0;

		let mobileHeight = $("#header").height();

		$(".nav_mobile-wrap").height(mobileHeight);

		$(".nav-btn").click(function(){

			if(i == 0){
				$(".nav-btn").addClass("nav-btn-active");
				$(".nav_mobile-wrap").addClass("nav_mobile-active");
				i = 1;
			}else{
				$(".nav-btn").removeClass("nav-btn-active");
				$(".nav_mobile-wrap").removeClass("nav_mobile-active");
				i = 0;
			}

		});

	});

	$("#header").find(".invisible").removeClass("invisible").addClass("visible");

	(function abc(){

			let j = 0;

			let scrollBP = [];

			let scrollBPBlock = [];

			$("section").each(function(){

				scrollBP[j] = $(this).offset().top;

				scrollBPBlock[j] = $(this);

				j++;

			});

			j = 1;

			//console.log($(scrollBPBlock[j]).find(".invisible"));

	    $(document).scroll(function(){

				if($(window).scrollTop() + $(window).height() > scrollBP[j]){
					let find = $(scrollBPBlock[j]).find(".invisible").removeClass("invisible").addClass("visible");
					j++;

				};

				if($(window).scrollTop() + $(window).height() > $("#contact").offset().top + 200){

					let topNewCoor = $(window).scrollTop() + $(window).height();

					$(".callback").hide(500)

				}else{
					$(".callback").show(500);
				}

	    });

		})();

	$(".callback").click(function(){

		$(".modal").addClass("modal_active");

	});

	$(".modal-close").click(function(){

		$(".modal").removeClass("modal_active");

	});

	$('header a[href^="#"], header *[data-href^="#"], .pushy a[href^="#"], .pushy *[data-href^="#"]').on('click', function (e) {

        e.preventDefault();

        let t = 1000;
        var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
        $('html,body').stop().animate({scrollTop: $(d).offset().top}, t);
    });

		$("#form").submit(function() { //устанавливаем событие отправки для формы с id=form
            var form_data = $(this).serialize(); //собераем все данные из формы
            $.ajax({
            type: "POST", //Метод отправки
            url: "mail.php", //путь до php фаила отправителя
            data: form_data,
            success: function() {
                   //код в этом блоке выполняется при успешной отправке сообщения
                   alert("Ваше сообщение отпрвлено!");
            }
    });

		});

});
