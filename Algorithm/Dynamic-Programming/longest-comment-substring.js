/**
 * Bottom-up DP for longest common substring (not subsequence).
 * Time: O(m*n)
 * Space: O(min(m,n))
 * @author Jesse Wong (@straybugs)
 * @param {string} sstr A string.
 * @param {string} lstr A string.
 * @return {string} Longest common substring.
 */
function lcstr(sstr, lstr) {
 
  'use strict';
  
  if (typeof(sstr) !== 'string' || typeof(lstr) !== 'string') {
    return '';
  }
 
  // sstr should be shorter
  if (sstr.length > lstr.length) {
    sstr = [lstr, lstr = sstr][0];
  }
  
  var slen = sstr.length
  , llen = lstr.length
  , memo = []
  , maxValue = 0
  , maxIndex = 0
  , i, j, k
  ;
  // note the "<=", leave memo[0] to lstr.
  for (i = 0; i <= slen; i += 1) {
    memo[i] = 0;
  }
 
  for (i = 0; i < llen; i += 1) {
    // must traverse backward
    for (j = slen-1; j >= 0; j -= 1) {
      // remember the memo got 1 offset
      k = j+1;
      if (lstr.charAt(i) === sstr.charAt(j)) {
        memo[k] = memo[j] + 1;
        if (maxValue < memo[k]) {
          maxValue = memo[k];
          maxIndex = k;
        }
      } else {
        memo[k] = 0;
      }
    }
  }
  return sstr.slice(maxIndex-maxValue, maxIndex);
}