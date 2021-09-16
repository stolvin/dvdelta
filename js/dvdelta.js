$(document).ready(function(){
	$('.gallery__tabs').tabslet({
		animation: true
	});
	$(".gallery__tab a").fancybox({
	// loop: false
	});

	$('.reviews__carousel').owlCarousel({
		loop: true,
		items: 1
	});
	$('.reviews__prev').click(function() {
		$('.reviews__carousel').trigger('prev.owl.carousel');
	})
	$('.reviews__next').click(function() {
		$('.reviews__carousel').trigger('next.owl.carousel');
	})

	$('header a').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
      scrollToDiv(elWrapped,150);
      return false;
  });
  function scrollToDiv(element,navheight){
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop-navheight;
      $('body,html').animate({
          scrollTop: totalScroll
      }, 700);
  }

	$('.header__hamburger button').click(function(event) {
		$('.header__menu').slideToggle('fast');
	});
	$('.header__menu a').click(function(){
      $('.header__menu').toggle();
  });

  $(".modalbox").fancybox({
		padding: 0,
		helpers: {
        	overlay: {
            	locked: false
        	}
    	},
    	// closeBtn: false,
    	afterClose: function(){ 
    		$(".modalwin .modalwin__message").hide();
    		$(".modalwin .modalwin__preloader").hide();
    		$(".modalwin input[name='send']").show();
    	}
	});

	$(".modalwin__form").submit(function() {
		var form = $(this);
		form.children("input[name='send']").hide();
		form.children(".modalwin__preloader").show();
		$.ajax({
        	type: 'POST',
        	url: '../send_order.php',
        	data: form.serialize(),
        	success: function(data) {
						if(data == "true") {
							form.children(".modalwin__preloader").hide();
							form.next(".modalwin__message").show();
							setTimeout("$.fancybox.close()", 3000);
          	}
         	}
        });
		return false;	
	});

	$("#user_phone").mask("+7(999) 999-9999");

	// var clock = $(".countdown__clock").FlipClock({
	// 	clockFace: "DailyCounter",
	// 	language: "ru",
	// 	autoStart: false,
	// 	countdown: true,
	// 	callbacks: {
	// 		stop: function() {
	// 			$(".countdown__message").html("Акция завершена");
	// 		}
	// 	}
	// });
	// clock.setTime(5000);
	// // clock.setCountdown(true);
	// clock.start();

	$('.countdown__clock').mbComingsoon({
		expiryDate: new Date(2017, 09, 31, 23, 59), // год, месяц (0-11), день, час, минута
		interval: 1000,
		speed: 500,
		localization: {
			days: "дней",
			hours: "часов",
			minutes: "минут",
			seconds: "секунд"
		},
		callBack: function () {
			$('.countdown').hide();
		},

	});

});

var map;
DG.then(function () {
	map = DG.map('map', {
		center: [48.481714, 135.152],
		zoom: 16,
		// dragging: false,
		scrollWheelZoom: false	
	});
	var deltaIcon = DG.icon({
		iconUrl: "i/map_icon.png",
		iconSize: [32, 46],
		iconAnchor: [16, 46]
	});
	DG.marker([48.481714, 135.15435], {icon: deltaIcon}).addTo(map);
});