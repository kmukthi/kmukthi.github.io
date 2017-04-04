$(document).ready(function(){
	$("#thumbnail").hover(function(){
		$("#hoverpad").css("display", "block");
		$("#detailed-image").css("display", "inline-block");
	},function(){
		$("#hoverpad").css("display", "none");
		$("#detailed-image").css("display", "none");
	})

	$("#thumbnail").mousemove(function(event){
		var xMovement = detailedImageWidth/thumbnailWidth;
		var yMovement = detailedImageHeight/thumbnailHeight;
		$("#detailed-image img").css("top", -$("#hoverpad").position().top*yMovement).css("left", -$("#hoverpad").position().left*xMovement);
		$("#hoverpad").position({
			my: "center center",	
			at: "center",
			of: event,
			collision: "fit",
			within: $(this)
		});
	});
	 
	$("#targetElement").mousemove(function( event ) {
	  $( "#position4" ).position({
	    my: "center center",
	    of: event,
	    collision: "fit",
	    within: $(this)
	  });
	});
	var hoverpadHeight = parseInt($("#hoverpad").css("height").slice(0,-2));
	var hoverpadlWidth = parseInt($("#hoverpad").css("width").slice(0,-2));
	var thumbnailHeight = parseInt($("#thumbnail").css("height").slice(0,-2));
	var thumbnailWidth = parseInt($("#thumbnail").css("width").slice(0,-2));
	var scaleX = hoverpadlWidth/thumbnailWidth;
	var scaleY = hoverpadHeight/thumbnailHeight;
	/*var detailedImageWidth = document.getElementById("detailed-image").getElementsByTagName("img")[0].width;
	var detailedImageHeight = document.getElementById("detailed-image").getElementsByTagName("img")[0].height;*/
	var detailedImageWidth = 1013;
	var detailedImageHeight = 1500;
	var zoomBlockWidth = scaleX*detailedImageWidth;
	var zoomBlockHeight = scaleY*detailedImageHeight;
	$("#detailed-image").css("height", zoomBlockHeight).css("width", zoomBlockWidth);
});