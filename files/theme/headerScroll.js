jQuery(function($) {
	var $window = $(window);
	var $body = $('body');
	var $header = $('#header');
	$window.on('scroll', function(e) {
		var scrollTop = $window.scrollTop();
		$header.toggleClass('minimal', scrollTop > 0);
		$body.toggleClass('minimal-header', scrollTop > 0);
	});
});