/* 
用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，分别完成在队列尾部插入整数和在队列头部删除整数的功能。
(若队列中没有元素，deleteHead 操作返回 -1 )

原理：先把栈1挪空，里面的元素挪到栈2，元素插入到栈1后再把栈2中的元素挪回来
首先，两个栈分工不同，一个为入队栈，一个为出队栈，各自负责入队和出队。
删除头部元素的时候，把入栈元素全部push进outstack里，这时候outstack里就保存了原队列的倒序数组，
这个时候用pop取出最后一个元素并返回，即实现了deleteHead。
输入：
["CQueue","appendTail","deleteHead","deleteHead"]
[[],[3],[],[]]
输出：[null,null,3,-1]


*/
var CQueue = function() {
    this.stackA=[];
    this.stackB=[];
};

/** 
 * @param {number} value
 * @return {void}
 */
//入队
CQueue.prototype.appendTail = function(value) {
    //加入元素 可以直接向instack里面push 
    this.stackA.push(value)
};

/**
 * @return {number}
 */
//出队
CQueue.prototype.deleteHead = function() {
    if(this.stackB.length){//如果stackB中已经有元素了，直接pop出来的就是头元素
        return this.stackB.pop()
    }else{
        while (this.stackA.length) {//需要把stackA中都拿出来
            this.stackB.push(this.stackA.pop())
        }
        if(!this.stackB.length){//如果stackB为空了
            return -1;
        }else{
            return this.stackB.pop()//否则就直接pop最上面元素就是头元素
        }
    }
};