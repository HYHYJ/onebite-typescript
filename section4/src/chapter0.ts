// 함수를 설명하는 가장 좋은 방법
//어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지 이야기

function func(a: number, b: number): number {
  return a + b;
}

//return문을 추론해서 추론 타입이 들어간다.

/**
 * 화살표 함수의 타입을 정의하는 방법
 */

// 자동으로 반환값 타입 추론
const add = (a: number, b: number) => a + b;

/**
 * 함수의 매겨변수
 */

//기본값을 기준으로 타입 추론
function introduce(name: "이정환", tall?: number) {
  console.log(`name: ${name}`);
  console.log(`tall: ${tall}`);

  introduce("이정환", 175);
}

function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((it) => (sum += it));
  return sum;
}

getSum(1, 2, 3); //6
getSum(1, 2, 3, 4, 5); //15
