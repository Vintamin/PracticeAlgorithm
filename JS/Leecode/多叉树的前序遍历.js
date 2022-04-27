/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 * 
 * 相当于层序遍历
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
 var preorder = function(root) {
    const result = [];
    const pre = (root) => {
        if (!root) return;
        result.push(root.val)
        root.children.forEach(child => pre(child))
    }
    pre(root)
    return result
};

