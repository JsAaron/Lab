/**
 * 题目：给定字符串，可以通过插入字符使其变为回文，求最少插入字符的数量。
 * 解决：Bottom-up DP
 * Time: O(n^2)
 * Space: O(n)
 * @author Jesse Wong (@straybugs)
 * @param {string} str 字符串一条。
 * @return {Number} 最少插入字符的数量。
 */
function fn(str) {

  'use strict';

  var memo = []
  , len = str.length
  , lenm1 = len - 1
  , i, j, k
  ;

  if (typeof(str) !== 'string') {
    return -1;
  }

  // memo[len] = 0
  for (i = 0; i <= len; i += 1) {
    memo[i] = 0;
  }

  /**
   * result = fn(i+1, j-1) -> [if (str[i] == str[N-1-i])]
   * result = min(fn(i+1, j), fn(i, j-1)) -> [if (str[i] != str[N-1-i])]
   * Bottom-up 矩阵从右上角向左下角求。压缩后从右向左求。
   */
  for (j = 0; j < len; j += 1) {
    // memo[len] = 0
    k = 0;
    for (i = lenm1; i >= 0; i -= 1) {
      if (str.charAt(i) === str.charAt(j)) {
        // exchange
        memo[i] = [k, k = memo[i]][0];
      } else {
        k = memo[i];
        memo[i] = (k < memo[i+1]? k : memo[i+1]) + 1;
      }
    }
  }
  return memo[0];
}
 
