async function async1() {
  console.log('async1 start')
  await async2() // 走了一个微任务
  console.log('async1 end')
}

async function async2() {
  console.log('async2')
}

console.log('script start')

setTimeout(function () {
  console.log('setTimeout0')
}, 0)

setTimeout(function () {
  console.log('setTimeout2')
}, 300)

// 宏任务
setImmediate(() => console.log('setImmediate'));

// 微任务
process.nextTick(() => console.log('nextTick1'));
// global A [nextTick1 ,  nextTick2,  promise3  ], OA [ awati p ]

async1();

process.nextTick(() => console.log('nextTick2'));

new Promise(function (resolve) {
  console.log('promise1')
  resolve();
  console.log('promise2')
}).then(function () {
  console.log('promise3')
})

console.log('script end')


//  整个script 是宏任务， 遇到了微任务 。enqeqeq . 遇到宏任务 加入 宏任务队列， 宏任务中的微任务执行完以后才会执行下一个宏任务






//  script start
//  async1 start
//  async2
//  promise1
//  promise2
//  script end
//  nextTick1
//  nextTick2
//  async1 end
//  promise3
//  setTimeout0
//  setImmediate
//  setTimeout2