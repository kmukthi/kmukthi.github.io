//Without using ui position
	/*$("#thumbnail").mousemove(function(event){
		var cursorX = event.offsetX;
		var cursorY = event.offsetY;
		var width_hoverpad = parseInt($("#hoverpad").css("width"));
		var height_hoverpad = parseInt($("#hoverpad").css("height"));
		var hoverpadLeft = cursorX - width_hoverpad/2;
		var hoverpadTop = cursorY - height_hoverpad/2;
		if(hoverpadLeft+width_hoverpad <= thumbnailWidth){
			if(hoverpadLeft<0)
				hoverpadLeft = 0;
		}else{
			hoverpadLeft = thumbnailWidth - width_hoverpad;
		}
		if(hoverpadTop+height_hoverpad <= thumbnailHeight){
			if(hoverpadTop<0)
				hoverpadTop = 0;	
		}else{
			hoverpadTop = thumbnailHeight - height_hoverpad;
		}
		
		$("#hoverpad").css("top", hoverpadTop).css("left", hoverpadLeft);
		
	});*/