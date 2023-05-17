//var 예약어로 선언된 변수는 덮어쓰기가 가능하여, 변수의 값이 의도치않게 변하는 오류를 범할 수 있다.
//var name = "Tk";

//값이 초기화된 변수의 값이 변치 않기를 원한다면 const 예약어를 사용한다.
//즉, const 예약어로 선언된 변수는, 읽기만 가능.
const name = "Tk";
//name = "super tk"; // <---- Error.

//하지만, const 로 선언된 object 타입의 변수는,
// 변수 그 자체는 값 변경을 허용하지 않지만,
// 내부의 속성은 변경 가능하다.
const person = {
  name: "Tk",
};
//person = {name : "super tk"}; // <---- Error.
//person.name = "super tk"; // <---- Ok.

//var 예약어처럼 값을 변경하기 원한다면 let 예약어를 사용하면 된다.
let age = 38;
age = "38";

const printForLetConst = () => {
  console.log(name);
  console.log(person);
  console.log(age);
};
export default printForLetConst;
