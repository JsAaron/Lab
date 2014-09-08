/**
 * 请编写一个 JavaScript 函数 parseQueryString，
 * 它的用途是把 URL 参数解析为一个对象，如：
 * var url = "http://www.taobao.com/index.php?key0=0&key1=1&key2=2"; 
 * var obj = parseQueryString(url); 
 * alert(obj.key0); // 输出0
 */

function parseQueryString(str){
  var pairs = str.replace(/^.*\?/, '').split('&'),
      res = {};
  for (var i = pairs.length - 1; i > 0; i -= 1) {
    var p = pairs[i].split('=');
    res[p[0]] = p[1];
  }
  return res;
}
 
var url1 = "http://www.taobao.com/index.php?key0=0&key1=1&key2=2";
var url2 = "http://www.taobao.com/index.php?key0=0&key1=1&key2=2&key3";
 
console.log(parseQueryString(url1));
console.log(parseQueryString(url2));