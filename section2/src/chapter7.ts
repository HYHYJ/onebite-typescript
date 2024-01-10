//void
//void => 공허 => 아무것도 없다.
//아무것도 없음을 의미하는 타입.

// 값을 출력
function func1(): string {
  return "hello";
}

// 값이 없음
function func2(): void {
  console.log("hello");
}

//never
//존재하지 않는 불가능한 타입

function func3(): never {
  while (true) {}
}
function func4(): never {
  throw new Error();
}
