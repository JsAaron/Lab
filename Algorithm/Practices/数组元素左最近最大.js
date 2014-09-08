/**
 * 给定数组Arr[n]，对于其中的每个元素Arr[i]（0=<i<n），
 * 在Arr[0...i-1]中找到元素Arr[k],Arr[k]满足Arr[k]>Arr[i]，并且i-k值最小(即最靠近)。 
 * 要求O(n)时间内找出Arr中所有元素对应的Arr[k]的位置。
 * @author Jesse Wong (@straybugs)
 */


var arr = [],
    i;
 
for (i = 0; i < 10000; i++) {
  arr[i] = Math.floor(Math.random()*9999);
}
 
// console.log(arr);
 
function findLG(arr) {
  if (!Array.isArray(arr)) {
    return;
  }
  
  // 最坏情况 O(2n-1) -> O(n)
  var lp = arr.length - 2,
      res = [],
      stack = [arr.length - 1];
  
  res.length = arr.length;
  
  while (lp >= 0) {
    while (arr[lp] > arr[stack[0]]) {
      res[stack.shift()] = lp;
    }
    stack.unshift(lp--);
  }
  
  return res;
}
 
var st = new Date();
findLG(arr);
var et = new Date() - st;
console.log(et);