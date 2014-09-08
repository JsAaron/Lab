/**
 * 对长度10000的数组排序，0< arr[i] < 9999
 * @author Jesse Wong (@straybugs)
 */

var arr = [];
 
for (var i=0; i< 10000; i++) {
  arr[i] = Math.floor(Math.random()*9997+1); //1~9998
}
 
// console.log(a);
 
// 快速排序 O(blogn) 可自定义中值取法
function quickSort(arr, getPivot) {
  
  if(!Array.isArray(arr)) {
    return;
  }
  
  getPivot = getPivot || function (s, e) {
    return Math.floor(Math.random()*(e-s)+s); //s~e
  };
  
  
  function qSort(s, e) {
    if (s >= e) {
      return;
    }
    var p = s,
        q = e,
        k = getPivot(s, e),
        t = arr[k];
    arr[k] = arr[s];
    while (p < q) {
      while (p < q && arr[q] >= t) {
        q -= 1;
      }
      arr[p] = arr[q];
      while (p < q && arr[p] <= t) {
        p += 1;
      }
      arr[q] = arr[p];
    }
    arr[p] = t;
    qSort(s, p-1);
    qSort(p+1, e);
  }
  
  qSort(0, arr.length-1);
  
  return arr;
}
 
var st = new Date();
quickSort(arr);
var et = new Date() - st;
console.log(arr);
console.log(et);  // 比计数排序慢，但支持小数