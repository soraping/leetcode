# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def deleteDuplicates(self, head: ListNode) -> ListNode:

        cur_node = head

        while cur_node and cur_node.next:
            
            pre_node = cur_node.next

            if cur_node.val == pre_node.val:
                cur_node.next = pre_node.next
            else:
                cur_node = pre_node
        
        return head