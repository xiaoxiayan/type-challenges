
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
// tuple里面数组类型是定死的，所以长度使用length 可以 出来
type stringNumbeorPair = [string, number]
type haveLength = stringNumbeorPair["length"]

// 而普通数组的话, 不会显示出值，因为他的长度是不固定的

type stringArray = string[]

type noNumberLength = stringArray["length"]
