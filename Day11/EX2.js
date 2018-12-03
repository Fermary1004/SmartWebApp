var id = document.getElementById('id');
console.log(id);
console.log(id.value);
console.log(id.classList);
// 여러개 값이 있는 경우 List를 붙혀서 받아준다

var input = document.getElementsByTagName('input');
/**
 * getElementsByTagName은 결과가 무조건 배열에 저장된다
 * 검색 결과가 0개 혹은 1개여도 무조건 배열에 저장되므로 해당 객체에 접근하려면 배열 형태로 접근해야한다
 */
console.log(input);
console.log(input.value);
// 이 경우 배열 형태로 지정하지 않았으므로 undefined된 값이 나온다
console.log('id = ' + input[0].value);
console.log('pw = ' + input[1].value);
console.log('input 태그의 갯수 : ' + input.length);

for(var i=0;i<input.length;i++){
	input[i].value = i;
}
console.log('pw = ' + input[1].value);

/**
 * 클래스 이름이 input인 첫번째 객체를 가져옴
 * css를 기준으로 하기 때문에 클래스의 이름 앞에 .이 붙는다(css처럼)
 * document.getElementsByClassName('input')[0];과 같은 결과가 된다
 */
var qs = document.querySelector('.input');
console.log("document.querySelector('.input'); 결과");
console.log(qs);
// css처럼 조건을 표현해줄 수 있다. 태그, 클래스등을 섞어도 무방
qs = document.querySelector('.input.password');
console.log("document.querySelector('.input.password'); 결과");
console.log(qs);

var test = document.querySelector('.testdiv>input');
console.log(test);