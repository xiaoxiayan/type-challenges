
type Length<T extends readonly any[]> =  T["length"]


// js
// 获取数组长度

function getLength (arr) {
  if(Array.isArray(arr)) {
    return arr.length
  }
}

// ts
// 什么是 tuple 类型
// tuple 和 普通数组有什么区别