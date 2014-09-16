/**
 * 实现 add(1)(2)(3)(4)(5) //15
 * 利用闭包、toString 重写
 * @author Jesse Wong (@straybugs)
 */


function add(num) {
  
  var res = num,
      getSum = function() {
        return res;
      };
      
  function fn(num) {
    res += num;
    return fn;
  };
  
  fn.toString = getSum;
  
  return fn;
  
}

var a = add(1)(2)(3)(4)(5);
alert(a);