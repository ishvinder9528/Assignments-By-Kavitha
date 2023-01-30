function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}
console.log(isPalindrome("racecar"))
// true
console.log(isPalindrome("madam"))
// true
console.log(isPalindrome("kavitha"))
// false
console.log(isPalindrome("keyboard"))
// false




