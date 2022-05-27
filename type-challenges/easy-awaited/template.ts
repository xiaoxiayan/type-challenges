type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer X>
? X extends Promise<unknown>
  ? MyAwaited<X>
  : X
: never

//  约束传入的值 是 promise 类，如果是，递归调用，如果不是， 那么返回 T
type myAwaited2 <T> = T extends Promise<infer X> ? myAwaited2<X> : T
// 当传入不是 promise 的类型的时候，要抛出一个错误， 约束传入的值 一定为 promise
type myAwaited3 <T extends Promise<unknown>> = T extends Promise<infer X>
  ? X extends Promise<unknown> ? myAwaited3<X> : X  // 判断传入的 X 是不是 extends ，如果是，走递归，如果不是走 X
  : never // 这边就没法返回了

//  相当于递归去解构这个 传入的对象
//  infer == 相当于去定义一个未知数变量 x （数学中的变量X ，随机变量）
//  unknown ---> 无所谓是什么东西