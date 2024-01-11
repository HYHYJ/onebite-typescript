/**
 * 기본 타입간의 호환성
 */

let num1: number = 10;
let num2: 10 = 10;

num1 = num2;

/**
 * 객체 타입간의 호환성
 * -> 어떤 객체타입을 다른 객체 타입으로 취급해도 괜찮은가?
 */

//* 슈퍼타입 : 조건이 더 적은타입
type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  bread: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  bread: "진도",
};

animal = dog;

// dog = animal;

// type Book = {
//   name: string;
//   price: number;
// };

type programmingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: programmingBook = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  skill: "reactjs",
};

book = programmingBook;
// programmingBook = book

/**
 * 초과 프로퍼티 검사 : 정의된 것만 쓸 수 있게.
 */

type Book = {
  name: string;
  price: number;
};

let book2: Book = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  // skill: "reactjs",
};

//* 변수 타입(= 슈퍼) 할당하는 값(=서브)를 변수에 할당하기는 가능
let book3: Book = programmingBook;

function func(book: Book) {}

//* 이것도 불가능
func({
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  // skill: "reactjs",
});
