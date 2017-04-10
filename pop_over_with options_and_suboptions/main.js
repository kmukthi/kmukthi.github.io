$(document).ready(function(){
	/*$('.nav span').mouseenter(function(event){
		event.preventDefault();
		event.stopPropagation();
		event.stopImmediatePropagation();
	});
	
	$('.nav span').mouseleave(function(event){
		event.preventDefault();
		event.stopPropagation();
		event.stopImmediatePropagation();
	});*/
	$('.dropdown-content p').hover(function(event){
		$('.dropdown-subcontent').css('display', 'inline-block').css('top', $('.dropdown-content').offset().top).css('left', $('.dropdown-content').width()+$('.dropdown-content').offset().left);
		var pos = $(this).attr("pos");
		$('.subcontent_options').css('display', 'none');
		$('#subcontent_'+pos).css('display', 'block');
	}, function(event){
		setTimeout(function(){
			if($('.dropdown-subcontent:hover').length<1){
				$('.dropdown-subcontent').css('display', 'none');		
			}
		},1000);
		$('.dropdown-subcontent').mouseleave(function(event){
			if($('.dropdown-content:hover').length<1){
				$('.dropdown-subcontent').css('display', 'none');
				$('.nav').css('border', 'none');
				$('.dropdown-content').css('display', 'none');
				$('.arrow-up').css('display', 'none');
			}
		});
	});
	$('.nav').mouseenter(function(event){
		console.log(this);
		var _this = this;
		$(this).css('border', '1px solid #fff');
		var leftOfDropDownContent = $('.arrow-bottom').offset().left/2;
		var topOfDropDownContent = $('.arrow-bottom').offset().top+15;//10px is the size of .arrow-bottom div(check css to find out how) and 5px is the extra border thickness added
		var leftOfUpArrow = $('.arrow-bottom').offset().left-5;
		var topOfUpArrow = $('.arrow-bottom').offset().top-5;
		$('.dropdown-content').css('display', 'inline-block').css('top', topOfDropDownContent).css('left', leftOfDropDownContent);
		$('.arrow-up').css('display', 'inline-block').css('top', topOfUpArrow).css('left', leftOfUpArrow);
		$('.dropdown-content').mouseleave(function(event){
			setTimeout(function(){
				if($('.dropdown-subcontent:hover').length<1){
					$('.nav').css('border', 'none');
					$('.dropdown-content').css('display', 'none');
					$('.dropdown-subcontent').css('display', 'none');
					$('.arrow-up').css('display', 'none');		
				}
				},1000);
		});
	}).mouseleave(function(event){
		console.log(event.target);
		if(event.target == this){
		(function(_this){
			setTimeout(function(){
			if($('.dropdown-content:hover').length<1){
				$(_this).css('border', 'none');
				$('.dropdown-content').css('display', 'none');
				$('.arrow-up').css('display', 'none');	
			}
		},1000);
			}(this));
		}
	});
});