/**
 * @param {Array} arr 待排序的数组
 * @param {Integer=} begin 开始的索引，缺少则从 0 开始
 * @param {Integer=} end 终止索引，待排序最后一个元素的后一位索引
 * @author Jesse Wong (@straybugs)
 */
var insertSort = function(arr, begin, end) {
  var i, j, t;

  if (end === undefined || end <= 0 || end >= arr.length) {
    end = arr.length;
  }
  if (begin === undefined || begin <= 0 || begin > end) {
    begin = 0;
  }

  for (i = begin+1; i < end; i += 1) {
    t = arr[i];
    for (j = i-1; j >= begin && arr[j] > t; j -= 1) {
      arr[j+1] = arr[j];
    }
    arr[j+1] = t;
  }
};