/**
 * 有2个int型已经去重的数组a和b，都是已经从小到大排序好的。
 * 要求遍历b数组的数字，如果这个数字出现在a中，就将其从a删去；
 * 反之将其插入到a的适当位置，使a保持排序状态。
 * @author Jesse Wong (@straybugs)
 */


var foo = function(arrA, arrB) {
  
  var iB,
      iA;
  
  for (iA = iB = 0; iB < arrB.length; iB += 1) {
    while (arrB[iB] > arrA[iA] && iA < arrA.length) {
      iA += 1;
    }
    if (arrB[iB] === arrA[iA]) {
      arrA.splice(iA, 1);
    } else {
      arrA.splice(iA+1, 0, arrB[iB]);
    }
  }
  
  return arrA;
};