// function($,doubletaptogo){
	function calculatingSubPosition(){
		$(".mz-sitenav-sub-container").css({"left":0,"right":"auto","currentTop":0}).addClass("calculating-position").removeClass("calculated-position").each(function(){
			var currentElement = $(this),
			leftPosition = 0,
			rightPosition = 0,
			currentTop = currentElement.parents(".mz-sitenav-item").height(),
			currentDropWidth = 0;

			currentDropWidth = (colWidth * currentElement.find(".sub-level-col").length) + 35 + currentElement.find(".sub-level-image").outerwidth()||0;
			if(currentDropWidth < $(".container:eq(0)").outerWidth()){
				leftPosition = currentElement.parents(".mz-sitenav-item--inner").offset().left - 20 - leftReference;
				rightPosition = "auto";
				rightPosition = 0;
				currentTop = currentElement.parents(".mz-sitenav-item").offset().top - $(".mz-sitenav-list").offset().top + currentElement.parents(".mz-sitenav-item").height();
				if(leftPosition + currentDropWidth + leftReference >= rightReference){
					leftPosition = "auto";
					rightPosition = 0;
					currentTop = currentElement.parents(".mz-sitenav-item").offset().top - $(".mz-sitenav-list").offset().top + currentElement.parents(".mz-sitenav-item").height();
				} 
			}
			currentElemnt.css({ "left": leftPosition, "right": rightPosition,"top":currentTop });
		}).removeClass("calculating-position").addClass("calculated-position");	
	}
	$(document).ready(function() {
        try {
            $('.sub-nav-section li:has(.sub-dropdown-menu)').doubletaptogo();
        } catch (e0) {
            //console.log('Error in loading: ' + e0);
        }
    });
// }