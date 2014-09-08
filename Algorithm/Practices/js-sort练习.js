/**
 * 以字符串第二个字符开始，按字典排序
 * ["abd","cba","ba",]，排序后["ba","cba","abd"]
 * @author Jesse Wong (@straybugs)
 */


var compare = function(s1, s2) {
  if (typeof s1 === 'string' && typeof s2 === 'string') {
    var a = s1.slice(1),
        b = s2.slice(1);
    if (a > b) return 1;
    if (a < b) return -1;
  }
  return 0;
};
 
var a = ["abd","cba","ba"];
console.log(a.sort(compare));