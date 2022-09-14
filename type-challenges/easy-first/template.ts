// type First<T extends any[]> = T extends [] ? never : T[0]
// type First<T extends any[]> = T["length"] extends 0 ? never : T[0]
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never
type First<T extends any[]> = T extends [infer First, ...infer Rest] ? First : never


// T[number]
type args = [1, 2, 3]
// union
// extends union 可以看是否存在


// js
// 1. 返回数组的 0 号位置
function returnFirst (arr) {
  return arr[0]
}

// ts
// 知识点
//  1. extends 类型条件判断  .  [] , 数组 [ 1, 2, 3] 这种，在 ts 中都是类型，并不算是一个值
//  2. 获取 tuple 的 length 属性
//  2. extends union 判断的规则
//  2.  的使用