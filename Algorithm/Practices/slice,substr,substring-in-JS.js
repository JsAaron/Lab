/**
 *String.prototype.slice(start[,end]);      If a negative number is given, it is treated as strLength + start/end.
 * 
 *String.prototype.substr(start[,length]);  If a negative number is given to start, it is treated as strLength + start.
 * 
 *String.prototype.substring(indexA[,indexB]); If either argument is less than 0 or is NaN, it is treated as if it were 0.
 *                                          If either argument is greater than stringName.length, it is treated as if it were stringName.length.
 * @author Jesse Wong (@straybugs)
 */

 
var s1 = "0123456789"
console.log(s1.slice(3, 7));        //"3456"
console.log(s1.substr(3, 7));       //"3456789"
console.log(s1.substring(3, 7));    //"3456"
 
console.log(s1.slice(7, 3));        //""
console.log(s1.substr(7, 3));       //"789"
console.log(s1.substring(7, 3));    //"3456" (3, 7)
 
console.log(s1.slice(-3));          //"789" (10-3=7)
console.log(s1.substr(-3));         //"789" (10-3=7)
console.log(s1.substring(-3));      //"0123456789" (0)
 
console.log(s1.slice(-3, -7));      //"" (10-3=7, 10-7=3)
console.log(s1.substr(-3, -7));     //"" (10-3=7, 0)
console.log(s1.substring(-3, -7));  //"" (0, 0)
 
console.log(s1.slice(3, -7));      //"" (3, 10-7=3)
console.log(s1.substr(3, -7));     //"" (3, 0)
console.log(s1.substring(3, -7));  //"012" (3, 0 -> 0, 3)