console.log('TJhaivsaNSicmroijpst' === 'ThisNimojs-JavaScript'.replace(/(\S*)-(\S*)/, function (){

  var s1 = arguments[1]
    , s2 = arguments[2]
    , len1 = s1.length
    , len2 = s2.length
    , i = 0
    , j = 0
    , res = ''

  while (true) {
    
    if (i < len1) {
      res += s1[i++]
    } else {
      return res += s2.slice(j)
    }

    if (j < len2) {
      res += s2[j++]
    } else {
      return res += s1.slice(i)
    }

  }

}))