(function($) {
	$(document).ready(function(){

		var section;
		var last_scroll = 0;
		var full_credits = $('.full_credits_JS');
		var see_full_credits = $('.see_full_credits_JS');
		var timer;

		//PREVENT DEFAULT
		$('.pd-JS').live('click', function(e){
			e.preventDefault();
		});

		$(window).scroll(function(){
		  $('.serie_category_abstract_wrap').css('left',-$(window).scrollLeft());
		});

		$('.post_preview_JS').click(function(e){
			var anchor = $(this).find('a').attr('href');
			if(e.metaKey) {
		    	window.open(anchor);
			}
			else{
				window.location = anchor;
			}
		});

		$('.single_parent_info_JS').click(function(e){
			var anchor = $(this).find('a').attr('href');
			if(e.metaKey) {
		    	window.open(anchor);
			}
			else{
				window.location = anchor;
			}
		});

		$('.proyecto_abstract_JS').click(function(e){
			var anchor = $(this).find('a').attr('href');
			if(e.metaKey) {
		    	window.open(anchor);
			}
			else{
				window.location = anchor;
			}
		});

		$('.follow_a_JS').on("click", function(event){
			if($(this).hasClass('abierto')){
				$('.social-media_header').animate({top: '-95px'});
				$('.follow_a_JS').removeClass('abierto');
			}
			else{
				$('.social-media_header').animate({top: 0});
				$('.follow_a_JS').addClass('abierto');
			}
			event.stopPropagation();
		});

		$(document).on("click", function(){
			$('.follow_a_JS').removeClass('abierto');
		    $('.social-media_header').animate({top: '-95px'});
		});	


		see_full_credits.click(function(){
			if(!full_credits.hasClass('abierto')){
				full_credits.stop().animate({ height: '255px' }, 350);
				full_credits.css({
					'padding-top':'35px',
					'margin-top':'73px'
				});

				if( $('.category').hasClass('index') || $('.category').hasClass('showroom') )
					see_full_credits.addClass('flecha_gris_up');
				else
					see_full_credits.addClass('flecha_azul_up');

				see_full_credits.html('hide full credits');
				full_credits.addClass('abierto');
			}
			else{
				full_credits.stop().animate({ height: '0px' }, 350,function() {
				    full_credits.css({
					  'padding-top':'0px',
					  'margin-top':'0px'
					});
				});

				if( $('.category').hasClass('index') || $('.category').hasClass('showroom') )
					see_full_credits.removeClass('flecha_gris_up');
				else
					see_full_credits.removeClass('flecha_azul_up');

				see_full_credits.html('see full credits');
				full_credits.removeClass('abierto');
			}		
			
		});


		$.scrollIt({
			onPageChange: function(seccion){
				if (window.history && window.history.pushState && !(typeof seccion === 'undefined') ){
                window.history.replaceState(seccion, seccion, '#'+seccion);
            	section = seccion;
           		}
			}
		});

		$(window).scroll(function(){
			scrollFn();
		});

		function scrollFn(){
			var scroll_top = $(window).scrollTop();
			if(section){
	 			var serie_category_offset = $('#'+section).offset().top;
	 			var serie_category_height = $('#'+section).height();
	 			var serie_category_abstract_height = $('#'+section).find('.serie_category_abstract').height();
	 			var height = serie_category_offset+serie_category_height-serie_category_abstract_height-18;


		 		$('.serie_category').find('.serie_category_abstract').removeClass('fixed');
	 			if(scroll_top>last_scroll){
	 				if(scroll_top >= serie_category_offset){
		 				$('#'+section).find('.serie_category_abstract').addClass('fixed');
			 			var padding = serie_category_height-serie_category_abstract_height-18;
			 		}
		 			if(scroll_top >= height-10){
		 				$('#'+section).find('.serie_category_abstract').removeClass('fixed');
		 				$('#'+section).find('.serie_category_abstract').css('padding-top',padding);
		 			}
		 		}
		 		else{
		 			if(scroll_top <= height-10){
		 				$('#'+section).find('.serie_category_abstract').addClass('fixed');
		 				$('#'+section).find('.serie_category_abstract').css('padding-top','0px');
		 			}
		 			if(scroll_top <= serie_category_offset-10){
		 				$('#'+section).find('.serie_category_abstract').removeClass('fixed');
		 			}
		 		}
	 			last_scroll = scroll_top; 
	 		}
		}

		$('.share_object_face, .share_object_twitter').click(function (event) {
		    event.preventDefault();
		    var w = window.open($(this).attr('href'), "popupWindow", "width=600, height=400, scrollbars=yes");
		    var $w = $(w.document.body);
		});
		
	});
})(jQuery);