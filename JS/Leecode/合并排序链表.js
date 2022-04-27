/* 
输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。

输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4

 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
*/
function ListNode(val) {
     this.val = val;
     this.next = null;
 }
function mergeKLists(l1,l2){
    if(!l1) return l2;
    if(!l2) return l1;

    let fadeNode =new ListNode(-1);
    let cur =fadeNode;//永远指向最后一个节点
    while(l1 && l2){
        if(l1.val <l2.val){
            cur.next =l1;
            l1 =l1.next;
        }else{
            cur.next =l2;
            l2 =l2.next
        }
        cur =cur.next;
    }
    if(l1)cur.next=l1;
    if(l2)cur.next=l2;
    return fadeNode.next
}

