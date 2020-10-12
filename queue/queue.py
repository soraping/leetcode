from collections import deque
class RecentCounter:
    
    def __init__(self):
        self.queue = deque()
        

    def ping(self, t: int) -> int:
        if t is None:
            return None
        while True:
            if len(self.queue) and ((t-self.queue[0]) > 3000):
                self.queue.popleft()
            else:
                break
        self.queue.append(t)
        print(self.queue)
        return len(self.queue)



# Your RecentCounter object will be instantiated and called as such:
obj = RecentCounter()
print(obj.ping(None))
print(obj.ping(642))
print(obj.ping(1849))
print(obj.ping(4921))
print(obj.ping(5936))
print(obj.ping(5957))