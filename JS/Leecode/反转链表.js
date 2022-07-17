/* 
    反转链表：给定单链表的头节点 head ，请反转链表，并返回反转后的链表的头节点。
    思路：
        方式一：使用一个栈，把一个个的节点放进栈中（但需要新开一个数组）
        方式二：采用指针方式
            准备三个指针：pre（保留前一个位置）,curr,next（作用是占下一个的位置）
            刚开始，pre指向前一个节点（null）,curr和next指向head
            while{
                next = curr.next;
                curr.next = prev;
                prev= curr;
                curr = next;
            }     
            return prev     
*/
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

/* 
假设链表为 1 \rightarrow 2 \rightarrow 3 \rightarrow \varnothing1→2→3→∅，
我们想要把它改成 \varnothing \leftarrow 1 \leftarrow 2 \leftarrow 3∅←1←2←3。

在遍历链表时，将当前节点的 \textit{next}next 指针改为指向前一个节点。
由于节点没有引用其前一个节点，因此必须事先存储其前一个节点。在更改引用之前，还需要存储后一个节点。最后返回新的头引用。
*/

//迭代
 var reverseList = function(head) {
    let prev = null;
    let curr = head;
    while (curr) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
};

//采用ES6的解构赋值
var reverseList2 = function(head) {
    let prev = null;
    let curr = head;
    while (curr != null) {
        [curr.next,prev,curr] =  [ prev,curr,curr.next]
    }
    return prev;
};

//递归 
var reverseList3 = function(head) {
    if (head == null || head.next == null) {
        return head;
    }
    const newHead = reverseList3(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
};

