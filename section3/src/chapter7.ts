/**
 * 타입 좁히기
 * 조건문 들을 이용해 넓은 타입에서 좁은 타입으로
 * 타입을 상황에 따라 좁히는 방법을 이야기
 */

type Person = {
     name: string;
     age: number
}


// value => number : toFixed
//value => string : toUopperCase
//value => Date: getTime
// value => Person : name은 age 살 입니다.
function func(value: number | string | Date | null | Person){

    //좁은 타입 'number' => 타입좁히기
    // 타입가드 => 다른 타입이 못들어가게
    if(typeof value === "number"){
        console.log(value.toFixed());
    } else if (typeof value === "string"){  
        console.log(value.toUpperCase());
        //object로 비교하면 'null'타입도 들어오고 다른 객체들도 들어온다.
        // instanceof: 새로운 타입가드 사용하기(자바스크립트의 내장 class )(객체type은 사용 불가)
        // 왼쪽 value 값이 Date냐??(Null은 아님)
    } else if (value instanceof Date){
        console.log(value.getTime());
        //in 연산자
        // 앞에 프로퍼티이름 적기 value에 프로퍼티가 있냐
        // in 뒤에는 null이면 안된다. => value && 적어서 value가 있다는것을 알려줌.
        //
    }else if (value && "age" in value){
        console.log(`${value.name}은 ${value.age}살 입니다`);
        ;
    }


}
