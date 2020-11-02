interface ITree<T> {
    insert(key: T): void;
    insertNode(node: TreeNode<T>, key: T): void;
    search(key: T): TreeNode<T>;
    remove(key: T): void;
    // 中序遍历
    inOrderTraverse(): void;
    // 先序遍历
    preOrderTraverse(): void;
    // 后序遍历
    postOrderTraverse(): void;
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
    constructor(private key: T, private left?: TreeNode<T>, private rigth?: TreeNode<T>){}
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
    search(key: T){}
    remove(){}
    
    /**
     * 
     * @param node 当前节点
     * @param key 
     */
    private insertNode(node: TreeNode<T>, key: T){
        // 二叉树

    }
}

let tree = new BinarySearchTree<number>()
