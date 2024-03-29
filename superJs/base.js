// ES6
let obj = {
  name: 'xp',
  age: 18
}
let arr = [1, 254, 663, 4]
//  for In 循环对象的 可枚举属性
// 循环数组的话是 index
for (let index in obj) {
  // console.log('forIn--', index)
}

// for OF 只能循环 可迭代对象。 array, string, ===
for (let key of arr) {
  // console.log(key)
}



// 数组去重 es6
const arrAA = [1, 2, 2, 'abc', 'abc', true, true, false, false, undefined, undefined, NaN, NaN]

// const result = Array.from(new Set(arrAA))
// 两个for循环
function removeDuplicate(arr) {
  let len = arr.length
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1)
        len--
        j--
      }
    }
  }
}

removeDuplicate(arrAA)
// indexof
// includes

// console.log(arrAA)
// 数组排序



// 数组扁平化处理 -> 递归
let flagArr = []
function flatNode(node) {
  node.forEach(element => {
    arr.push(element)
    if (element.children) {
      flatNode(element.children)
    }
  });
}

// 关于闭包
function see(item) {
  console.log('see=', item)
  return item
}

function bbSet(i) {
  return function () {
    see(i)
  }
}
var vvad = []

function bibao() {
  let arr = new Array(5)
  console.log('bibao=-=', arr)
  for (let index = 0; index < arr.length; index++) {

  }
}

bibao()
console.log(vvad)


function showHelp(help) {
  document.getElementById('help').innerHTML = help;
}

function setupHelp() {
  var helpText = [
    { 'id': 'email', 'help': 'Your e-mail address' },
    { 'id': 'name', 'help': 'Your full name' },
    { 'id': 'age', 'help': 'Your age (you must be over 16)' }
  ];

  for (let i = 0; i < helpText.length; i++) {

    var item = helpText[i];
    document.getElementById(item.id).onfocus = function () {
      showHelp(item.help);
    }

  }
}

setupHelp();