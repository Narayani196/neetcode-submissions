# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        curr = head
        length = 0
        if head is None:
            return
        while curr:
            length = length + 1
            curr = curr.next
        target = length - n
        if target == 0:
            return head.next
        curr, prev = head, None
        for _ in range(target):
            prev = curr
            curr = curr.next
        if curr.next is not None:
            prev.next = curr.next
        elif prev is not None:
            prev.next = None
        else:
            return
        return head

        