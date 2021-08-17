module.exports = function reverse (n) {
  return Number(Array.from(String(n)).reverse().join(''))
}
