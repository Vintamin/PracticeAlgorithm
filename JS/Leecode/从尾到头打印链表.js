/* 
 * Definition for singly-linked list.
    输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。
 * @param {ListNode} head
 * @return {number[]}
 
 * 输入：head = [1,3,2]
 * 输出：[2,3,1]
 * 
 * 
*/
 function ListNode(val) {
         this.val = val;
         this.next = null;
     }

function reversePrint(head){
    //返回一个数组
    const res =[];
    while(head){
        res.unshift(head.val);
        head =head.next;
    }
    return res;
}
