/**
 * 타입추론
 */

let a = 10;
let b = "hello";
let c = {
    id : 1,
    name: "윈터",
    profile: {
        nickname: "winter"
    },
    url: ["https://df.com"],
}

let {id, name, profile} = c;

let [one, two, three] = [1, 'hello', true]

function func(message = "hello") {
    return "hello"
}

let d;
d = 10;
d.toFixed();

d = "hello";
d.toUpperCase();
// d.toFixed();

//10이라는 값 이외에 선언되지 않는다.(리터럴 타입)
const num = 10;
const str = "hello"

//(string || number)[]
let arr = [1, "string"];


