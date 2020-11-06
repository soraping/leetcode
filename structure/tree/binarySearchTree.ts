interface ITree<T> {
    insert(key: T): void;
    search(key: T): TreeNode<T>;
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
    BIG_THEN = 1
}

interface IBinarySearchTree<T> extends ITree<T> {

}

/**
 * 树的节点类
 */
class TreeNode<T> {
    /**
     * 
     * @param key 节点值
     * @param left 左节点
     * @param rigth 右节点
     */
    constructor(public key: T, public left?: TreeNode<T>, public rigth?: TreeNode<T>){}
}

/**
 * 二叉搜索树
 */
class BinarySearchTree<T> implements IBinarySearchTree<T> {
    constructor(private root?: TreeNode<T>, private count: number = 0, ){}

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
    private insertNode(node: TreeNode<T>, key: T){
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

    private compare(a, b){
        if(a === b) return 0
        return a < b ? Compare.LESS_THEN : Compare.BIG_THEN
    }

    // search(key: T){}
    // remove(){}

    /**
     * 中序遍历
     * 从最小到最大的顺序访问所有节点
     * 对树进行排序操作
     * @param cb 
     */
    inOrderTraverse(cb: Function){
        this.inOrderTraverseNode(this.root, cb)
    }

    private inOrderTraverseNode(node: TreeNode<T>, cb: Function){
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

    private preOrderTraverseNode(node: TreeNode<T>, cb: Function){
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

    private postOrderTraverseNode(node: TreeNode<T>, cb: Function){
        if(node != null){
            this.postOrderTraverseNode(node.left, cb)
            this.postOrderTraverseNode(node.rigth, cb)
            cb(node.key)
        }
    }
    
}

let tree = new BinarySearchTree<number>()

tree.insert(11);
tree.insert(7); 
tree.insert(15); 
tree.insert(5); 
tree.insert(3); 
tree.insert(9); 
tree.insert(8); 
tree.insert(10); 
tree.insert(13); 
tree.insert(12); 
tree.insert(14); 
tree.insert(20); 
tree.insert(18); 
tree.insert(25);
tree.insert(6);

tree.postOrderTraverse(console.log)
