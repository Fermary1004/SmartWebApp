$(document).ready(function(){
	$('.autocomplete').click(function(){
		$('.autocompletetoggle').toggle();
		if ($('.autocompleteicon').css('background-position') == '-138px -60px'){
			$('.autocompleteicon').css('background-position', '-87px -60px');
		} else $('.autocompleteicon').css('background-position', '-138px -60px');
	});
});

