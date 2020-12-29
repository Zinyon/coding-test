# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def isPalindrome(self, head) -> bool:
        list = []

        while head != None:
            list.append(str(head.val))
            head = head.next
        
        front = ''.join(list) 
        list.reverse()
        reversed = ''.join(list)
        
        return front == reversed
    
    def isPalindrome_Runner(self, head) -> bool:
        rev = None
        slow = fast = head

        while fast and fast.next:
            fast = fast.next.next
            rev, rev.next, slow = slow, rev, slow.next
        if fast:
            slow = slow.next

        while rev and rev.val == slow.val:
            slow, rev = slow.next, rev.next
        return not rev
        

s = Solution()
s.isPalindrome([1, 2])

