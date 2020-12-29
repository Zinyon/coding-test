# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:

    def toReverse(self, head: ListNode) -> ListNode:
        node, prev = head, None

        while node:
            next, node.next = node.next, prev
            prev, node = node, next

        return prev

    def toList(self, node: ListNode) -> list:
        list = []

        while node:
            list.append(node.val)
            node = node.next

        return list

    def toReversedLinkedList(self, list: []) -> ListNode:
        prev: ListNode = None

        for l in list:
            node = ListNode(l)
            node.next = prev
            prev = node

        return prev

    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        list1 = self.toList(self.toReverse(l1))
        list2 = self.toList(self.toReverse(l2))

        sum = int(''.join([str(e) for e in list1])) + \
            int(''.join([str(e) for e in list2]))

        return self.toReversedLinkedList(list(str(sum)))
