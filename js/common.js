$(document).ready(function(){
	$('#lang ul').hide();
	$(function(){
		$('#lang ul').click(function(){
			var text = $('[name="lng"]:checked').val();
			$('#langnow span').html(text);
			$(this).hide();
		});
	});
	$(function(){
		$('#langnow').click(function(){
			$('#lang ul').show();
		});
	});
	$(function() {
		function img_rect() {
			var wt = $(".cat_search_box li").css("width");
			$(".cat_search_box li").css('height', wt);
		};
		$(window).resize(function() {
			img_rect();
		});
		img_rect();
	});

	//高さ調節
	$(function() {
		$('.area_search_box li div').matchHeight();
		$('.entry_store_box').matchHeight();
	});

	$(function() {
		$(window).on("scroll", function() {
			if ($(this).scrollTop() > 100) {
				$(".foot_pagetop_btn").fadeIn("fast");
			} else {
				$(".foot_pagetop_btn").fadeOut("fast");
			}

			scrollHeight = $(document).height();
			scrollPosition = $(window).height() + $(window).scrollTop();
			footHeight = $("footer").innerHeight();

			if ( scrollHeight - scrollPosition  <= footHeight ) {
				$(".foot_pagetop_btn").css({
					"position":"absolute",
				});
			} else {
				$(".foot_pagetop_btn").css({
					"position":"fixed",
				});
			}
		});
	});

	$('a[href^="#"]').click(function() {
		var speed = 400;
		var href= $(this).attr("href");
		var $target = $(href == "#" || href == "" ? 'html' : href);
		var position = $target.offset().top;
		$('body,html').animate({scrollTop:position}, speed, 'swing');
		return false;
	});

	//ヘッダースクロールクラス追加
	$(window).scroll(function() {
		var scrrolltop = $(this).scrollTop();
		var ww = $(window).width();
		var topob = $("header");
		if(scrrolltop > 1 && ww > 767){
			topob.addClass("scrolls");
		}else if(scrrolltop > 1 && ww < 767){
			topob.addClass("scrolls");
		}else{
			topob.removeClass("scrolls");
		}
	});


	$('.menu_global').modaal();


});
