type MyReadonly<T> = {
  readonly [P in keyof T] : T[P]
}


// js
function readonly(obj) {
  const reslut = {}

  for (const key in obj) {
      reslut["readonly" + key] = obj[key]
  }

  return reslut
}

// 1. 返回一个对象 T[P]
// 2. 遍历 obj   in -> mapped   lookup -> keyof
// 3. 加上 readonly 关键字
// 4. 通过 key 来获取 obj(接口) 里面的值
