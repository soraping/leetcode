from collections import deque

data = {
    "(": ")",
    "[": "]",
    "{": "}"
}

mapping = {
    ')': '(', 
    ']': '[', 
    '}': '{'
}

class Solution:
    def isValid(self, s: str) -> bool: 
        # if s == None or len(s) == 0 or len(s) % 2 == 1: 
        #     return False
        
        # stack = deque()
        # for i in s:
        #     if i is '(' or i is '[' or i is '{':
        #         stack.append(data[i])
        #     elif i is ')' or i is ']' or i is '}':
        #         if len(stack) == 0:
        #             return False
        #         p = stack.pop()
        #         if p is not i:
        #             return False

        stack = deque()
        for char in s:
            if char in mapping:
                top_s = stack.pop() if stack else '#'
                if mapping[char] != top_s:
                    return False
            else:
                stack.append(char)
        return not stack

s = Solution()
print(s.isValid("){"))
print(s.isValid(']'))
print(s.isValid('()'))
print(s.isValid('()[]{}'))
print(s.isValid('(]'))
print(s.isValid('([)]'))
print(s.isValid('{[]}'))