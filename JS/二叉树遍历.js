//首先创建一棵二叉搜索树，所谓二叉搜索树，则左子树节点的值小于父节点，右子树的值大于父节点

class BinTreeNode { //创建树节点
    constructor(data) {
        this.data = data;
        this.leftChild = null;
        this.rightChild = null;
    }
}


class BinaryTree {
    constructor() {
        this.root = null;
    }
    //插入
    insert(value) {
        var newNode = new BinTreeNode(value); //实例化一个新节点
        var root = this.root;
        if (root == null) { //如果根节点不存在
            this.root = newNode; //将这个新节点作为根节点
        } else { //如果根节点存在
            this.insertNode(root, newNode); //将这个新节点在根节点之后找到合适位置插入
        }
    }

    insertNode(node, newNode) {
        //如果newNode节点值小于node节点值，进入node节点左分支
        if (newNode.data < node.data) {
            //如果node节点左孩子为空
            if (node.leftChild == null) {
                //将newNode赋给node节点左孩子，插入完毕。
                node.leftChild = newNode;
            } else {
                //如果node节点左孩子不为空，则继续向左孩子的左孩子递归
                this.insertNode(node.leftChild, newNode);
            }
        } else {
            if (node.rightChild == null) {
                node.rightChild = newNode;
            } else {
                this.insertNode(node.rightChild, newNode);
            }
        }
    }

    //前序遍历:中左右
    prevSort(node, arr = []) {
        /* let res = [];
        const preOrder = (node) => {
            if (node == null) return res;
            res.push(node.data);
            preOrder(node.leftChild);
            preOrder(node.rightChild);
        };
        preOrder(node);
        return res; */
        if (node) {
            arr.push(node.data);
            this.prevSort(node.leftChild, arr);
            this.prevSort(node.rightChild, arr);
        }
        return arr;
    }
    //中序遍历：左中右
    centerSort(node, arr = []) {
        /* if (!node) return [];
        const res = [];
        const stack = [];
        while (node || stack.length) {
            while (node) {
                stack.push(node)
                node = node.leftChild;
            }
            node = stack.pop();
            res.push(node.data);
            node = node.rightChild;
        }
        return res; */

        if (node) {
            this.centerSort(node.leftChild, arr);
            arr.push(node.data);
            this.centerSort(node.rightChild, arr);
        }
        return arr;
    }
    //后序遍历：左右中
    nextSort(node, arr = []) {
        /* // 初始化数据
        const res = [];
        const stack = [];
        while (node || stack.length) {
            while (node) {
                stack.push(node);
                res.unshift(node.data);
                node = node.rightChild;
            }
            node = stack.pop();
            node = node.leftChild;
        }
        return res; */

        if (node) {
            this.nextSort(node.leftChild, arr);
            this.nextSort(node.rightChild, arr);
            arr.push(node.data);
        }
        return arr;
    }
    //重建二叉树（已知前序、中序遍历）
    reConBinary(pre, vin) {
        let result = null;

        if (pre.length > 1) {
            let node = pre[0];
            let index = vin.indexOf(node);
            let vinLeft = vin.slice(0, index);
            let vinRight = vin.slice(index + 1);
            pre.shift();
            let preLeft = pre.slice(0, vinLeft.length);
            let preRight = pre.slice(vinLeft.length);

            result = {
                data: node,
                leftChild: reConBinary(preLeft, vinLeft),
                rightChild: reConBinary(preRight, vinRight)
            }
        } else if (pre.length === 1) {
            result = {
                data: pre[0],
                leftChild: null,
                rightChild: null
            }
        }

        return result
    }
    //二叉搜索树第 K 个节点:利用二叉搜索树的中序遍历是一个递增序列来解决，用数组存储遍历结果，返回第 k 个节点
    KthNode(pRoot, k) {
        if (pRoot == null || k < 1) {
            return null;
        }

        const arr = [];

        //中序遍历
        this.centerSort(pRoot, arr)

        return arr[k - 1];
    }

}

// 测试数据
var bt = new BinaryTree();
var nums = [12, 10, 19, 3, 2, 10, 15, 13];
for (var i = 0; i < nums.length; i++) {
    bt.insert(nums[i]);
}
//console.log(bt.node);



// 测试
console.log('-------');
console.log(bt);
console.log(bt.prevSort(bt.root));
console.log(bt.centerSort(bt.root));
console.log(bt.nextSort(bt.root));