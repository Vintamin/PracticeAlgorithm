/* 
给定单向链表的头指针和一个要删除的节点的值，定义一个函数删除该节点。

返回删除后的链表的头节点。

输入: head = [4,5,1,9], val = 5
输出: [4,1,9]
解释: 给定你链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -> 1 -> 9.

 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
*/

 function ListNode(val) {
         this.val = val;
         this.next = null;
     }

function deleteNode(head,val){
    //虚拟头结点，因为头结点有可能也被删除
    let node =new ListNode(-1);
    node.next =head;
    let p =node;
    while(p.next){
        if(p.next.val=== val){
            p.next =p.next.next;
            break;
        }
        p =p.next;
    }
    return node.next;
}