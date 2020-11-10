import { Queue } from '../queue/queue'
/**
 * 树的节点类
 */
export class TreeNode<T> {
    /**
     * 
     * @param key 节点值
     * @param 子节点
     */
    constructor(public key: T, public children?: TreeNode<T>[]){}
}

interface ITree<T> {
    insert(key: T, parentNode ?: TreeNode<T>): void;
    search(key: T): TreeNode<T>;
}

/**
 * 树形结构
 */
export class Tree<T> implements ITree<T> {
    constructor(protected root?: TreeNode<T>, protected count: number = 0){}

    insert(key: T, parentNode ?: TreeNode<T>){
        let node = new TreeNode(key)
        if(parentNode != null){
            parentNode.children = parentNode.children || []
            parentNode.children.push(node)
        }else{
            this.root = node
        }
        this.count++

    }

    search(key: T){
        if(this.root == null) return null

        let q = new Queue<TreeNode<T>>()
        q.enqueue(this.root)

        let point = null
        
        while (!q.isEmpty()) {
            let temp = q.dequeue()
            if(temp.key == key){
                point = temp
                break
            }
            temp.children.forEach(item => q.enqueue(item))
        }

        return point
    }
}

let tree = new Tree()

tree.insert(2)
console.log(tree.search(2))

tree.insert(12, tree.search(2))

console.log(tree.search(2))

