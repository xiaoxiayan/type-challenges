type TupleToObject<T extends readonly any[]> = {
    [P in T[number]] : P
}
const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type r =  TupleToObject<typeof tuple>

//  js
function TupleToObject(arr) {
    let reslut = {}
    arr.forEach(el => {
      reslut[el] = el
    })
    return reslut
}


// 使用 typeof 可以把 一个 js的常量 转换成 ts ， 例如 const， let -->
// 1. 返回一个对象
// 2. 遍历数组  T[number]


