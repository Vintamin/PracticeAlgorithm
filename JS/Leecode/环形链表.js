/* 
    环形链表 1
    给你一个链表的头节点 head ，判断链表中是否有环。
    如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 
    为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。
    注意：pos 不作为参数进行传递 。仅仅是为了标识链表的实际情况。
*/

/* 
    思路：利用快慢指针，从头开始，快指针每次走两步，慢指针每次走一步。
        如果二者会在某一步相遇的话，那就说明链表有环。
*/
var hasCycle = function(head){
    if (head === null) {
        return false;
    }
    let slow = head;
    let fast = head;
    while (fast.next !==null && fast.next.next !== null){
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            return true;
        }
    }
    return false;
}

/* 
    环形链表 2
    给定一个链表的头节点  head ，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。
    如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 
    为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。
    如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。

    不允许修改 链表。

*/

/* 
    弗洛伊德算法
    思路：1、先判断链表是否有环
          2、再找出链表环的开始位置
*/
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var detectCycle = function(head) {
    if (head === null) {
        return null;
    }
    let slow = head;
    let fast = head;
    let isCycle = false;
    while (fast.next !==null && fast.next.next !== null){
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            isCycle =  true;
            break;
        }
    }
    //无环
    if (!isCycle) {
        return null;
    }
    //把快指针放到开头
    fast = head;
    while (slow !== fast){
        slow = slow.next;
        fast = fast.next;
    }
    return fast;
};