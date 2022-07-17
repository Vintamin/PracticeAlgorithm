/* 
    给定单链表的头节点 head ，将所有索引为奇数的节点和索引为偶数的节点分别组合在一起，然后返回重新排序的列表。
    第一个节点的索引被认为是 奇数 ， 第二个节点的索引为 偶数 ，以此类推。
    请注意，偶数组和奇数组内部的相对顺序应该与输入时保持一致。
    你必须在 O(1) 的额外空间复杂度和 O(n) 的时间复杂度下解决这个问题。
    比如：
        输入: head = [1,2,3,4,5]
        输出: [1,3,5,2,4]
    思路：
        利用两个指针odd(放在第一个位置)和even(放在第二个位置)


*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var oddEvenList = function(head) {
    if (head === null) {
        return null;
    }
    if (head.next === null) {
        return head;
    }
    let odd =head;
    let even =head.next;
    let evenHead = head.next;//占位偶数的第一个
    while (even !== null && even.next !== null) {
        odd.next = odd.next.next;
        odd = odd.next;
        even = even.next.next;
        even = even.next;
    }
    odd.next = evenHead;
    return head;
};