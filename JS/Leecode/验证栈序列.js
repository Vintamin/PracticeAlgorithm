/* 
    给定 pushed 和 popped 两个序列，每个序列中的 值都不重复，只有当它们可能是在最初空栈上进行的推入 push 和弹出 pop 操作序列的结果时，
    返回 true；否则，返回 false 。
    
    例如：
    输入：pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
    输出：true
    解释：我们可以按以下顺序执行：
    push(1), push(2), push(3), push(4), pop() -> 4,
    push(5), pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1


    思路：
    举例：入栈序列为1,2,3,4,5 某一序列为 2,3,1,4,5 。
    首先选择1 入栈，然后查看序列2 是否相同，不同说明没有出栈，继续入栈2，继续查看 相同，说明2出栈，
    然后继续查看是否相同1和3不同，继续入栈3，查看和序列2中的头元素3一致，出栈，继续查看序列1中的1，
    和序列2中的1 一致，然后出栈。。。直到最终序列2为空；如果最后发现序列1为空的时候序列2中仍然有元素，则说明不是合法出栈序列；

*/

/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
 var validateStackSequences = function(pushed, popped) {
    let stack=[], j=0;
    for(let i=0; i<pushed.length; i++){
        stack.push(pushed[i]);
        while(stack.length && stack[stack.length-1] === popped[j]){
            stack.pop();
            j++;
        }
    }
    return !stack.length;
};