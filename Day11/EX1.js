/**
 * 1. 함수 선언 -> 순서가 중요하지 않다
 * 
 * function 함수명([인자, ...., 인자]){
 * 		함수 본문
 * 		[return 반환값]
 * }
 * 
 * 2. 함수 표현식 -> 순서가 중요하다. 반드시 순서를 맞춰주지 않으면 동작하지 않음
 * 
 * var 함수명 = function([인자, ...., 인자]){
 * 		함수 본문
 * 		[return 반환값]
 * };
 * 
 * 
 * 3. 콜백함수 : 콜백이란 객체의 상태변화(이벤트)가 발생하면 자신을 호출하도록 할려주는 것, 비동기 처리를 하기 위해 사용
 * 
 * 예시)
 * 폰으로 알람을 등록하고 게임하는 경우를 자바스크립트 함수로
 * 
 * 알람(시간, 벨());
 * 게임();
 */

var count = 1;
function sayHello(){
	console.log("Hello World : " + count);
	count++;
}

setTimeout(sayHello, 5000);
// setTimeout이라는 콜백함수가 5000밀리초 뒤에, sayHello라는 함수를 호출하는 예시
/**
 * setTimeout 콜백함수는 지정된 시간이 지나면 함수를 호출하는 함수
 * 그러므로 아래 콘솔로그가 먼저 찍힌다
 * 만약 일반적인 동기화 함수라면 5초를 기다려 sayHello를 먼저 호출하기 때문에, 위의 콘솔로그가 먼저 찍힌다
 */
console.log("Hello callback function");

/**
 * eval() : 매개변수로 전달된 문자열을 자바스크립트 코드로 인식하고 실행하는 함수
 * parseInt(), parseFloat() : 변환이 가능한 부분까지만 숫자로 변환
 * inFinite(), inNaN() : 유한수인지, 숫자인지 판별하는 함수
 * Number() : 문자열 형태의 숫자를 숫자로 변환해주는 함수. parseInt()와 다른점은 중간에 변환이 불가능하면 전부 변환하지 않는다
 * String() : 숫자를 문자열로 변환해주는 함수
 * encodeURI
 */
var num = 1/0;
console.log(num);
console.log("num는 숫자? : " + !isNaN(num));
console.log("num는 무한대? : " + !isFinite(num));

var num1 = 1;
console.log(num1);
console.log("num1는 숫자? : " + !isNaN(num1));
console.log("num1는 무한대? : " + !isFinite(num1));

var str = "123";
console.log(str);
console.log("str는 숫자? : " + !isNaN(str));
console.log("str는 무한대? : " + !isFinite(str));
// 자바스크립트가 알아서 숫자로 변환해서 판단하므로 숫자로 나온다

var str1 = "123a";
console.log(str1);
console.log("str1는 숫자? : " + !isNaN(str1));
console.log("str1는 무한대? : " + !isFinite(str1));
// str1가 무한대로 나오는 이유는 기본값이 true이고, 비교한 것이 문자열이므로 판단하지 않았기 떄문이다

console.log("객체 예제");
var obj1 = {name : '홍길동'};
obj1.add = '청주시';
obj1['age'] = 21;
console.log(obj1);

var obj2 = new Object();
obj2.name = '임꺽정';
obj2['add'] = '천안시';
obj2.age = 30;
console.log(obj2);