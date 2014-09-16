/**
 * 收集一些有用的函数
 * @author Jesse Wong (@straybugs)
 */


if (!Array.isArray) {
  Array.isArray = function(arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  };
}
 
if (!Number.isInteger) {
  Number.isInteger = function (nVal) {
    return typeof nVal === "number" &&
      isFinite(nVal) &&
      nVal > -9007199254740992 &&
      nVal < 9007199254740992 && // Math.pow(2,53)
      Math.floor(nVal) === nVal;
  };
}
 
if (!Number.isSafeInteger) {
  Number.isSafeInteger = function (nVal) {
    return typeof nVal === "number" &&
      isFinite(nVal) &&
      nVal > -9007199254740991 &&
      nVal < 9007199254740991 && // Math.pow(2,53)-1
      Math.floor(nVal) === nVal;
  };
}
 
_.isFunction = function(obj) {
  return !!(obj && obj.constructor && obj.call && obj.apply);
};