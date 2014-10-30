// 自己实现了一遍 bind
Function.prototype.bind2 = function () {
  var slice = Array.prototype.slice
    , func  = this
    , args  = slice.call(arguments, 1)
    , obj   = arguments[0]
  return function () {
    return func.apply(obj, args.concat(slice.call(arguments)))
  }
}