'use strict'
// Please don't delete the 'use strict' line above

// test({ a: "A", b: "B" }, { b: "B", a: "A" });

// //1. 関数 incrementNumbers を宣言してください。
// /**
//  * @param {{ [key: string]: number }} ???
//  * @returns {{ [key: string]: number }} 与えられたオブジェクトと同じ値を持つが、数値には 1 が足されたオブジェクト
//  */

// test(incrementNumbers({ a: 1, b: 2, 1: 3, d: "hello" }), {
//   a: 2,
//   b: 3,
//   1: 4,
//   d: "hello",
// });
// test(incrementNumbers({ a: 2, b: 3, 1: 4, d: "hello" }), {
//   a: 3,
//   b: 4,
//   1: 5,
//   d: "hello",
// });

function incrementNumbers(obj){
    let result = {};
    for (const key in obj){
        const value = obj[key];
        if(typeof value === "number"){
            value += 1
        }
        result[key] = value
    }
    return result
}

test(incrementNumbers({ a: 1, b: 2, 1: 3, d: "hello" }), {
    a: 2,
    b: 3,
    1: 4,
    d: "hello",
  });

test(incrementNumbers({ a: 2, b: 3, 1: 4, d: "hello" }), {
    a: 3,
    b: 4,
    1: 5,
    d: "hello",
  });