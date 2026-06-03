# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def reorderList(self, head: Optional[ListNode]) -> None:
        if not head:
            return
        llist = []
        node = head
        while node:
            llist.append(node)
            node = node.next
        l,r = 0,len(llist)-1
       
        while l<r:
            llist[l].next = llist[r]
            l = l+1
            if l>=r:
                break
            llist[r].next = llist[l]
            r = r-1
        llist[l].next = None
           
        
            

        

        

        