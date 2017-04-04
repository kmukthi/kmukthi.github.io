$(document).ready(function(){
	var howManyRating = [100,10];
	var toolTip = ["100% of reviews have 5 stars", "10% of reviews have 4 stars"];
	var options = {
			trigger: 'manual',
			placement: 'bottom',
			content: ['<span><a href="#" title="'+toolTip[0]+'"> 5 stars </a></span><div class="five-holder">',
					  	'<div></div>',
					  '</div><span> '+howManyRating[0]+' </span>',
					  '<span><a href="#" title="'+toolTip[1]+'"> 4 stars </a></span><div class="four-holder">',
					  '<div></div>',
					  '</div><span> '+howManyRating[1]+' </span>'].join(''),
			title: '5.0 out of 5 stars',
			html: true

		};
	$('.graph-holder').popover(options);

	$('.graph-holder').hover(function(){
			$(this).popover('show');
		},function(){
			setTimeout(function(){
				if($('.popover:hover').length == 0)
					$('.graph-holder').popover('hide');
			},500);		
			$('.popover').on('mouseleave', function(){
				$('.graph-holder').popover('hide');
			});
		});
	
	$('.graph-holder').on('shown.bs.popover', function () {
	  $('.five-holder div').css('height', '20').css('width', '100%');
	  $('.four-holder div').css('height', '20').css('width', '10%');
	});
});