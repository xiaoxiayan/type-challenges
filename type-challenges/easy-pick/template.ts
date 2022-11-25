
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

type oob = {
  age: Number;
  name: String;
  sex: String;
}



type pickArr = MyPick<oob, 'age' | 'name'>

let c: pickArr = {
  age: 18,
  name: 'xxp'
}


type Person1 = {
  name: string;
  age: number;
}

let man: Person1 = {
  name: "Semlinker",
  age: 30
}

type Human = keyof Person1;


// js --> ts
// js

function myPick(todo, keys) {
  let obj

  keys.forEach(key => {
    if (key in todo) {
      obj[key] = todo[key]
    }
  });

  return obj
}

// 1. 返回对象
// 2. 遍历对象  mapped
// https://www.typescriptlang.org/docs/handbook/2/mapped-types.html
// 3. todo[key] 取值 indexed
// https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html#handbook-content
// 4. 看看 key 在不在 todo 里面
//   1. keyof  相当于 object.keys
//   2. extends  约束 ，这个类型是一定要 里面的