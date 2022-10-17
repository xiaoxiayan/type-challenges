function hyCurrying(fn) {
  console.log('fn--', fn, fn.length)
  function curried(...args) {
    console.log('args--', args)
    if (args.length >= fn.length) {
      console.log('args.leng >= fn.length===', args)
      return fn.apply(this, args)
    } else {
      function curried2(...args2) {
        return curried.apply(this, args.concat(args2))
      }
      return curried2
    }
  }

  return curried
}

function add(x, y, z) {
  return x + y + z
}

var curryAdd = hyCurrying(add)

console.log('curryAdd--res', curryAdd(1)(2)(3))
