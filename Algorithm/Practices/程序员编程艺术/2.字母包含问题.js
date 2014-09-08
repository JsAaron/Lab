/**
 * 给定一长一短的两个字符串 A，B，假设 A 长 B 短，
 * 要判断 A 是否包含了 B 中所有的字母。
 * @author Jesse Wong (@straybugs)
 */


 
// O(m+n)
var containChar = function (Str1, Str2) {
  
  if (typeof Str1 !== "string" || typeof Str2 !== "string") {
    return;
  }
  
  var longStr,
      shortStr,
      alphabet = {}, // 统计 shortStr 字母表
      alphaLen = 0,  // shortStr 字母类型个数
      count = 0,     // 匹配的字母的类型个数
      i, t;
  
  if (Str1.length > Str2.length) {
    longStr = Str1;
    shortStr = Str2;
  } else {
    longStr = Str2;
    shortStr = Str1;
  }
  
  for (i = 0; i < shortStr.length; i += 1) {
    t = shortStr.charAt(i);
    if (!alphabet.hasOwnProperty(t)) {
      alphabet[t] = true;
      alphaLen += 1;
    }
  }
  
  for (i = 0; i < longStr.length; i += 1) {
    t = longStr.charAt(i);
    if (alphabet.hasOwnProperty(t)) {
      if (alphabet[t] === true) {
        alphabet[t] = false;
        count += 1;
        // 把 shortStr 字母表所有类型的字母都匹配了，不用继续匹配
        if (count === alphaLen) {
          return true;
        }
      }
    } else {
      return false;
    }
  }
  return true;
  
}; // end function containChar
 
console.log(myApp.containChar("abcdefghijk", "abc"));  // true
console.log(myApp.containChar("abc", "abcdefghijk"));  // true
console.log(myApp.containChar("abcdefghijk", "zabc")); // false
console.log(myApp.containChar("abcdefghijk", ""));     // false