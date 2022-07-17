 //给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，
//并且每个节点只能存储 一位 数字。

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
 function ListNode(val, next) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }

     class LinkList{
        constructor(){
            this.head = null;
            this.size = 0;
        }
      
        append(element){
            let node =new ListNode(element);
            if (this.head == null) {
                this.head = node;
            }else{
                let current = this.getNode(this.size -1);
                current.next =node;
            }
            this.size++;
        }
      
      }
      
let list =new LinkList();

//返回头结点
var addTwoNumbers = function(l1, l2) {
    let fadeNode =new ListNode();
    let cur =fadeNode;
    let add=0;
    while(l1 !==null || l2 !==null){
        let sum =0;
        if (l1 !=null) {
            sum += l1.val;
            l1 =l1.next;
        }
        if (l2 !=null) {
            sum += l2.val;
            l2 =l2.next;
        }
        sum += add;
        cur.next =new ListNode(sum%10);
        add =Math.floor(sum/10);
        cur =cur.next
    }
    if(add>0){
        cur.next =new ListNode(add);
    }
    return fadeNode.next;
};

addTwoNumbers([2,4,3],[5,6,4])
console.log([2,4,3].val);
