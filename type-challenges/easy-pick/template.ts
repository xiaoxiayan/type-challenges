
type MyPick<T, K extends keyof T> = {
  [P in K] : T[P]
}


// js --> ts
// js

function myPick (todo, keys) {
  let obj

  keys.forEach(key => {
    if(key in todo) {
      obj[key] = todo[key]
    }
  });

  return obj
}

// 1. 返回对象
// 2. 遍历对象
// 3. 判断对象是否存在
// 4. 赋值