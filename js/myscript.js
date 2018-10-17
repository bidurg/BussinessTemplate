$(document).ready(function(){
	/**navbar**/
	$(window).scroll(function(){
		var scrollbar = $(window).scrollTop();
		if(scrollbar > 50){
			$('.navbar').addClass('navbar-shrink');
		}
		else{
			$('.navbar').removeClass('navbar-shrink');
		}
	});
	/*bgheight**/
	var sliderHeight = $(window).height();
	$('.background').css('height',sliderHeight);
	$(window).resize(function(){'use strict',
		$('.background').css('height',sliderHeight);
	});

	/**counter**/
	$('.timer').each(function(){
		$(this).prop('Counter',0).animate({Counter:$(this).text()},
			{
			duration:4000,
			easing:'swing',
			step:function (now){
				$(this).text(Math.ceil(now));
			}
		});	
			
	});

	/**scroll to top*/
	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if(scroll > 50){
			$('.to-top').css('display','block');
		}
		else{
			$('.to-top').css('display','none');
		}
	});
	$('.to-top').click(function(){
		$('body,html').animate({scrollTop : 0},1000);
		return false;
	});

	/**smooth scroll**/
	$('.navbar-collapse ul li a').click(function() {  
		$('html, body').animate({scrollTop: $(this.hash).offset().top - 40}, 1000);
		return false;
	});
});