/**
 * 编写一个JavasSript函数，
 * 给定一个DOM节点node和一个正整数n, 
 * 返回node的所有第n代后代节点（直接子节点为第1代）
 * @author Jesse Wong (@straybugs)
 */


function getDescendants(node, n) {
  
  var res = [];
  
  function fn(children, lev) {
    
    if (lev >= n) {
      res = res.concat(Array.prototype.slice.apply(children));
      return;
    }
    
    for (var i = 0; i < children.length; i += 1) {
      fn(children[i].children, lev+1);
    }
    
  }
  
  fn(node.children, 1);
  return res;
}