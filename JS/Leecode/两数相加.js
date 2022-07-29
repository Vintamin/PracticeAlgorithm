/* 
    给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
    请你将两个数相加，并以相同形式返回一个表示和的链表。
    你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    //首先需要创建结果链表的表头c对象 
         var c = new ListNode(0);
        //在创建一个ListNode对象 因为在接下来的操作中会反复操作结果节点,并且是单向链表,在返回值的时候,还需要用到 c 对象,以防最后找不到头节点 
         var result = c;
         //curry变量用于进位初始值设为0 在第一次相加时不需要这个变量,赋值为0 不会影响下面的操作
         var curry = 0;
         //设置一个while循环,每相加一次 需要对位节点向后移动, 如果都是null就代表相加结束
         while (l1 != null || l2 != null) {
             //解决两个链表节点数不相同的问题 如果没有对位节点就将对位节点设置为0 这样也不会影响结果
             var a = (l1 == null ? 0 : l1.val);
             var b = (l2 == null ? 0 : l2.val);
             //sum是上下两个节点的val值与进位上来的curry相加在与10取余所得,也是这个结果节点的值,符合相加原理 
             var sum = (a + b + curry) % 10;
             //分离出来进位的值
             curry = parseInt((a + b + curry) / 10);
             //这里是整个算法的核心,将值赋给下一个节点
             result.next = new ListNode(sum);
             //而将节点向后推
             result = result.next;
             //这里是判断上下两个链表的结束点,进行推移
             if (l1 != null) l1 = l1.next;
             if (l2 != null) l2 = l2.next;

         }
         //如果在循环完成之后,curry进位还是大于0 ,根据加法原理 需要进位
         if (curry > 0) {
             result.next = new ListNode(curry);
         }
         //c节点是表头 返回有值的第一个节点
         return c.next;

};