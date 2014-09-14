/**
 * 给出数组 a[]，构造数组 b[]，b[i] = a[0] * a[1] * ... * a[a.length-1] / a[i]
 * 不允许使用除法
 * 空间复杂度 O(1)、时间复杂度 O(n)
 * @author Jesse Wong (@straybugs)
 */


function fn(a)
{
  var b = []
  , len = a.length
  , i
  ;
  b[0] = 1;
  
  // 先算左半部分
  for(i = 1; i < len; i += 1) {
    b[i] = b[i-1] * a[i-1];
  }

  // 倒过来算右半部分
  for(i = len-1; i >= 1; i -= 1) {
    b[i] = b[i] * b[0];
    b[0] = b[0] * a[i];
  }
  return b;
}


var a = [1, 2, 3];
console.log(fn(a));