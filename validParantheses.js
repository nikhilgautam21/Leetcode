/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:
    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
*/

/* Time Complexity O(n) 
    Approach: 
    Keep pushing all open braces until we get a closed one. 
    Start popping out the open braces & compare with the current closed one
*/
var isValid = function (s) {
  let slen = s.length
  const openBraces = ['{', '[', '(']
  let stack = []
  // return false if there are odd values
  if (slen % 2 !== 0) return false

  for (let i = 0; i < s.length; i++) {
    while (openBraces.includes(s[i])) {
      stack.push(s[i++])
    }
    // stack will be empty if there are no open braces & we get close braces in starting
    if(stack.length == 0) return false
    let top = stack.pop()
    if (
      (top === '[' && s[i] !== ']') ||
      (top === '(' && s[i] !== ')') ||
      (top === '{' && s[i] !== '}')
    ) {
      return false
    }
  }
  // return false if there are values remaining in stack after loop eg [{}()
  if (stack.length) return false
  return true
}

const test = '({}{}[])'
const result = isValid(test)
console.log(result)
