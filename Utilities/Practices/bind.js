// 自己实现了一遍 bind
Function.prototype.bind2 = function (obj) {
  var fn   = this
    , args = Array.prototype.slice.call(arguments, 1)
  return function () {
    return fn.apply(obj, args.concat(Array.prototype.slice.call(arguments)))
  }
}