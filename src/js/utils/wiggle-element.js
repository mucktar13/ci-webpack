let wiggleElement = (element) => {
	$(element).addClass('animated rubberBand');  
	$(element).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
	  $(element).removeClass('animated rubberBand');
	});
};


export {wiggleElement};