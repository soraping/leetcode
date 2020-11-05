interface ITree<T> {
    insert(key: T): void;
    search(key: T): TreeNode<T>;
    remove(key: T): void;
    // 中序遍历
    inOrderTraverse(cb: Function): void;
    // 先序遍历
    preOrderTraverse(): void;
    // 后序遍历
    postOrderTraverse(): void;
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
            cb(node.key)
            // 再出大于的
            this.inOrderTraverseNode(node.rigth, cb)
        }
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
}

let tree = new BinarySearchTree<number>()

tree.insert(10)
tree.insert(1)
tree.insert(12)
tree.insert(3)
tree.insert(22)
tree.insert(7)
tree.insert(13)
tree.insert(9)
tree.insert(33)

console.log(tree.inOrderTraverse(console.log))
