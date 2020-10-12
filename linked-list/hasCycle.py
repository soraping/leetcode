# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    """
    快慢指针方式
    两个指针同时从起点 head 出发
    一个走一格，一个走两格
    如果链表有环，则这两个指针一定会相遇
    """
    def hasCycle(self, head: ListNode) -> bool:

        p1 = head
        p2 = head

        while p1 and p2 and p2.next:
            if p1.next is p2.next.next:
                return True
            else:
                p1 = p1.next
                p2 = p2.next.next
        
        return false