Function.prototype.hycall = function (thisArg, ...args) {
  var fn = this

  // 判断传进来的参数
  thisArg = thisArg ? Object(thisArg) : window
  thisArg.fn = fn
  var reslut
  reslut = thisArg.fn(...args)
  delete thisArg
  return reslut
}



Function.prototype.hyapply = function (thisArg, argArray) {
  var fn = this

  // 判断传进来的参数
  thisArg = thisArg ? Object(thisArg) : window
  thisArg.fn = fn
  var reslut
  argArray = argArray || []
  reslut = thisArg.fn(...argArray)
  delete thisArg
  return reslut
}

function foo() {
  console.log('foo---fun', this)
}

foo.hyapply("abc")