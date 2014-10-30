// 给出前序遍历与中序遍历求树
function genTreeFromPreInOrder(sPreOrder, sInOrder) {
  'use strict'

  assert(typeof sPreOrder === 'string' && typeof sInOrder === 'string', 'Input Not String')
  assert(sPreOrder.length === sInOrder.length, 'Diff Len')

  var root = {}
  if (!sPreOrder || !sInOrder) return root
  
  function genTree(node, preBegin, inBegin, inEnd) {
    node.value = sPreOrder.charAt(preBegin)
    var inIndex = sInOrder.indexOf(node.value, inBegin)
    inIndex-inBegin && genTree(node.lChild={}, preBegin+1, inBegin, inIndex)
    inEnd-inIndex-1 && genTree(node.rChild={}, inIndex-inBegin+preBegin+1, inIndex+1, inEnd)
  }

  genTree(root, 0, 0, sInOrder.length)
  return root
}





var root = genTreeFromPreInOrder('GDAFEMHZ','ADEFGHMZ')
  , sPreOrder = preOrderTraversal(root)
assert(sPreOrder === 'GDAFEMHZ', 'GDAFEMHZ, ADEFGHMZ')

root = genTreeFromPreInOrder('','')
sPreOrder = preOrderTraversal(root)
assert(sPreOrder === '', 'Empty Input')

genTreeFromPreInOrder('','a')
genTreeFromPreInOrder('', 1)

function preOrderTraversal(root) {
  var sResult = ''
  !function (node) {
    sResult += node.value || ''
    node.lChild && arguments.callee(node.lChild)
    node.rChild && arguments.callee(node.rChild)
  }(root)
  return sResult
}