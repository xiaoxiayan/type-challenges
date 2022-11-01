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
function inheritPrototype(SubType, SupType) {
  SubType.prototype = Object.create(SupType.prototype)
  Object.defineProperty(SubType.prototype, 'constructor', {
    enumerable: false, // 可枚举
    configurable: true, // 可配置
    writable: true, // 可写
    value: SubType, // name
  })

}
//



// 面向对象  特性， 封装， 继承， 多态
// 封装： 在编写 类 function的 过程就是 封装，
// 继承: 重复利用的一些代码
// 多态：不同对象执行的时候表现出不同的形态

// 原型链 。 顶层， 打印出来时 [Objece: null prototype] {} 的时候。 表示该 对象的原型属性已经指向  null 了
// .  对象一般是 __proto__ , 函数是 prototype

// 继承：
// 原型式继承
function createObject(o) {
  function Fn() { }
  Fn.prototype = o
  return new Fn()
}

function object(obj) {
  var newObj = {}
  Object.setPrototypeOf(newObj, obj)
  return newObj
}

// 寄生组合式继承
function Person(name, age, friends) {
  this.name = name
  this.age = age
  this.friends = friends
}

Person.prototype.running = function () {
  console.log('running')
}

Person.prototype.eating = function () {
  console.log('eating')
}

function Student(name, age, friends, sno, score) {
  Person.call(this, name, age, friends)
  this.sno = sno
  this.score = score
}

//  继承， 要创建一个 新对象去继承，防止污染源对象
// Student.prototype = Object.create(Person.prototype)
// 封装 function
inheritPrototype(Student, Person)

Student.prototype.studying = function () {
  console.log('studying')
}
//  在一个对象上定义新的属性或修改现有属性，并返回该对象
// Object.defineProperty(Student.prototype, 'constructor', {
//   enumerable: false, // 可枚举
//   configurable: true, // 可配置
//   writable: true, // 可写
//   value: Student, // name
// })
Student.prototype

var xiaoming = new Student('xiaoming ', '18', ["xx", 'aa'], '9527', '100')
console.log(xiaoming)
