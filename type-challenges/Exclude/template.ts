
type MyExclude<T, U> =  T extends  U ? never : T





// 也就是去重，

// js 循环两次或者使用 includes

function MyExclude (T, U: any[]) {
  let result = []
  for(let i = 0; i < T.length; i++) {
    const t = T[i]
    if(!U.includes(t)) { // 不包含
      result.push(t)
    }
  }
  return result
}
// 联合类型 union

type t1 = "a" | "b" | "c"
type t2 = "a"

// 数组类型， tuple 不行
type t3 = ['a', 'b', 'c']
type t4 = ['a']

type res = MyExclude<t1, t2>