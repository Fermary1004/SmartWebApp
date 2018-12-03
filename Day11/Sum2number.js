function sumquery(){
	var firstnumber = document.querySelector('#firstnumber');
	var secondnumber = document.querySelector('#secondnumber');
	// var secondnumber = document.querySelector('input#secondnumber');
	// var secondnumber = document.getElementById('secondnumber'); <- 동일 효과
	var sumresult = parseInt(firstnumber.value) + parseInt(secondnumber.value);
	alert("querySelector로 두 수를 불러서 더한 결과는 <" + sumresult + ">입니다");
}

function sumelement(){
	var input = document.getElementsByTagName('input');
	// var input = document.querySelectorAll('input'); <- 동일 효과
	var sumresult = 0;
	for (var i=0;i<input.length;i++){
		sumresult += parseInt(input[i].value);
	}
	alert("getElementsByTagName으로 두 수를 불러서 더한 결과는 <" + sumresult + ">입니다");
}