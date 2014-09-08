/**
 * 定义字符串的左旋转操作：把字符串前面的若干个字符移动到字符串的尾部。
 * 如把字符串 abcdef 左旋转 2 位得到字符串cdefab。
 * 请实现字符串左旋转的函数，要求对长度为 n 的字符串操作的时间复杂度为 O(n)，
 * 空间复杂度为 O(1)。
 * @author Jesse Wong (@straybugs)
 */



/*
 * 123456 --leftShift+2--> 345612
 * 1. 12 | 3456
 * 2. 21 | 3456
 * 3. 21 | 6543
 * 4. 216543
 * 5. 345621
 */
var leftShift = function (arr, offset) {
 
  function reverse(begin, end) {
    var i, t, tmp,
      length = (end - begin) / 2 + begin;
    for (i = begin; i < length; i += 1) {
      t = end - 1 - i + begin;
      tmp = arr[i];
      arr[i] = arr[t];
      arr[t] = tmp;
    }
  }
 
  if (arr instanceof Array &&
      typeof offset === "number" && isFinite(offset)) {
    
    offset = parseInt(offset, 10);
    offset = offset % arr.length;
    
    if (offset > 0) {
      reverse(0, offset);
      reverse(offset, arr.length);
      reverse(0, arr.length);
    }
    else if (offset < 0) {
      // rightShift(arr, -offset);
      reverse(0, arr.length + offset);
      reverse(arr.length + offset, arr.length);
      reverse(0, arr.length);
    }
    return arr;
  }
 
};

 
console.log(leftShift([1, 2, 3, 4, 5, 6], 2));