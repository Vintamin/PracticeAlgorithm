/* 
    找到两个单链表相交的起始节点
        a1->a2
            \
              c1->c2->c3          
            /
    b1->b2->b3      
        比如这里是在c1节点相交.
    注意：
        因为两个链表可能长度不相等，所以不能采用每次节点比较的方式；
        同时因为是单向链表，因此不能采用从后向前比较的方式
    思路：
        两个指针，n1,n2，n1走完a去走b链表，n2走完b去走a链表
        如果有相交，那么会在相交，因为n1,n2走的步数是一样的，所以会相遇
        如果没有相交，那么会在走对方链表结束后发现没有一样的节点那就是没有相交
*/

var getTntersectionNode = function(headA,headB){
    let n1 = headA;
    let n2 = headB;

    while (n1 !== n2) {
        if (n1 === null) {
            n1 = headB;
        }else{
            n1 = n1.next
        }
        if (n2 === null) {
            n2 = headA;
        }else{
            n2 = n2.next
        }
    }
    /* 
        这里如果不相交的话，此时也包括了，因为如果不相交
        n1和n2都会走到null，那么因为null == null所以会跳出while，return n1即null
    */
    return n1;

}