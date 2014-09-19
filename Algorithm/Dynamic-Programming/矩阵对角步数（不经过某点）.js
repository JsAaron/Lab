/**
 * 问题：给一矩阵，a 在左下角，b 在右上角，p 是其中一个点，求 a 到 b 不经过 p 点的所有可能步数
 * 解决：划分 a * p 矩阵 和 p * b 矩阵，两者步数之积为经过 p 的步数，再求 a * b 的总步数减去经过 p 的步数即可。
 * 使用 Bottom-Up 可以压缩空间到 O(min(m,n))，且可以在求解 a * b 过程中一并求出 a * p 与 p * b
 * @param {Integer} width 矩阵宽度
 * @param {Integer} height 矩阵高度
 * @param {Integer} px p 点 x 坐标（0 算起）
 * @param {Integer} py p 点 y 坐标（0 算起）
 * @return {Integer} a 到 b 不经过 p 点的步数
 */
function foo(width, height, px, py) {

  // 矩阵保持横放
  if(width < height) {
    width = [height, height = width][0];
    px = [py, py = px][0];
  }

  var memo = [], i, j,
      // a x p 矩形的步数
      ap,
      // p x b 矩形的步数
      pb,
      // p * b 矩阵的大小
      pbx = width - px - 1,
      pby = height - py - 1;

  // 只能上/右走
  for (i = 0; i < height; i += 1) {
    memo[i] = 1;
  }

  // Bottom-Up 算 a * b 的步数
  for (j = 1; j < width; j += 1) {
    for (i = 1; i < height; i += 1) {

      memo[i] = memo[i-1] + memo[i];

      // a x p 矩形的步数
      if (j == px && i == py) {
        ap = memo[i];

        // p * b 矩形的步数
      } else if (j == pbx && i == pby) {
        pb = memo[i];
      }
    }
  }

  // 总步数 - 经过 p 的步数
  return memo[height-1] - ap * pb;
}

console.log(foo(6, 8, 3, 3));