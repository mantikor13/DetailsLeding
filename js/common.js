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

				}

	    });

		})();

	$('header a[href^="#"], header *[data-href^="#"], .pushy a[href^="#"], .pushy *[data-href^="#"]').on('click', function (e) {

        e.preventDefault();

        let t = 1000;
        var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
        $('html,body').stop().animate({scrollTop: $(d).offset().top}, t);
    });

    $('#submit').click(function(){
                // собираем данные с формы
                var makr    = $('input[name="mark"]').val();
                var model   = $('input[name="model"]').val();
                var amount = $('input[name="amount"]').val();
                var year    = $('input[name="year"]').val();
                var detailsList    = $('textarea[name="detailsList"]').val();
                var VIN    = $('input[name="VIN"]').val();
                var name    = $('input[name="name"]').val();
                var number    = $('input[name="number"]').val();
                // отправляем данные
                $.ajax({
                    url: "mail.php", // куда отправляем
                    type: "post", // метод передачи
                    dataType: "json", // тип передачи данных
                    data: { // что отправляем
                        "user_name":    user_name,
                        "user_email":   user_email,
                        "text_comment": text_comment
                    },
                    // после получения ответа сервера
                    success: function(data){
                        $('.messages').html(data.result); // выводим ответ сервера
                    }
                });
            });


});
