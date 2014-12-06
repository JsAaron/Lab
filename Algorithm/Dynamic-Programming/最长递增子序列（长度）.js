// 返回最长递增子序列的长度
function lisLen(arr) {
  'use strict'

  /* 
    maxVals[i] 表示在 arr[i] 之前的
    所有长度为 i 的递增子序列中
    最后一个值（子序列的最大值）的最小值。（相同长度下最大值越小明显更优）

    如：arr = [1, 4, 2, 5, 6, 3]
    开始遍历
    arr[1], maxVals = [1, 4] ([1]; [1,4])
    arr[2], maxVals = [1, 2] ([1]; [x,2], [x,4]; 只取 [x,2] 够了)
    arr[3], maxVals = [1, 2, 5] ([1]; [1,2]; [x,x,5])
    arr[4], maxVals = [1, 2, 5, 6] ([1]; [x,2]; [x,x,5]; [x,x,x,6])
    arr[5], maxVals = [1, 2, 3, 6] ([1]; [x,2]; [x,x,3]; [x,x,x,6]; 因为 3 不可能在刚刚好比它大的 5 后面)
    故最长子序列为 maxVals.length = 4
  */
  var maxVals = []

  // 二分法找 maxVals 中大于 x 的最小值
  function bSearch(x) {
    var start = 0
      , end = maxVals.length - 1
      , mid

    while(start <= end) {
      mid = (start + end) / 2 | 0
      if (maxVals[mid] <= x) {
        start = mid + 1
      } else {
        end = mid - 1
      }
    }
    return start
  }

  maxVals[0] = arr[0]
  for (var i = 1; i < arr.length; i += 1) {
    if (arr[i] > maxVals[maxVals.length-1]) {
      // 因此时 arr[i] 最大，
      // 其与 maxVals[maxLen] 之前的任意值组合都必然大于其下一个值（参见上面 maxVals 的定义）。
      // 如：若 arr[i] 与 maxVals[j] 结合（j < i），那么比较 maxVals[j+1] 与 arr[i]，因 arr[i] 最大，故 maxVals[j+1] 不变
      //     所以 arr[i] 必然促使 maxVals 记录新的长度值。
      maxVals.push(arr[i])
    } else {
      // 找出 maxVals 中 j < i 且 maxVals[j] > arr[i] 的最小 j
      // 即找出刚刚好比 arr[i] 大的 maxVals
      maxVals[bSearch(arr[i])] = arr[i]
    }
  }
  return maxVals.length
}