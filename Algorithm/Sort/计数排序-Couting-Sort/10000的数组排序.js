/**
 * 对长度10000的数组排序，0< arr[i] < 9999
 * @author Jesse Wong (@straybugs)
 */

var arr = [];
 
for (var i=0; i< 10000; i++) {
  arr[i] = Math.floor(Math.random()*9997+1); //1~9998
}
 
// console.log(a);
 
function sort(arr) {
  
  if(!Array.isArray(arr)) {
    return;
  }
  
  // 计数排序 O(m+2n) -> O(N)
  // 比快排要快，但不能处理浮点数
  var count = [],
      i, j, k;
  
  for (i = 0; i < arr.length; i += 1) {
    j = arr[i];
    count[j] = count[j] ? count[j] + 1 : 1;
  }
  
  for (i = k = 0; i < count.length; i += 1) {
    for (j = count[i]; j > 0; j -= 1) {
      arr[k++] = i;
    }
  }
  
  return arr;
}
 
var st = new Date();
sort(arr);
var et = new Date() - st;
// console.log(arr);
console.log(et);