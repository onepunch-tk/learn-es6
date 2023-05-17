/*
 * let 과 var 차이
 * var 로 선언된 변수는 hoisting(자바스크립트 코드가 실행되기전, 필요한 변수값들을 최상단으로 올려서 선언해준다.)이 일어난다.
 * let 은 이런 문제를 막아주어 개발자의 실수를 막아준다 이것을 temporal dead zone 이라고 부른다..
 */

const printForDeadZone = () => {
  console.log(name); // <--- 예상 값. "undefined"
  console.log(age); // <--- Error.
  var name = "tk"; // <--- 상단 코드에서 해당 변수를 호출하면서 hoisting 이 발생하여 {}안의 최상단에 var name; 형태로 선언된다.
  let age = 38; // <--- let 변수는 hoisting 이 발생하지 않는다.
};

export default printForDeadZone;
