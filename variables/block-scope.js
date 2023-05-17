/*
 * block scope 는 {} 에서 유효하다.
 * {} 안에 선언된 함수 혹은 변수는 외부에서 접근할 수 없다.
 * 하지만 var 로 선언된 변수는 block scope 를 가지지 않는다.(var 는 function scope 이다.) 이로인해 의도치않은 오류가 발생할 수 있으므로  var 변수를 사용하는 것을 지양해야한다.
 * (함수 안에 선언된 var 는 let 과 마찬가지로 선언된 함수안에서만 유효하기때문에 외부에서 접근 불가)*/

if (true) {
  var name = "tk"; // block scope 를 가지지 않는다.
  let age = 38; // <--- if 문 안에서만 유효 (block scope)
}

//function scope
const foo = () => {
  var gender = "male"; // <--- 해당 함수 안에서만 유효 (function scope)
};
const printForBlockScope = () => {
  console.log(name); // <--- "tk"
  console.log(age); // <--- Error.
  console.log(gender); // <--- Error.
};

export default printForBlockScope;
