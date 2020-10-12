from collections import deque

class MinStack:
    
    def __init__(self):
        self.stack = deque()
        self.mini_stack = deque()

    def push(self, x: int) -> None:
        self.stack.append(x)
        if self.getMin() is not None:
            m = min(x, self.getMin())
            if x == m:
                self.mini_stack.append(m)
        else:
            self.mini_stack.append(x)

    def pop(self) -> None:
        p = self.stack.pop()
        if p == self.getMin():
            self.mini_stack.pop()

    def top(self) -> int:
        return self.stack[-1] if len(self.stack) > 0 else None

    def getMin(self) -> int:
        return self.mini_stack[-1] if len(self.mini_stack) > 0 else None


obj = MinStack()
# obj.push(-2)
# obj.push(0)
# obj.push(-3)
# print(obj.getMin())
# obj.pop()
# print(obj.top())
# print(obj.getMin())

obj.push(2)
obj.push(0)
obj.push(3)
obj.push(0)
print(obj.getMin())
obj.pop()
print(obj.getMin())
obj.pop()
print(obj.getMin())
obj.pop()
print(obj.getMin())
