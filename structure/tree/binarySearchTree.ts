import { TreeNode } from './tree'

interface IBinarySearchTree<T> {
    insert(key: T): void;
    min(): BinarySearchTreeNode<T>;
    max(): BinarySearchTreeNode<T>;
    search(key: T): BinarySearchTreeNode<T>;
    remove(key: T): void;
    // 中序遍历
    inOrderTraverse(cb: Function): void;
    // 先序遍历
    preOrderTraverse(cb: Function): void;
    // 后序遍历
    postOrderTraverse(cb: Function): void;
}

enum Compare {
    LESS_THEN = -1,
    BIG_THEN = 1,
    EQUAL = 0
}

/**
 * 二叉树节点
 */
export class BinarySearchTreeNode<T> extends TreeNode<T> {
    constructor(public key: T, public left?: BinarySearchTreeNode<T>, public rigth?: BinarySearchTreeNode<T>){
        super(key)
    }
}

/**
 * 二叉搜索树
 */
export class BinarySearchTree<T> implements IBinarySearchTree<T> {
    constructor(private root?: BinarySearchTreeNode<T>, private count: number = 0, ){}

    insert(key: T){
        if(this.root){
            this.insertNode(this.root, key)
        }else{
            this.root = new TreeNode<T>(key)
        }
        // 节点数递增
        this.count++
    }

        /**
     * 
     * @param node 当前节点
     * @param key 
     */
    private insertNode(node: BinarySearchTreeNode<T>, key: T){
        // 二叉树新增节点
        if (this.compare(key, node.key) === Compare.LESS_THEN) {
            if(node.left == null){
                node.left = new TreeNode(key)
            }else{
                this.insertNode(node.left, key)
            }
        }else {
            if(node.rigth == null){
                node.rigth = new TreeNode(key)
            }else{
                this.insertNode(node.rigth, key)
            }
        }

    }

    private compare(a: T, b: T){
        if(a === b) return 0
        return a < b ? Compare.LESS_THEN : Compare.BIG_THEN
    }

    /**
     * 返回该树最小节点
     */
    min(){
        return this.minNode(this.root)
    }

    private minNode(node: BinarySearchTreeNode<T>): BinarySearchTreeNode<T>{
        // 定义指针，从树顶部开始遍历，只遍历左边的节点
        let point = node
        while (point != null && point.left != null) {
            point = point.left
        }
        return point
    }

    /**
     * 该树最大的节点
     */
    max(){
        return this.maxNode(this.root)
    }

    private maxNode(node: BinarySearchTreeNode<T>): BinarySearchTreeNode<T>{
        // 定义指针，遍历时，只向该节点右子节点移动
        let point = node
        while (point != null && point.rigth != null) {
            point = point.rigth
        }
        return point
    }

    /**
     * 指定搜索
     * 查询到节点，就将这个节点返回
     * 如果没有查到，则返回null
     * @param key 
     */
    search(key: T): BinarySearchTreeNode<T>{
        return this.searchNode(this.root, key)
    }

    private searchNode(node: BinarySearchTreeNode<T>, key: T) : BinarySearchTreeNode<T>{
        if (node == null) return null
        // 判断当前节点与目标节点的大小，即判断目标节点可能存在的位置，是左边还是右边
        if(this.compare(key, node.key) == Compare.LESS_THEN){
            return this.searchNode(node.left, key)
        }else if(this.compare(key, node.key) == Compare.BIG_THEN){
            return this.searchNode(node.rigth, key)
        }else if(this.compare(key, node.key) == Compare.EQUAL){
            return node
        }
        // 未搜索到节点
        return null
    }

    /**
     * 删除指定节点
     * 先确定节点位置，在处理节点上下类似链表操作
     * @param key 
     */
    remove(key: T){
        this.root = this.removeNode(this.root, key)
    }

    private removeNode(node: BinarySearchTreeNode<T>, key: T): BinarySearchTreeNode<T>{
        if(node == null) return null

        // 先确定目标节点在树中的位置
        if(this.compare(key, node.key) == Compare.LESS_THEN){
            this.removeNode(node.left, key)
        }else if(this.compare(key, node.key) == Compare.BIG_THEN){
            this.removeNode(node.rigth, key)
        }else if(this.compare(node.key, key) == Compare.EQUAL){
            // 当遍历到该节点时

            // 情况一，这个节点没有左右节点，直接将这个节点置为 null
            if(node.left == null && node.rigth == null){
                node = null
                return node
            }

            // 情况二，如果该节点只有一侧的子节点
            // 并将该节点重新赋值子节点的引用
            // 类似链表的删除节点
            if(node.left == null){
                node = node.rigth
                return node
            }
            if(node.rigth == null){
                node = node.left
                return node
            }

            // 情况三，该节点有左右两侧节点
            // 分析：一个节点的左右两个节点，右侧节点的子枝叶中最小值肯定比左侧任何节点的值要大
            // 1，先找到该节点右侧子枝叶中最小节点
            // 2，将这个最小节点的值去替换待删除的节点
            // 3，将这个最小节点移除
            // 4，将这个最小节点的父级节点引用清除
            let rightMin = this.minNode(node.rigth)
            node.key = rightMin.key
            node.rigth = this.removeNode(node.rigth, rightMin.key)
            return node
        }

        // 未查询到节点
        return null

    }

    /**
     * 中序遍历
     * 从最小到最大的顺序访问所有节点
     * 对树进行排序操作
     * @param cb 
     */
    inOrderTraverse(cb: Function){
        this.inOrderTraverseNode(this.root, cb)
    }

    private inOrderTraverseNode(node: BinarySearchTreeNode<T>, cb: Function){
        if(node != null){
            // 先出小于的
            this.inOrderTraverseNode(node.left, cb)
            // console.log('node =>', node)
            cb(node.key)
            // 再出大于的
            this.inOrderTraverseNode(node.rigth, cb)
        }
    }

    /**
     * 先序遍历
     * 以优先于后代节点的顺序访问每个节点
     * @param cb 
     */
    preOrderTraverse(cb: Function){
        this.preOrderTraverseNode(this.root, cb)
    }

    private preOrderTraverseNode(node: BinarySearchTreeNode<T>, cb: Function){
        if(node != null){
            cb(node.key)
            this.preOrderTraverseNode(node.left, cb)
            this.preOrderTraverseNode(node.rigth, cb)
        }
    }

    /**
     * 后续遍历
     * 先遍历节点的后代节点，再访问节点本身
     * 应用场景：计算一个目录极其子目录所有文件所占用空间的大小
     * @param cb 
     */
    postOrderTraverse(cb: Function){
        this.postOrderTraverseNode(this.root, cb)
    }

    private postOrderTraverseNode(node: BinarySearchTreeNode<T>, cb: Function){
        if(node != null){
            this.postOrderTraverseNode(node.left, cb)
            this.postOrderTraverseNode(node.rigth, cb)
            cb(node.key)
        }
    }
    
}

// let tree = new BinarySearchTree<number>()

// tree.insert(11);
// tree.insert(7); 
// tree.insert(15); 
// tree.insert(5); 
// tree.insert(3); 
// tree.insert(9); 
// tree.insert(8); 
// tree.insert(10); 
// tree.insert(13); 
// tree.insert(12); 
// tree.insert(14); 
// tree.insert(20); 
// tree.insert(18); 
// tree.insert(25);
// tree.insert(6);

// tree.postOrderTraverse(console.log)

// console.log('min', tree.min())
// console.log('max', tree.max())

// console.log(tree.search(20))
// console.log(tree.remove(20))
