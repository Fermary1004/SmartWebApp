// window.onload = function(){
// 	alert("hallow!");
// 	multiple();
// }

function multi(num1, num2){
	var result = num1 * num2;
	var string = num1 + "x" + num2 + "=" + result;
	console.log(string);
}

function multiloop(number){
	for (var i=0;i<9;i++){
		multi(number, i+1);
	}
}

function multiple(){
	for (var i=1;i<9;i++){
		multiloop(i+1);
	}
}

var array = { name : "DengDengYi", age : 21, adress : "9 Section" };
for(var key in array){
	console.log(key + " : " + array[key]);
}
// 자바스크립트 배열의 정해진 주소값을 알려주는 for in문
// key값(배열 array의 각 키값, 오브젝트 이름)을 순서대로 끝까지 for문을 돌린다

var array1 = [1, "123", 456];
var array2 = [789, "121213", 000];

console.log(array1.concat(array2));
// concat는 두 배열을 붙혀서 새로운 배열을 리턴값으로 돌려준다(원본은 그대로 유지된다)
// 배열외에 다른데도 사용할 수 있다

// 함수와 메소드의 차이는 함수는 객체를 통하지 않고, 메소드는 객체를 통해 호출하는 것

console.log(array1.join(", "));
// join은 해당 배열을 선택된 구분자로 구분하여 전체 문자열로 반환해준다
// 리턴값이 1개의 문자열이 된다 위의 경우 "1, 123, 456"으로 리턴 값이 반환된다

var test = 1;
console.log(test);

console.log(array1.splice(1));
// 배열을 해당하는 번지'부터' 잘라내기를 하여 잘려진 부분을 반환한다(원본을 편집한다)
console.log(array1);

console.log(array2.slice(1));
// 배열을 해당하는 번지'부터' 복사를 하여 복사된 부분을 반환한다(원본을 편집하지 않는다)
console.log(array2);

console.log(array2.reverse());

var array3 = [78229, "121213", 001110, 32423, "5555", 2123];

console.log(array3.sort());
// 배열을 모두 문자열로 바꿔서 순서대로 정렬해준다

console.log("a>b : " + ('a'>'b'));
console.log("a>aa : " + ('a'>'aa'));
console.log("a>A : " + ('a'>'A'));
console.log("가>나 : " + ('가'>'나'));
// 코드 값 기준(아스키, 유니코드, 등등)