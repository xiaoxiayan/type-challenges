var obj = {
  name: 'why',
  age: 18
}

// 限制 对象添加属性
Object.preventExtensions(obj)

obj.aa = 'aa'



// 让对象属性不可以修改， writable

Object.freeze(obj)

obj.name = 'ddd'

console.log(obj)
