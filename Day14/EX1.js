$(document).ready(function(){
	// 복습 1
	$('#btn').click(function(){
		alert(getVal('#input'));
	});
	$('#input').change(function(){
		console.log(getVal(this));
	});

	function getVal(textObj){
		return $(textObj).val();
	}

	// 복습 2
	$('#ibtn1').click(function(){
		if ($('#ih3').attr('style') == "display: none;"){
			$('#ih3').css('display', 'block');
		} else {
			$('#ih3').css('display', 'none');
		}

		console.log($('#ih3').attr('style'));
		console.log($('#ih3').css('display'));
		// css.display를 받아와서 사용할 수도 있다. 이 경우 ;가 안붙는다
	});

	$('#ibtn2').click(function(){
		displayNone('#ih3');
	});

	$('#ibtn3').click(function(){
		// $('#ih3').hide();
		$('#ih3').toggle();
	});

	function displayNone(Obj){
		// var className = $(Obj).attr('class');

		// if ((className == undefined) || (className.indexOf('displaynone') < 0)){
		// 	// indexOf는 문자열에 매개변수 문자열이 있는지 없는지 알려주는 함수로
		// 	// 있으면 매개변수 문자열의 첫글자가 있는 위치를, 없으면 -1을 리턴한다
		// 	$(Obj).addClass('displaynone');
		// } else {
		//	$(Obj).removeClass('displaynone');
		// }

		// $(Obj).addClass('displaynone');
		$(Obj).toggleClass('displaynone');
	}
});