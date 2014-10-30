/**
 * John Resig 的 assert 函数，做了小封装
 */

window.assert = window.assert || function () {
  var output = document.getElementById('output')
  return function (outcome, description) { 
    var li = document.createElement('li')
    li.className = outcome ? 'pass' : 'fail'
    li.appendChild(document.createTextNode(description))
    output.appendChild(li)
  }
}()