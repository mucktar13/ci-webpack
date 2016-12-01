let notification = (element, duration) => {
	// reset
	$(element).removeClass('bounceOutRight notification-show animated bounceInRight');
	// show notification
	$(element).addClass('notification-show animated bounceInRight');

	$(element).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
	    setTimeout(function(){
	        $(element).addClass('animated bounceOutRight');
	    }, duration);
	});
};


export {notification};