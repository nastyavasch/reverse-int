module.exports = function reverse (n) {
    let number = Math.abs(n);
   return number.toString().split('').reverse().join('');
}
