/**
 * Bottom-up DP for longest common subsequence.
 * Time: O(m*n)
 * Space: O(min(m,n))
 * @author Jesse Wong (@straybugs)
 * @param {string} sstr A string.
 * @param {string} lstr A string.
 * @return {Number} Length of the longest common subsequence.
 */
function lcseq(sstr, lstr) {
 
  'use strict';
  
  if (typeof(sstr) !== 'string' || typeof(lstr) !== 'string') {
    return '';
  }
 
  // sstr should be shorter
  if (sstr.length > lstr.length) {
    sstr = [lstr, lstr = sstr][0];
  }
  
  var llen = lstr.length
  , slen = sstr.length
  , memo = []
  , i, j, k, t
  ;
  // note the "<=", leave memo[0] to lstr.
  for (i = 0; i <= slen; i += 1) {
    memo[i] = 0;
  }
 
  for (j = 0; j < llen; j += 1) {
    // memo[0] = 0
    t = 0;
    for (i = 0; i < slen; i += 1) {
      // remember the memo got 1 offset
      k = i+1;
      if (lstr.charAt(j) === sstr.charAt(i)) {
        // exchange
        memo[k] = [t, t = memo[k]][0] + 1;
      } else {
        t = memo[k];
        memo[k] = t > memo[i] ? t : memo[i];
      }
    }
  }
  return memo[slen];
}